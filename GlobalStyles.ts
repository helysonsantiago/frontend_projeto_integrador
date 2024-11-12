import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle` 


  /*Globals Styles*/
  :root{
    // DEFINA AQUI VARIAVEIS GLOBAIS
    --verde: #218D9E;
  }
  /*Standard formatting*/
  *{
  margin: 0;
  list-style: none;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;  

}

  body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
}


`;

export default GlobalStyles;