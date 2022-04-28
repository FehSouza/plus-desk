import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 36px 0;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.base};
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  color: ${({ theme }) => theme.colors.accent};
  margin-left: 4%;
`;

export const Content = styled.div`
  margin: 0 4%;
  margin-top: 24px;
  width: calc(100% - 8%);
  height: calc(100% - 60px);
  display: flex;
`;
