import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { ThemeProvider } from 'styled-components';
import * as S from './AppStyles';
import { Ticket } from './components';
import { TICKETS } from './mock/tickets';
import { GlobalStyle } from './styles/globalStyles';
import { theme } from './styles/theme';

const formatDate = (date) =>
  Intl.DateTimeFormat('pt-BR', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  }).format(new Date(date));

function App() {
  const [tickets, getTickets] = useState([]);

  useEffect(() => {
    const ticketsList = TICKETS.rows.map((ticket) => {
      const date = formatDate(ticket.due_date);
      const numberTicket = ticket.ticket_id;
      const hours = ticket[360023257414];
      const requester = TICKETS.users.find((user) => user.id === ticket.requester_id);
      const [store] = requester.name.split(' - ');

      return {
        date,
        numberTicket,
        hours,
        store,
      };
    });
    getTickets(ticketsList);
  }, []);

  return (
    <ThemeProvider theme={theme.base}>
      <GlobalStyle />

      <S.Container>
        <S.Title>Agendamentos - DEV #07</S.Title>
        <S.Content>
          <S.SearchWrapper>
            <S.SearchButton>
              <FaSearch />
            </S.SearchButton>
            <S.SearchInput placeholder="Digite sua pesquisa aqui..." />
          </S.SearchWrapper>
          <S.List>
            {tickets.map((ticket) => {
              return (
                <Ticket
                  key={ticket.numberTicket}
                  date={ticket.date}
                  numberTicket={ticket.numberTicket}
                  hours={ticket.hours}
                  store={ticket.store}
                ></Ticket>
              );
            })}
          </S.List>
        </S.Content>
      </S.Container>
    </ThemeProvider>
  );
}

export default App;
