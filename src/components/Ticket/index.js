import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { MdOutlineContentCopy } from 'react-icons/md';
import { formatDate } from '../../utils';
import * as S from './styles';

const verifyDate = (date) => {
  const dateFormatted = date ? formatDate(date) : '';

  const dayNow = String(new Date().getDate());
  const monthNow = new Date().getMonth();
  const monthNowFormatted = String(monthNow + 1).padStart(2, '0');
  const yearNow = String(new Date().getFullYear());

  const [day, month, year] = dateFormatted.split('/');

  if (dayNow === day && monthNowFormatted === month && yearNow === year) return 'present';
  if (year > yearNow) return 'future';
  if (month > monthNowFormatted) return 'future';
  if (day > dayNow && month === monthNowFormatted && year === yearNow) return 'future';
  return 'past';
};

export const Ticket = ({ date, ticketId, hoursFormatted, store, subject }) => {
  const [copy, setCopy] = useState(false);

  const handleCopy = (ticketId) => {
    const text = `yarn dev -o ${ticketId}`;
    navigator.clipboard.writeText(text);
    setCopy(true);
    setTimeout(setCopy, 1000, false);
  };

  const status = verifyDate(date);
  const textDateTicket = copy ? 'Copiado com sucesso' : formatDate(date);
  const hoursTicket = Number(hoursFormatted) > 0 ? hoursFormatted : '';

  return (
    <S.Container status={status} copied={copy} onClick={() => handleCopy(ticketId)}>
      <S.DotTicket status={status} copied={copy} />
      <S.DateTicket copied={copy}>{textDateTicket}</S.DateTicket>
      <S.NumberTicket copied={copy}>{ticketId}</S.NumberTicket>
      <S.HoursTicket copied={copy}>{hoursTicket}</S.HoursTicket>
      <S.StoreTicket copied={copy}>{store}</S.StoreTicket>
      <S.SubjectTicket copied={copy}>{subject}</S.SubjectTicket>
      <S.CopyButton copied={copy}>{copy ? <FaCheck /> : <MdOutlineContentCopy />}</S.CopyButton>
    </S.Container>
  );
};
