import axios from 'axios';
import { useEffect, useState } from 'react';
import { TicketsList } from '../../components';
import * as S from './styles';

const dictionary = {
  Dev1: 360207608593,
  Dev2: 1500015135822,
  Dev3: 1500023483561,
  Dev4: 1500036534281,
  Dev5: 1900011931305,
  Dev6: 1500050095241,
  Dev7: 4801219859095,
};

const getCollaborator = async (collaborator) => {
  const { data } = await axios.get(`https://agenciaeplus.zendesk.com/api/v2/views/${collaborator}`, {
    headers: {
      Authorization: process.env.REACT_APP_TOKEN,
    },
  });
  return data;
};

const getTickets = async (collaborator) => {
  const { data } = await axios.get(
    `https://agenciaeplus.zendesk.com/api/v2/views/${collaborator}/execute.json?per_page=30&page=1&sort_by=due_date&sort_order=asc&group_by=%20&include=via_id&exclude=sla_next_breach_at%2Clast_comment`,
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
  const [tickets, setTickets] = useState([]);
  const [search, setSearch] = useState('');
  const [nameCollaborator, setNameCollaborator] = useState('');

  useEffect(() => {
    const requestInfo = async (collaboratorId) => {
      const { rows, users } = await getTickets(collaboratorId);
      const collaboratorInfo = await getCollaborator(collaboratorId);

      const collaborator = collaboratorInfo.view.title;
      setNameCollaborator(collaborator);

      const ticketsList = await Promise.all(
        rows.map(async (ticket) => {
          const date = ticket.due_date;
          const ticketId = ticket.ticket_id;
          const hoursUpgrade = ticket[360023257414];
          const hoursFix = ticket[1500004574582];
          const hours = !!Number(hoursUpgrade) ? hoursUpgrade : hoursFix;
          const hoursFormatted = String(hours ? hours : '0').padStart(2, '0');
          const requester = users.find((user) => user.id === ticket.requester_id);
          const [store] = requester.name.split(' - ');
          const subject = ticket.subject;
          const ticketInfo = await getTicketsInfo(ticketId);
          const finalDate = ticketInfo.fields.find((field) => field.id === 360023273873);
          const finalDateFormatted = finalDate.value + 'T15:00:00Z';

          return {
            date,
            ticketId,
            hoursFormatted,
            store,
            subject,
            finalDateFormatted,
          };
        })
      );
      setTickets(
        ticketsList.sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) return 1;
          if (new Date(a.date) < new Date(b.date)) return -1;
          if (new Date(a.finalDateFormatted) > new Date(b.finalDateFormatted)) return 1;
          if (new Date(a.finalDateFormatted) < new Date(b.finalDateFormatted)) return -1;
          return 0;
        })
      );
    };
    requestInfo(dictionary.Dev7);
  }, []);

  const handleSearch = (event) => setSearch(event.target.value);

  const filterSearch = tickets.filter(
    (ticket) =>
      ticket.date?.includes(search) ||
      String(ticket.ticketId)?.includes(search) ||
      ticket.store.toLowerCase()?.includes(search.toLowerCase()) ||
      ticket.subject.toLowerCase()?.includes(search.toLowerCase())
  );
  return (
    <S.Container>
      <S.Title>Agendamentos {nameCollaborator}</S.Title>
      <S.Content>
        <TicketsList search={search} handleSearch={handleSearch} filterSearch={filterSearch} />
      </S.Content>
    </S.Container>
  );
};
