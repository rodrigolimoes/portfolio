import React, { FC, Fragment } from 'react';
import HomeContent from './HomeContent';
import ProjectSection from './ProjectSection';
import Skills from './Skills';

interface HomeStateProps {}
interface HomeDispatchProps {}

type HomeProps = HomeStateProps & HomeDispatchProps;

const Home: FC<HomeProps> = () => {
	return (
		<Fragment>
			<HomeContent />
			<Skills />
			<ProjectSection />
		</Fragment>
	);
};

export default Home;
