import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Ticket } from '../index';
import * as S from './styles';

export const TicketsList = ({ collaboratorId }) => {
  const [tickets, setTickets] = useState([]);
  const [search, setSearch] = useState('');

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

  useEffect(() => {
    const requestInfo = async (collaboratorId) => {
      const { rows, users } = await getTickets(collaboratorId);

      const ticketsList = await Promise.all(
        rows.map(async (ticket) => {
          const date = ticket.due_date;
          const ticketId = ticket.ticket_id;

          const hoursUpgrade = ticket[360023257414];
          const hoursFix = ticket[1500004574582];
          const hoursDesign = ticket[4800738993303];
          let hours;
          if (hoursUpgrade && hoursUpgrade !== '0') {
            hours = hoursUpgrade;
          } else if (hoursFix && hoursFix !== '0') {
            hours = hoursFix;
          } else {
            hours = hoursDesign;
          }

          const requester = users.find((user) => user.id === ticket.requester_id);
          const [store] = requester.name.split(' - ');
          const subject = ticket.subject;
          const ticketInfo = await getTicketsInfo(ticketId);
          const finalDate = ticketInfo.fields.find((field) => field.id === 360023273873);
          const finalDateFormatted = finalDate.value + 'T15:00:00Z';

          return {
            date,
            ticketId,
            hours,
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
    if (collaboratorId) requestInfo(collaboratorId);
  }, [collaboratorId]);

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
      <S.SearchWrapper>
        <S.SearchButton>
          <FaSearch />
        </S.SearchButton>
        <S.SearchInput value={search} onChange={handleSearch} placeholder="Digite sua pesquisa aqui..." />
      </S.SearchWrapper>
      <S.Labels>
        <S.Date>Data</S.Date>
        <S.Ticket>Ticket</S.Ticket>
        <S.Hours>Horas</S.Hours>
        <S.Store>Loja</S.Store>
        <S.Subject>Assunto</S.Subject>
      </S.Labels>
      <S.List>
        {collaboratorId === undefined || collaboratorId === null ? (
          <S.NoTicket>Nenhum colaborador foi selecionado.</S.NoTicket>
        ) : tickets.length === 0 ? (
          <S.NoTicket>Não há tickets pendentes.</S.NoTicket>
        ) : (
          filterSearch.map((ticket) => {
            return (
              <Ticket
                key={ticket.ticketId}
                date={ticket.date}
                ticketId={ticket.ticketId}
                hours={ticket.hours}
                store={ticket.store}
                subject={ticket.subject}
              ></Ticket>
            );
          })
        )}
      </S.List>
    </S.Container>
  );
};
