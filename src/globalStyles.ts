import { createGlobalStyle, withTheme } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
			font-family: OpenSans,serif;
    }
    &a {
      text-decoration: none;
			color: black;
    }
`;

export default withTheme(GlobalStyle);
