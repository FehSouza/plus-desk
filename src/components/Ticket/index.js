import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { GoGitCommit } from 'react-icons/go';
import { MdOutlineContentCopy } from 'react-icons/md';
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
    setTimeout(setCopy, 1250, false);
  };

  const handleCommit = ({ ticketId, event }) => {
    event.stopPropagation();

    const text = `git add . && git commit -m '${subject} - Chamado ${ticketId}'`;
    navigator.clipboard.writeText(text);
    setCommit(true);
    setTimeout(setCommit, 1250, false);
  };

  const status = verifyDate(date);

  const textDateTicket = copy ? 'Yarn dev copiado com sucesso' : 'Commit copiado com sucesso';

  const hoursTicket = hours ? hours : '0';

  return (
    <S.Container status={status} onClick={() => handleCopy(ticketId)}>
      <S.ContainerCopied copied={copy} committed={commit}>
        <S.CopiedText>{textDateTicket}</S.CopiedText>
        <FaCheck />
      </S.ContainerCopied>

      <S.DotTicket status={status} />
      <S.DateTicket>{formatDate(date)}</S.DateTicket>
      <S.NumberTicket>{ticketId}</S.NumberTicket>
      <S.HoursTicket>{hoursTicket}</S.HoursTicket>
      <S.StoreTicket>{store}</S.StoreTicket>
      <S.SubjectTicket>{subject}</S.SubjectTicket>
      <S.CopyButton>{<MdOutlineContentCopy />}</S.CopyButton>
      <S.GitCommitButton onClick={(event) => handleCommit({ ticketId, event })}>{<GoGitCommit />}</S.GitCommitButton>
    </S.Container>
  );
};
