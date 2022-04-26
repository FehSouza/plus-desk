import { useInformation } from '../../context/useInformation';
import * as S from './styles';

export const InfoTicket = () => {
  const { openInformation } = useInformation();
  const [statusOpen] = openInformation;

  return statusOpen && <S.Container></S.Container>;
};
