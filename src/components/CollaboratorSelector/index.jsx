import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from './styles.js';

const dictionary = {
  OGLeader: 360151703153,
  OG1: 1500012529222,
  OG2: 1500016127121,
  OG3: 1900001914725,
  OG4: 6497892973719,
  Design: 1500018341522,
  DevLeader: 1500016443042,
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

export const CollaboratorSelector = ({ handleCollaboratorSelected }) => {
  const [listCollaborators, setListCollaborators] = useState([]);

  useEffect(() => {
    const getListCollaborators = async () => {
      const info = Object.values(dictionary).map(async (idCollaborator) => {
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

  return (
    <S.Container>
      <S.Label htmlFor="collaborator-selector">Selecione um colaborador:</S.Label>
      <S.Select onChange={handleCollaboratorSelected} id="collaborator-selector">
        <S.Option value="...">...</S.Option>
        {listCollaborators.map((name) => (
          <S.Option key={name.id} value={name.name} id={name.id}>
            {name.name}
          </S.Option>
        ))}
      </S.Select>
    </S.Container>
  );
};
