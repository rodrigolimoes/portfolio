import React from 'react';
import GlobalStyle from './globalStyles';
import HeaderApp from './layouts/Header';
import { ThemeProvider } from 'styled-components';
import Body from './layouts/Body';

function App() {
	return (
		<ThemeProvider theme={{ main: '#8257e5' }}>
			<GlobalStyle />
			<HeaderApp />
			<Body />
		</ThemeProvider>
	);
}

export default App;
