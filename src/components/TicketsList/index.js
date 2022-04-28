import { FaSearch } from 'react-icons/fa';
import { Ticket } from '../index';
import * as S from './styles';

export const TicketsList = ({ search, handleSearch, filterSearch }) => {
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
        {filterSearch.map((ticket) => {
          return (
            <Ticket
              key={ticket.ticketId}
              date={ticket.date}
              ticketId={ticket.ticketId}
              hoursFormatted={ticket.hoursFormatted}
              store={ticket.store}
              subject={ticket.subject}
            ></Ticket>
          );
        })}
      </S.List>
    </S.Container>
  );
};
