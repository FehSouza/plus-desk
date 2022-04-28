import { ThemeProvider } from 'styled-components';
import { Home } from './pages';
import { GlobalStyle } from './styles/globalStyles';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme.base}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
