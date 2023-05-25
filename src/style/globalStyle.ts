import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  a {
  text-decoration:none;
  color:inherit;
}
`;

export default GlobalStyle;
