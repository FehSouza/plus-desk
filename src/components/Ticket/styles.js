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
  @media (max-width: 700px) {
    min-height: 53px;
  }
`;

const DotTicketCopied = css`
  transition-duration: 750ms;
  background-color: ${({ theme }) => theme.colors.base};
`;

const DateTicketCopied = css`
  width: 180px;
  max-width: 180px;
  color: ${({ theme }) => theme.colors.base};
  font-size: 14px;
  @media (max-width: 700px) {
    font-size: 14px;
    width: 180px;
    max-width: 180px;
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
    font-size: 18px;
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.base};
    }
    &:focus {
      color: ${({ theme }) => theme.colors.base};
    }
  }
`;

const statusColors = {
  past: 'error',
  present: 'success',
  future: 'primary',
};

export const Container = styled.li.attrs({ tabIndex: 0 })`
  transition-duration: 750ms;
  flex: 1;
  height: unset;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  padding: 12px;
  padding-right: 40px;
  margin-top: 8px;
  margin-right: 16px;
  box-sizing: border-box;
  flex-wrap: wrap;
  position: relative;
  outline: none;
  & svg {
    font-size: 0;
  }
  &:focus {
    background-color: ${({ theme }) => theme.colors.neutralLight};
    transition-duration: 250ms;
    & svg {
      font-size: 20px;
      color: ${({ theme }) => theme.colors.primary};
      transition-duration: 250ms;
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.neutralLight};
    transition-duration: 250ms;
    cursor: pointer;
    & svg {
      font-size: 20px;
      color: ${({ theme }) => theme.colors.primary};
      transition-duration: 250ms;
    }
  }
  @media (max-width: 700px) {
    background-color: ${({ theme, status }) => theme.colors[statusColors[status]]}30;
    &:focus {
      background-color: ${({ theme, status }) => lighten(0.15, theme.colors[statusColors[status]])};
    }
    &:hover {
      background-color: ${({ theme, status }) => theme.colors[statusColors[status]]}60;
    }
  }
  ${({ copied }) => copied && ContainerCopied}
`;

export const DotTicket = styled.div`
  transition-duration: 750ms;
  width: 7px;
  height: 7px;
  border: none;
  border-radius: 100%;
  margin-right: 12px;
  @media (max-width: 700px) {
    margin-right: 0px;
    width: 0px;
    height: 0px;
  }
  background-color: ${({ theme, status }) => theme.colors[statusColors[status]]};
  ${({ copied }) => copied && DotTicketCopied}
`;

export const DateTicket = styled.span`
  min-width: 48px;
  width: 100%;
  max-width: 48px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.accent};
  margin-right: 18px;
  @media (max-width: 700px) {
    margin-right: 12px;
    /* min-width: 86px;
    width: 86px; */
  }
  ${({ copied }) => copied && DateTicketCopied}
`;

export const NumberTicket = styled.span`
  transition-duration: 750ms;
  min-width: 40px;
  width: 40px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.accent};
  margin-right: 18px;
  @media (max-width: 700px) {
    margin-right: 12px;
  }
  ${({ copied }) => copied && NumberTicketCopied}
`;

export const HoursTicket = styled.span`
  transition-duration: 750ms;
  min-width: 40px;
  max-width: 40px;
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.accent};
  margin-right: 18px;
  @media (max-width: 700px) {
    margin-right: 12px;
  }
  ${({ copied }) => copied && HoursTicketCopied}
`;

export const StoreTicket = styled.span`
min-width: 140px;
  width: 100%;
  max-width: 140px;
  transition-duration: 750ms;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.accent};
  margin-right: 18px;
  @media (max-width: 700px) {
    margin-right: 12px;
  }
  ${({ copied }) => copied && StoreTicketCopied}
`;

export const SubjectTicket = styled.span`
min-width: 170px;
  width: 100%;
  max-width: 170px;
  transition-duration: 750ms;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.accent};
  margin-right: auto;
  
  ${({ copied }) => copied && StoreTicketCopied}
`

export const CopyButton = styled.div`
  background-color: transparent;
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  right: 16px;
  @media (max-width: 500px) {
    & svg {
      font-size: 20px;
      color: ${({ theme }) => theme.colors.neutral};
      transition-duration: 250ms;
    }
  }
  ${({ copied }) => copied && CopyButtonCopied}
`;
