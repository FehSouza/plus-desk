import styled from 'styled-components';

export const ListCollaborators = styled.div`
  display: flex;
  flex-direction: column;
  width: min(100%, 900px);
  max-height: 318px;
  overflow-y: auto;
  box-shadow: 0px 0px 12px #00000073;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 48px;
  z-index: 2;
`;

export const ItemCollaborator = styled.div`
  font-size: 16px;
  padding: 14px;
  padding-left: 38px;
  color: ${({ theme }) => theme.colors.accent};
  position: relative;
  transition-duration: 350ms;

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border: none;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.colors.success};
    position: absolute;
    left: 16px;
    top: 21px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutralLight};
    cursor: pointer;
  }
`;
