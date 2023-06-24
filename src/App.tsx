import React from 'react';
import GlobalStyle from './globalStyles';
import HeaderApp from './layouts/Header';
import { ThemeProvider } from 'styled-components';

function App() {
	return (
		<ThemeProvider theme={{ main: 'royalblue' }}>
			<GlobalStyle />
			<HeaderApp />
		</ThemeProvider>
	);
}

export default App;
