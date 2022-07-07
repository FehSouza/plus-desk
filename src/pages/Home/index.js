import { useState } from 'react';
import { CollaboratorSelector, TicketsList } from '../../components';
import * as S from './styles';

export const Home = () => {
  const [collaborator, setCollaborator] = useState({});
  const [tickets, setTickets] = useState([]);

  const nameCollaborator = collaborator.name ? `Colaborador - ${collaborator.name}` : 'Colaborador';

  const numberOfTickets = tickets.length === 1 ? `(1 ticket)` : `(${tickets.length} tickets)`;

  return (
    <S.Container>
      <S.Header>
        <S.Title>{nameCollaborator}</S.Title>
        {tickets.length ? <S.NumberTickets>{numberOfTickets}</S.NumberTickets> : <></>}
      </S.Header>
      <CollaboratorSelector collaborator={collaborator} setCollaborator={setCollaborator} />
      <S.Content>
        <TicketsList collaboratorId={collaborator.id} tickets={tickets} setTickets={setTickets} />
      </S.Content>
    </S.Container>
  );
};
