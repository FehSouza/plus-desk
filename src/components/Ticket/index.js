import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { MdOutlineContentCopy } from 'react-icons/md';
import { GoGitCommit } from 'react-icons/go';
import { formatDate } from '../../utils';
import * as S from './styles';

const verifyDate = (date) => {
  const dateFormatted = date ? formatDate(date) : '';

  const dayNow = String(new Date().getDate()).padStart(2, '0');
  const monthNow = String(new Date().getMonth() + 1).padStart(2, '0');
  const yearNow = String(new Date().getFullYear());

  const [day, month, year] = dateFormatted.split('/');

  if (dayNow === day && monthNow === month && yearNow === year) return 'present';
  if (year > yearNow) return 'future';
  if (month > monthNow) return 'future';
  if (day > dayNow && month === monthNow && year === yearNow) return 'future';
  return 'past';
};

export const Ticket = ({ date, ticketId, hours, store, subject }) => {
  const [copy, setCopy] = useState(false);
  const [commit, setCommit] = useState(false);

  const handleCopy = (ticketId) => {
    const text = `yarn dev -o ${ticketId}`;
    navigator.clipboard.writeText(text);
    setCopy(true);
    setTimeout(setCopy, 1000, false);
  };

  const handleCommit = ({ ticketId, event }) => {
    event.stopPropagation();

    const text = `git add . && git commit -m '${subject} - Chamado ${ticketId}'`;
    navigator.clipboard.writeText(text);
    setCommit(true);
    setTimeout(setCommit, 1000, false);
  };

  const status = verifyDate(date);

  const textDateTicket = copy
    ? 'Yarn dev copiado com sucesso'
    : commit
    ? 'Commit copiado com sucesso'
    : formatDate(date);

  const hoursTicket = hours ? hours : '0';

  return (
    <S.Container status={status} copied={copy} committed={commit} onClick={() => handleCopy(ticketId)}>
      <S.DotTicket status={status} copied={copy} committed={commit} />
      <S.DateTicket copied={copy} committed={commit}>
        {textDateTicket}
      </S.DateTicket>
      <S.NumberTicket copied={copy} committed={commit}>
        {ticketId}
      </S.NumberTicket>
      <S.HoursTicket copied={copy} committed={commit}>
        {hoursTicket}
      </S.HoursTicket>
      <S.StoreTicket copied={copy} committed={commit}>
        {store}
      </S.StoreTicket>
      <S.SubjectTicket copied={copy} committed={commit}>
        {subject}
      </S.SubjectTicket>
      <S.CopyButton copied={copy} committed={commit}>
        {commit ? '' : copy ? <FaCheck /> : <MdOutlineContentCopy />}
      </S.CopyButton>
      <S.GitCommitButton copied={copy} committed={commit} onClick={(event) => handleCommit({ ticketId, event })}>
        {copy ? '' : commit ? <FaCheck /> : <GoGitCommit />}
      </S.GitCommitButton>
    </S.Container>
  );
};
