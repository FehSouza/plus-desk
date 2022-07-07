import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;
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
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral};
  background-color: ${({ theme }) => theme.colors.neutralLight};
  transition-duration: 350ms;

  & svg {
    padding: 0 16px;
    transition-duration: 350ms;
    transform: rotate(180deg);
  }

  &:hover {
    cursor: pointer;
  }

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.primary};

    & svg {
      transform: rotate(0deg);
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const SelectInput = styled.input`
  flex: 1;
  height: 100%;
  background-color: transparent;
  border: none;
  padding: 0 16px;
  font-size: 16px;
  text-align: start;
  color: ${({ theme }) => theme.colors.accent};
  outline: none;

  &:hover {
    cursor: pointer;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral};
  }
`;
