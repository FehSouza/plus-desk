import axios from 'axios';
import { useEffect, useState } from 'react';
import { CollaboratorSelector, TicketsList } from '../../components';
import * as S from './styles';

const getAllPortfolios = async () => {
  const { data } = await axios.get(`https://agenciaeplus.zendesk.com/api/v2/views`, {
    headers: {
      Authorization: process.env.REACT_APP_TOKEN,
    },
  });

  const activePortfolios = data.views.filter((portfolio) => portfolio.active === true);
  const filter = activePortfolios.filter(
    (portfolio) =>
      !portfolio.title.toLowerCase().includes('Todos'.toLowerCase()) &&
      !portfolio.title.toLowerCase().includes('comercial'.toLowerCase())
  );
  const portfoliosId = filter.map((portfolio) => portfolio.id);
  return portfoliosId;
};

const getCollaborator = async (collaborator) => {
  const { data } = await axios.get(`https://agenciaeplus.zendesk.com/api/v2/views/${collaborator}`, {
    headers: {
      Authorization: process.env.REACT_APP_TOKEN,
    },
  });
  return data;
};

export const Home = () => {
  const [collaborator, setCollaborator] = useState({});
  const [tickets, setTickets] = useState([]);
  const [listCollaborators, setListCollaborators] = useState([]);

  useEffect(() => {
    const getListCollaborators = async () => {
      const listId = await getAllPortfolios();
      const info = listId.map(async (idCollaborator) => {
        const collaboratorInfo = await getCollaborator(idCollaborator);
        const name = collaboratorInfo.view.title;
        const id = collaboratorInfo.view.id;
        return { name, id };
      });

      return await Promise.all(info);
    };

    const namesCollaborators = async () => {
      setListCollaborators(await getListCollaborators());
    };

    namesCollaborators();
  }, []);

  const nameCollaborator = collaborator.name ? `Colaborador - ${collaborator.name}` : 'Colaborador';
  const numberOfTickets = tickets.length === 1 ? `(1 ticket)` : `(${tickets.length} tickets)`;

  return (
    <S.Container>
      <S.Header>
        <S.Title>{nameCollaborator}</S.Title>
        {tickets.length ? <S.NumberTickets>{numberOfTickets}</S.NumberTickets> : <></>}
      </S.Header>
      <CollaboratorSelector listCollaborators={listCollaborators} setCollaborator={setCollaborator} />
      <S.Content>
        <TicketsList collaboratorId={collaborator.id} tickets={tickets} setTickets={setTickets} />
      </S.Content>
    </S.Container>
  );
};
