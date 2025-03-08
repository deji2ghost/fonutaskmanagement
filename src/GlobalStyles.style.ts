import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    background-color: #EFEBFF;
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* Prevents horizontal scrolling */
    width: 100%;
  }
`;