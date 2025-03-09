import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil:wght@100;200;300;400;500;600;700;800;900&display=swap');

    *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Big Shoulders Stencil', sans-serif;
    background-color: #EFEBFF;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    width: 100%;
  }
`;