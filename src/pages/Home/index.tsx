import React, { FC, Fragment } from 'react';
import HomeContent from './HomeContent';
import ProjectSection from './ProjectSection';

interface HomeStateProps {}
interface HomeDispatchProps {}

type HomeProps = HomeStateProps & HomeDispatchProps;

const Home: FC<HomeProps> = () => {
	return (
		<Fragment>
			<HomeContent />
			<ProjectSection />
		</Fragment>
	);
};

export default Home;
