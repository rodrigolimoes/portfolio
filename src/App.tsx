import React from 'react';
import GlobalStyle from './globalStyles';
import HeaderApp from './layouts/Header';
import { ThemeProvider } from 'styled-components';
import Body from './layouts/Body';
import Footer from './layouts/Footer';

function App() {
	return (
		<ThemeProvider
			theme={{
				main: '#2850E2',
				bg: '#E6FDFF',
				secondary: '#0A1748',
				info: '#1E96FC',
			}}>
			<GlobalStyle />
			<HeaderApp />
			<Body />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
