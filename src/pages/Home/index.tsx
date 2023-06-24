import React, { FC } from 'react';
import { Content, HomeTitle, Icons } from './style';

interface HomeStateProps {}
interface HomeDispatchProps {}

type HomeProps = HomeStateProps & HomeDispatchProps;

const Home: FC<HomeProps> = () => {
	return (
		<Content>
			<div>
				<span>Ola, sou o Rodrigo</span>
				<HomeTitle>Full Stack</HomeTitle>
				<HomeTitle>Developer</HomeTitle>
				<span>
					Tenho 24 anos, tenho 2 anos em experiência na área de aplicações web
				</span>
			</div>
			<Icons>
				<i className="bi bi-github" style={{ fontSize: '2rem' }}></i>
				<i className="bi bi-linkedin" style={{ fontSize: '2rem' }}></i>
				<i className="bi bi-file-earmark-pdf" style={{ fontSize: '2rem' }}></i>
			</Icons>
		</Content>
	);
};

export default Home;
