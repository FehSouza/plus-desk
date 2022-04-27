import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { InfoTicket, TicketsList } from '../../components';
import { InformationProvider } from '../../context/useInformation';
import { formatDate } from '../../utils';
import * as S from './styles';

const getTickets = async () => {
  const { data } = await axios.get(
    'https://agenciaeplus.zendesk.com/api/v2/views/4801219859095/execute.json?per_page=30&page=1&sort_by=due_date&sort_order=asc&group_by=%20&include=via_id&exclude=sla_next_breach_at%2Clast_comment',
    {
      headers: {
        Authorization: process.env.REACT_APP_TOKEN,
      },
    }
  );
  return data;
};

const getTicketsInfo = async (ticket) => {
  const { data } = await axios.get(
    `https://agenciaeplus.zendesk.com/api/v2/tickets/${ticket}?include=brands%2Cpermissions%2Cusers%2Cgroups%2Corganizations%2Csharing_agreements%2Cincident_counts%2Ctde_workspace%2Cslas`,
    {
      headers: {
        Authorization: process.env.REACT_APP_TOKEN,
      },
    }
  );
  return data.ticket;
};

export const Home = () => {
  const mounted = useRef(null);
  const [tickets, setTickets] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const requestInfo = async () => {
      if (!mounted.current) return;
      const { rows, users } = await getTickets();
      console.log({ rows, users });
      const ticketsList = await Promise.all(
        rows.map(async (ticket) => {
          let date = formatDate(ticket.due_date);
          const ticketId = ticket.ticket_id;
          const hoursUpgrade = ticket[360023257414];
          const hoursFix = ticket[1500004574582];
          const hours = !!Number(hoursUpgrade) ? hoursUpgrade : hoursFix;
          const requester = users.find((user) => user.id === ticket.requester_id);
          const [store] = requester.name.split(' - ');
          const subject = ticket.subject;
          const ticketInfo = await getTicketsInfo(ticketId);
          const finalDate = ticketInfo.fields.find((field) => field.id === 360023273873);
          const finalDateFormatted = formatDate(finalDate.value + 'T15:00:00Z');
          if (!ticket.due_date) date = finalDateFormatted;

          return {
            date,
            ticketId,
            hours,
            store,
            subject,
            finalDateFormatted,
            date2: ticket.due_date,
            limitDate: finalDate.value + 'T15:00:00Z'
          };
        })
      );
      setTickets(
        ticketsList.sort((a, b) => {
          if (new Date(a.date2) > new Date(b.date2)) return 1;
          if (new Date(a.date2) < new Date(b.date2)) return -1;
          if (new Date(a.limitDate) > new Date(b.limitDate)) return 1;
          if (new Date(a.limitDate) < new Date(b.limitDate)) return -1;
          return 0;
        })
      );
    };
    mounted.current = true;
    requestInfo();
  }, []);

  const handleSearch = (event) => setSearch(event.target.value);

  const filterSearch = tickets.filter(
    (ticket) =>
      ticket.date.includes(search) ||
      String(ticket.ticketId).includes(search) ||
      ticket.store.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <S.Container>
      <S.Title>Agendamentos - DEV #07</S.Title>
      <S.Content>
        <InformationProvider>
          <TicketsList search={search} handleSearch={handleSearch} filterSearch={filterSearch} />
          <InfoTicket />
        </InformationProvider>
      </S.Content>
    </S.Container>
  );
};
