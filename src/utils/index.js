export const formatDate = (date) => {
  if (!date) return 'Sem data';
  
  return Intl.DateTimeFormat('pt-BR', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  }).format(new Date(date));
};
