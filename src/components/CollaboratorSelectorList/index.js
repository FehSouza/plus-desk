import { useEffect } from 'react';
import * as S from './styles';

export const CollaboratorSelectorList = ({ listCollaborators, valueSearch, onClickOption, onCLickClose }) => {
  useEffect(() => {
    document.addEventListener('click', onCLickClose);
    return () => document.removeEventListener('click', onCLickClose);
  }, [onCLickClose]);

  const filterSearch = listCollaborators.filter((collaborator) =>
    collaborator.name.toLowerCase().includes(valueSearch.toLowerCase())
  );

  return (
    <S.ListCollaborators>
      {filterSearch.map((name) => (
        <S.ItemCollaborator onClick={() => onClickOption(name)} key={name.id}>
          {name.name}
        </S.ItemCollaborator>
      ))}
    </S.ListCollaborators>
  );
};
