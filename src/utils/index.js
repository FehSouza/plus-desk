export const formatDate = (date) =>
  Intl.DateTimeFormat('pt-BR', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  }).format(new Date(date));