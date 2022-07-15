import { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { CollaboratorSelectorList } from '../CollaboratorSelectorList/index.js';
import * as S from './styles.js';

export const CollaboratorSelector = ({ listCollaborators, setCollaborator }) => {
  const [showListCollaborators, setShowListCollaborators] = useState(false);
  const [valueSearch, setValueSearch] = useState('');

  const handleOpenCloseSelector = () => {
    setShowListCollaborators(!showListCollaborators);
    setValueSearch('');
  };

  const handleChooseCollaborator = (name) => {
    setCollaborator(name);
    setValueSearch(name.name);
    setShowListCollaborators(!showListCollaborators);
  };

  const handleSearch = (event) => setValueSearch(event.target.value);

  return (
    <S.Container onClick={(e) => e.stopPropagation()}>
      <S.SelectWrapper onClick={handleOpenCloseSelector}>
        <S.SelectInput onChange={handleSearch} placeholder="Selecione um colaborador" value={valueSearch} />
        <IoIosArrowUp />
      </S.SelectWrapper>
      {showListCollaborators && (
        <CollaboratorSelectorList
          listCollaborators={listCollaborators}
          valueSearch={valueSearch}
          onClickOption={handleChooseCollaborator}
          onCLickClose={handleOpenCloseSelector}
        />
      )}
    </S.Container>
  );
};
