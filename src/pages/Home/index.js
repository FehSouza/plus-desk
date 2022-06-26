import { useState } from 'react';
import { CollaboratorSelector, TicketsList } from '../../components';
import * as S from './styles';

export const Home = () => {
  const [collaborator, setCollaborator] = useState({});

  const handleCollaboratorSelected = (e) => {
    const index = e.target.selectedIndex;
    const infoCollaborator = e.target.childNodes[index];
    const name = e.target.value;
    const id = infoCollaborator.getAttribute('id');

    setCollaborator({ name, id });
  };

  return (
    <S.Container>
      <CollaboratorSelector handleCollaboratorSelected={handleCollaboratorSelected} />
      <S.Title>Agendamentos {collaborator.name !== '...' ? collaborator.name : ''}</S.Title>
      <S.Content>
        <TicketsList collaboratorId={collaborator.id} />
      </S.Content>
    </S.Container>
  );
};
