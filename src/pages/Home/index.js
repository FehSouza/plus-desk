import { useState } from 'react';
import { CollaboratorSelector, TicketsList } from '../../components';
import * as S from './styles';

export const Home = () => {
  const [collaborator, setCollaborator] = useState({});

  const nameCollaborator = collaborator.name ? `Colaborador - ${collaborator.name}` : 'Colaborador';

  return (
    <S.Container>
      <S.Title>{nameCollaborator}</S.Title>
      <CollaboratorSelector collaborator={collaborator} setCollaborator={setCollaborator} />
      <S.Content>
        <TicketsList collaboratorId={collaborator.id} />
      </S.Content>
    </S.Container>
  );
};
