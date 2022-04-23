import { lighten } from 'polished';
import styled, { css } from 'styled-components';

const ContainerCopied = css`
  transition-duration: 750ms;
  min-height: 57px;
  background-color: ${({ theme }) => theme.colors.success};
  &:focus {
    background-color: ${({ theme }) => theme.colors.success};
    & svg {
      color: ${({ theme }) => theme.colors.base};
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.success};
    & svg {
      color: ${({ theme }) => theme.colors.base};
    }
  }
`;

const DotTicketCopied = css`
  transition-duration: 750ms;
  background-color: ${({ theme }) => theme.colors.base};
`;

const DateTicketCopied = css`
  font-size: 0;
  width: 180px;
  max-width: 180px;
  ::before {
    content: 'Copiado com sucesso';
    color: ${({ theme }) => theme.colors.base};
    font-size: 16px;
  }
`;
const NumberTicketCopied = css`
  transition-duration: 750ms;
  display: none;
`;
const HoursTicketCopied = css`
  transition-duration: 750ms;
  display: none;
`;
const StoreTicketCopied = css`
  transition-duration: 750ms;
  display: none;
`;

const CopyButtonCopied = css`
  & svg {
    color: ${({ theme }) => theme.colors.base};
    font-size: 20px;
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.base};
    }
    &:focus {
      color: ${({ theme }) => theme.colors.base};
    }
  }
`;

export const Container = styled.li.attrs({ tabIndex: 0 })`
  transition-duration: 750ms;

  flex: 1;
  height: unset;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  padding: 16px;
  padding-right: 44px;
  margin-top: 8px;
  margin-right: 16px;
  box-sizing: border-box;
  flex-wrap: wrap;
  position: relative;
  outline: none;
  &:focus {
    background-color: ${({ theme }) => theme.colors.neutralLight};
    transition-duration: 250ms;
    & svg {
      color: ${({ theme }) => theme.colors.primary};
      transition-duration: 250ms;
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.neutralLight};
    transition-duration: 250ms;
    cursor: pointer;
    & svg {
      color: ${({ theme }) => theme.colors.primary};
      transition-duration: 250ms;
    }
  }
  ${({ copied }) => copied && ContainerCopied}
`;

export const DotTicket = styled.div`
  transition-duration: 750ms;
  width: 10px;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 100%;
  margin-right: 16px;
  ${({ copied }) => copied && DotTicketCopied}
`;

export const DateTicket = styled.span`
  min-width: 96px;
  width: 100%;
  max-width: 96px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.accent};
  margin-right: 36px;
  @media (max-width: 570px) {
    margin-right: 8px;
  }
  ${({ copied }) => copied && DateTicketCopied}
`;

export const NumberTicket = styled.span`
  transition-duration: 750ms;
  width: 46px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.accent};
  margin-right: 36px;
  @media (max-width: 570px) {
    margin-right: 8px;
  }
  ${({ copied }) => copied && NumberTicketCopied}
`;

export const HoursTicket = styled.span`
  transition-duration: 750ms;
  width: 18px;
  text-align: end;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.accent};
  margin-right: 36px;
  @media (max-width: 570px) {
    margin-right: 8px;
  }
  ${({ copied }) => copied && HoursTicketCopied}
`;

export const StoreTicket = styled.span`
  transition-duration: 750ms;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.accent};
  margin-right: auto;
  ${({ copied }) => copied && StoreTicketCopied}
`;

export const CopyButton = styled.div`
  background-color: transparent;
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  right: 16px;
  & svg {
    color: ${({ theme }) => theme.colors.neutral};
    font-size: 20px;
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => lighten(-0.125, theme.colors.primary)};
    }
  }
  ${({ copied }) => copied && CopyButtonCopied}
`;
