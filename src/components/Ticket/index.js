import { MdOutlineContentCopy } from 'react-icons/md';
import * as S from './styles';

export const Ticket = ({ date, numberTicket, hours, store }) => {
  return (
    <S.Container>
      <S.DotTicket />
      <S.DateTicket>{date}</S.DateTicket>
      <S.NumberTicket>{numberTicket}</S.NumberTicket>
      <S.HoursTicket>{hours}</S.HoursTicket>
      <S.StoreTicket>{store}</S.StoreTicket>
      <S.CopyButton>
        <MdOutlineContentCopy />
      </S.CopyButton>
    </S.Container>
  );
};
