import React, { FC, Fragment } from 'react';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';

interface HomeStateProps {}
interface HomeDispatchProps {}

type HomeProps = HomeStateProps & HomeDispatchProps;

const Home: FC<HomeProps> = () => {
	return (
		<Fragment>
			<About />
			<Skills />
			<Projects />
		</Fragment>
	);
};

export default Home;
