import axios from 'axios';
import { useEffect, useState } from 'react';
import { CollaboratorSelector, TicketsList } from '../../components';
import * as S from './styles';

const getAllPortfolios = async () => {
  const { data } = await axios.get(`https://agenciaeplus.zendesk.com/api/v2/views`, {
    auth: {
      username: process.env.REACT_APP_USERNAME,
      password: process.env.REACT_APP_PASSWORD,
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
    auth: {
      username: process.env.REACT_APP_USERNAME,
      password: process.env.REACT_APP_PASSWORD,
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

  const acumulateHours = tickets.reduce((acc, ticket) => {
    if (!ticket.hours) return acc + 0;

    const hours = ticket.hours.split(' ');
    if (hours.length === 1) {
      return acc + Number(hours[0]);
    }
    return acc + Number(hours[0]) / 60;
  }, 0);

  const hours = Math.floor(acumulateHours);
  const minutes = Math.round((acumulateHours - hours) * 60);

  return (
    <S.Container>
      <S.Header>
        <S.Title>{nameCollaborator}</S.Title>
        {tickets.length ? (
          <S.NumberTickets>
            {numberOfTickets} - {`${hours}h ${minutes}m`}
          </S.NumberTickets>
        ) : (
          <></>
        )}
      </S.Header>
      <CollaboratorSelector listCollaborators={listCollaborators} setCollaborator={setCollaborator} />
      <S.Content>
        <TicketsList collaboratorId={collaborator.id} tickets={tickets} setTickets={setTickets} />
      </S.Content>
    </S.Container>
  );
};
