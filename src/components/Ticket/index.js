import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { MdOutlineContentCopy } from 'react-icons/md';
import * as S from './styles';

export const Ticket = ({ date, numberTicket, hours, store }) => {
  const [copy, setCopy] = useState(false);

  const handleCopy = (numberTicket) => {
    let text = `yarn dev -o ${numberTicket}`;
    navigator.clipboard.writeText(text);
    setCopy(true);
    setTimeout(setCopy, 1000, false);
  };

  return (
    <S.Container copied={copy} onClick={() => handleCopy(numberTicket)}>
      <S.DotTicket copied={copy} />
      <S.DateTicket copied={copy}>{date}</S.DateTicket>
      <S.NumberTicket copied={copy}>{numberTicket}</S.NumberTicket>
      <S.HoursTicket copied={copy}>{String(hours).padStart(2, '0')}</S.HoursTicket>
      <S.StoreTicket copied={copy}>{store}</S.StoreTicket>
      <S.CopyButton copied={copy}>{copy ? <FaCheck /> : <MdOutlineContentCopy />}</S.CopyButton>
    </S.Container>
  );
};
