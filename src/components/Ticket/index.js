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

  const verifyDate = (date) => {
    const dayNow = String(new Date().getDate());
    const monthNow = new Date().getMonth();
    const monthNowFormatted = String(monthNow + 1).padStart(2, '0');
    const yearNow = String(new Date().getFullYear());

    const [day, month, year] = date.split('/');

    if (dayNow === day && monthNowFormatted === month && yearNow === year) return 'present';
    if (year > yearNow) return 'future';
    if (month > monthNowFormatted) return 'future';
    if (day > dayNow && month === monthNowFormatted && year === yearNow) return 'future';
    return 'past';
  };

  const status = verifyDate(date);
  const textDateTicket = copy ? 'Copiado com sucesso' : date

  return (
    <S.Container  status={status} copied={copy} onClick={() => handleCopy(numberTicket)}>
      <S.DotTicket status={status} copied={copy} />
      <S.DateTicket copied={copy}>{textDateTicket}</S.DateTicket>
      <S.NumberTicket copied={copy}>{numberTicket}</S.NumberTicket>
      <S.HoursTicket copied={copy}>{String(hours).padStart(2, '0')}</S.HoursTicket>
      <S.StoreTicket copied={copy}>{store}</S.StoreTicket>
      <S.CopyButton copied={copy}>{copy ? <FaCheck /> : <MdOutlineContentCopy />}</S.CopyButton>
    </S.Container>
  );
};
