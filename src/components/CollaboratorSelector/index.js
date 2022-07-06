import { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { CollaboratorSelectorList } from '../CollaboratorSelectorList/index.js';
import * as S from './styles.js';

export const CollaboratorSelector = ({ setCollaborator, collaborator }) => {
  const [showListCollaborators, setShowListCollaborators] = useState(false);

  const handleSelectorCollaborator = () => setShowListCollaborators(!showListCollaborators);

  const handleChooseCollaborator = (name) => {
    setCollaborator(name);
    handleSelectorCollaborator();
  };

  const selectInputPlaceholder = collaborator.name ? collaborator.name : 'Selecione um colaborador';

  return (
    <S.Container onClick={(e) => e.stopPropagation()}>
      <S.SelectWrapper onClick={handleSelectorCollaborator}>
        <S.SelectInput>{selectInputPlaceholder}</S.SelectInput>
        <IoIosArrowUp />
      </S.SelectWrapper>
      {showListCollaborators && (
        <CollaboratorSelectorList onClickOption={handleChooseCollaborator} onCLickClose={handleSelectorCollaborator} />
      )}
    </S.Container>
  );
};
