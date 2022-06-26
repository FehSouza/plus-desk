import styled from 'styled-components';

const statusColors = {
  past: 'error',
  present: 'success',
  future: 'primary',
};

export const Container = styled.li.attrs({ tabIndex: 0 })`
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
  &:hover {
    background-color: ${({ theme }) => theme.colors.neutralLight};
    transition-duration: 250ms;
    cursor: pointer;
    & svg {
      font-size: 18px;
      color: ${({ theme }) => theme.colors.primary};
      transition-duration: 250ms;
    }
  }
  &:focus {
    background-color: ${({ theme }) => theme.colors.neutralLight};
    transition-duration: 250ms;
    & svg {
      font-size: 18px;
      color: ${({ theme }) => theme.colors.primary};
      transition-duration: 250ms;
    }
  }
  @media (max-width: 700px) {
    background-color: ${({ theme, status }) => theme.colors[statusColors[status]]}30;
    &:hover {
      background-color: ${({ theme, status }) => theme.colors[statusColors[status]]}60;
    }
  }
`;

export const DotTicket = styled.div`
  transition-duration: 750ms;
  width: 7px;
  height: 7px;
  border: none;
  border-radius: 100%;
  margin-right: 12px;
  background-color: ${({ theme, status }) => theme.colors[statusColors[status]]};
  @media (max-width: 700px) {
    margin-right: 0px;
    width: 0px;
    height: 0px;
  }
`;

export const DateTicket = styled.span`
  min-width: 90px;
  max-width: 90px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.accent};
  margin-right: 18px;
  @media (max-width: 700px) {
    margin-right: 12px;
  }
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
`;

export const HoursTicket = styled.span`
  transition-duration: 750ms;
  min-width: 84px;
  max-width: 84px;
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.accent};
  margin-right: 18px;
  @media (max-width: 700px) {
    margin-right: 12px;
  }
`;

export const StoreTicket = styled.span`
  min-width: 160px;
  max-width: 160px;
  transition-duration: 750ms;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.accent};
  margin-right: 18px;
  @media (max-width: 700px) {
    margin-right: 12px;
  }
`;

export const SubjectTicket = styled.span`
  min-width: 210px;
  max-width: 210px;
  transition-duration: 750ms;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.accent};
  margin-right: auto;
`;

export const CopyButton = styled.div`
  background-color: transparent;
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  right: 40px;
  @media (max-width: 500px) {
    & svg {
      font-size: 18px;
      color: ${({ theme }) => theme.colors.neutral};
      transition-duration: 250ms;
    }
  }
`;

export const GitCommitButton = styled.div`
  background-color: transparent;
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  right: 12px;
  @media (max-width: 500px) {
    & svg {
      font-size: 18px;
      color: ${({ theme }) => theme.colors.neutral};
      transition-duration: 250ms;
    }
  }
`;

export const ContainerCopied = styled.div`
  z-index: ${({ copied, committed }) => (copied || committed ? 2 : -1)};
  position: absolute;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.success};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  box-sizing: border-box;
  margin-left: -12px;
  & svg {
    color: ${({ theme }) => theme.colors.white};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.success};
    & svg {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const CopiedText = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
`;
