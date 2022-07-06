import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 8px;
  margin-left: 4%;
  display: flex;
  align-items: center;
  height: 40px;
  width: min(92%, 800px);
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  border: none;
  border: ${({ theme, hide }) => (hide ? `1px solid ${theme.colors.primary}` : 'none')};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral};
  background-color: ${({ theme }) => theme.colors.neutralLight};
  transition-duration: 250ms;

  & svg {
    padding: 0 16px;
    transition-duration: 500ms;
    transform: ${({ hide }) => (hide ? 'rotateX(0deg)' : 'rotateX(180deg)')};
  }

  &:hover {
    cursor: pointer;
  }
`;

export const SelectInput = styled.button`
  flex: 1;
  height: 100%;
  background-color: transparent;
  border: none;
  padding: 0 16px;
  font-size: 16px;
  text-align: start;
  color: ${({ theme }) => theme.colors.neutral};

  &:hover {
    cursor: pointer;
  }
`;

