import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
   
    *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    width: 100%;
  }
`;