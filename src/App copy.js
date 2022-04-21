import { FaSearch } from 'react-icons/fa';
import { ThemeProvider } from 'styled-components';
import * as S from './AppStyles';
import './AppStyles.js';
import { GlobalStyle } from './styles/globalStyles';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme.base}>
      <GlobalStyle />

      <S.Container>
        <S.Title>Agendamentos - DEV #07</S.Title>
        <S.Content>
          <S.SearchWrapper>
            <S.SearchInput placeholder="Digite sua pesquisa aqui..." />
            <S.SearchButton>
              <FaSearch />
            </S.SearchButton>
          </S.SearchWrapper>
          <S.Ticket>
            <S.Dot />
            <S.Date />
            <S.NumberTicket />
            <S.HoursTicket />
            <S.Store />
          </S.Ticket>
        </S.Content>
      </S.Container>
    </ThemeProvider>
  );
}

export default App;
