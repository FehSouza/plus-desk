import { lighten } from 'polished';
import styled from 'styled-components'

export const Container = styled.section`
  width: min(92%, 800px);
  height: 100%;
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.shadow};
  border: none;
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.white};
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

export const Labels = styled.div`
  display: flex;
  padding: 12px;
  box-sizing: border-box;
  margin-top: 12px;
  align-items: center;
  @media (max-width: 600px) {
    margin-top: 0px;
  }
`;

export const Date = styled.label`
  font-size: 12px;
  font-weight: 600;
  margin-left: 19px;
  width: 90px;
  max-width: 90px;
  @media (max-width: 700px) {
    margin-left: 0;
  }
  @media (max-width: 600px) {
    font-size: 0;
  }
`;

export const Ticket = styled.label`
  font-size: 12px;
  font-weight: 600;
  margin-left: 18px;
  width: 40px;
  max-width: 40px;
  text-align: center;
  @media (max-width: 700px) {
    margin-left: 12px;
  }
  @media (max-width: 600px) {
    font-size: 0;
  }
`;

export const Hours = styled.label`
  font-size: 12px;
  font-weight: 600;
  margin-left: 18px;
  width: 40px;
  max-width: 40px;
  text-align: center;
  @media (max-width: 700px) {
    margin-left: 12px;
  }
  @media (max-width: 600px) {
    font-size: 0;
  }
`;

export const Store = styled.label`
  width: 160px;
  max-width: 160px;
  font-size: 12px;
  font-weight: 600;
  margin-left: 18px;
  @media (max-width: 700px) {
    margin-left: 12px;
  }
  @media (max-width: 600px) {
    font-size: 0;
  }
`;

export const Subject = styled.label`
  width: 220px;
  max-width: 220px;
  font-size: 12px;
  font-weight: 600;
  margin-left: 18px;
  @media (max-width: 700px) {
    margin-left: 12px;
  }
  @media (max-width: 600px) {
    font-size: 0;
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
  margin-right: 16px;
`;