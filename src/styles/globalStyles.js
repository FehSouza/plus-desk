import { lighten } from 'polished';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
}

::-webkit-scrollbar {
  width: 12px; 
}

::-webkit-scrollbar-track {
  border-radius: 20px; 
  background-color: ${({ theme }) => lighten(-0.04, theme.colors.neutralLight)}; 
}

::-webkit-scrollbar-thumb {  
  border-radius: 20px;    
  background-color: ${({ theme }) => theme.colors.neutral}; 
  border: 3px solid ${({ theme }) => lighten(-0.04, theme.colors.neutralLight)};
}
`;
