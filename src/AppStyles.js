import { lighten } from 'polished';
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
  margin-left: 5%;
`;

export const Content = styled.section`
  margin-top: 24px;
  width: min(90%, 700px);
  height: calc(100% - 60px);
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.shadow};
  border: none;
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  margin-left: 5%;
`;

export const SearchWrapper = styled.div`
  flex: 1;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.neutralLight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.neutralLight};
  box-sizing: border-box;
  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    transition-duration: 250ms;

    & svg {
      color: ${({ theme }) => theme.colors.primary};
      transition-duration: 250ms;
    }
  }
`;

export const SearchButton = styled.button`
  height: 100%;
  background-color: transparent;
  border: none;
  padding: 0 16px;
  box-sizing: border-box;
  outline: none;
  & svg {
    color: ${({ theme }) => theme.colors.neutral};
    font-size: 18px;
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => lighten(-0.15, theme.colors.primary)};
      transition-duration: 250ms;
    }
    &:focus {
      color: ${({ theme }) => lighten(-0.15, theme.colors.primary)};
    }
  }
`;

export const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 16px;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral};
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  padding-bottom: 16px;
  max-height: calc(100% - 64px);
  overflow-y: auto;
  box-sizing: border-box;
  list-style: none;
  margin-top: 24px;
  margin-right: 16px;
`;
