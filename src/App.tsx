import React from 'react';
import GlobalStyle from './globalStyles';
import HeaderApp from './layouts/Header';
import { ThemeProvider } from 'styled-components';
import Body from './layouts/Body';

function App() {
	return (
		<ThemeProvider
			theme={{ main: '#2850E2', bg: '#E6FDFF', secondary: '#202A25' }}>
			<GlobalStyle />
			<HeaderApp />
			<Body />
		</ThemeProvider>
	);
}

export default App;
