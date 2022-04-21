import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.li`
  flex: 1;
  height: unset;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  padding: 16px;
  margin-top: 8px;
  margin-right: 16px;
  box-sizing: border-box;
  flex-wrap: wrap;
  position: relative;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transition-duration: 250ms;
    cursor: pointer;
    & svg {
      color: ${({ theme }) => theme.colors.primary};
      transition-duration: 250ms;
    }
  }
`;

export const DotTicket = styled.div`
  width: 6px;
  height: 6px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 100%;
  margin-right: 16px;
`;

export const DateTicket = styled.span`
  width: 86px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.fontPrimary};
  margin-right: 36px;
`;

export const NumberTicket = styled.span`
  width: 46px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.fontPrimary};
  margin-right: 36px;
`;

export const HoursTicket = styled.span`
  width: 18px;
  text-align: end;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.fontPrimary};
  margin-right: 36px;
`;

export const StoreTicket = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.fontPrimary};
  margin-right: auto;
`;

export const CopyButton = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  right: 16px;
  & svg {
    color: ${({ theme }) => theme.colors.fontSecondary};
    font-size: 20px;
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => lighten(-0.125, theme.colors.primary)};
    }
  }
`;
