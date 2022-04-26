import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import * as S from './AppStyles';
import { InfoTicket, TicketsList } from './components';
import { InformationProvider } from './context/useInformation';
import { TICKETS } from './mock/tickets';
import { GlobalStyle } from './styles/globalStyles';
import { theme } from './styles/theme';

const formatDate = (date) =>
  Intl.DateTimeFormat('pt-BR', {
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(date));

function App() {
  const [tickets, setTickets] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const ticketsList = TICKETS.rows.map((ticket) => {
      const date = formatDate(ticket.due_date);
      const numberTicket = ticket.ticket_id;
      const hours = ticket[360023257414];
      const requester = TICKETS.users.find((user) => user.id === ticket.requester_id);
      const [store] = requester.name.split(' - ');
      const subject = ticket.subject;

      return {
        date,
        numberTicket,
        hours,
        store,
        subject,
      };
    });
    setTickets(ticketsList);
  }, []);

  const handleSearch = (event) => setSearch(event.target.value);

  const filterSearch = tickets.filter(
    (ticket) =>
      ticket.date.includes(search) ||
      String(ticket.numberTicket).includes(search) ||
      ticket.store.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ThemeProvider theme={theme.base}>
      <GlobalStyle />

      <S.Container>
        <S.Title>Agendamentos - DEV #07</S.Title>
        <S.Content>
          <InformationProvider>
            <TicketsList search={search} handleSearch={handleSearch} filterSearch={filterSearch} />
            <InfoTicket />
          </InformationProvider>
        </S.Content>
      </S.Container>
    </ThemeProvider>
  );
}

export default App;
