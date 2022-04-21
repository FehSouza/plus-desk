import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 36px;
  box-sizing: border-box;
  background-color: #f8f8f8;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.colors.fontPrimary};
`;

export const Content = styled.section`
  margin-top: 24px;
  width: 600px;
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.shadow};
  border: none;
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const SearchWrapper = styled.div`
  width: 100%;
  height: 38px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    transition-duration: 250ms;

    & svg {
      color: ${({ theme }) => theme.colors.primary};
      transition-duration: 250ms;
    }
  }
`;

export const SearchInput = styled.input`
  background-color: transparent;
  height: 100%;
  width: 100%;
  border: none;
  padding: 0 16px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.fontSecondary};
  font-size: 16px;
  outline: none;
`;

export const SearchButton = styled.button`
  background-color: transparent;
  height: 100%;
  width: 40px;
  border: none;
  & svg {
    color: ${({ theme }) => theme.colors.fontSecondary};
    font-size: 18px;
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => lighten(-0.125, theme.colors.primary)};
      transition-duration: 250ms;
    }
  }
`;
