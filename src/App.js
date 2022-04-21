import { FaSearch } from 'react-icons/fa';
import { ThemeProvider } from 'styled-components';
import * as S from './AppStyles';
import './AppStyles.js';
import { Ticket } from './components';
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
          <Ticket date="13/04/1996" numberTicket={13444} hours={10} store="Intermezzo"></Ticket>
          <Ticket date="20/04/2022" numberTicket={13445} hours={8} store="Lojas Torra"></Ticket>
          <Ticket date="25/05/2022" numberTicket={13446} hours={1} store="Dona do Lar"></Ticket>
          <Ticket date="13/04/1996" numberTicket={13444} hours={10} store="Intermezzo"></Ticket>
          <Ticket date="20/04/2022" numberTicket={13445} hours={8} store="Lojas Torra"></Ticket>
          <Ticket date="25/05/2022" numberTicket={13446} hours={1} store="Dona do Lar"></Ticket>
          <Ticket date="13/04/1996" numberTicket={13444} hours={10} store="Intermezzo"></Ticket>
          <Ticket date="20/04/2022" numberTicket={13445} hours={8} store="Lojas Torra"></Ticket>
          <Ticket date="25/05/2022" numberTicket={13446} hours={1} store="Dona do Lar"></Ticket>
          <Ticket date="13/04/1996" numberTicket={13444} hours={10} store="Intermezzo"></Ticket>
          <Ticket date="20/04/2022" numberTicket={13445} hours={8} store="Lojas Torra"></Ticket>
          <Ticket date="25/05/2022" numberTicket={13446} hours={1} store="Dona do Lar"></Ticket>
        </S.Content>
      </S.Container>
    </ThemeProvider>
  );
}

export default App;
