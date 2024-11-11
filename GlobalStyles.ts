import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle` 
  /*Globals Styles*/
  :root{
    // DEFINA AQUI VARIAVEIS GLOBAIS
  }
  /*Standard formatting*/
  *{
  margin: 0;
  list-style: none;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  outline-color: skyblue;
  }

  body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


`;

export default GlobalStyles;