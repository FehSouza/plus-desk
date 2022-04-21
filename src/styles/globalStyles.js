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
  margin-left: 16px;
}

::-webkit-scrollbar-track {
  border-radius: 20px;       /* roundness of the scroll thumb */
  background-color: ${({theme}) => theme.colors.grey};        /* color of the tracking area */
}

::-webkit-scrollbar-thumb {    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 3px solid ${({theme}) => theme.colors.grey};  /* creates padding around scroll thumb */
  background-color: ${({theme}) => theme.colors.fontSecondary};        /* color of the tracking area */
}
`;
