import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 4%;
  display: flex;
  align-items: center;
  height: 32px;
`;

export const Label = styled.label`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.accent};
`;

export const Select = styled.select`
  margin-left: 16px;
  height: 100%;
  border-radius: 8px;
  padding: 0 8px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.accent};
`;

export const Option = styled.option`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.accent};
`;
