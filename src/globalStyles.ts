import { createGlobalStyle, withTheme } from 'styled-components';

const GlobalStyle = createGlobalStyle`
		html {
			scroll-behavior: smooth;
		}
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
			font-family: Poppins, sans-serif;
      background-color: #E6FDFF;
    }
    &a {
      text-decoration: none;
			color: black;
    }

    :target {
      scroll-margin-top: 9vh;
			scroll-behavior: smooth;
    }
`;

export default withTheme(GlobalStyle);
