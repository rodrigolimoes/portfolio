import React, { FC, Fragment } from 'react';
import { Content, HomeTitle, Icons, Paragraph } from './style';

interface HomeStateProps {}
interface HomeDispatchProps {}

type HomeProps = HomeStateProps & HomeDispatchProps;

const Home: FC<HomeProps> = () => {
	return (
		<Fragment>
			<Content id="home">
				<div>
					<Paragraph margin="7px 0">Ola, sou o Rodrigo Limões</Paragraph>
					<HomeTitle>Full Stack</HomeTitle>
					<br />
					<HomeTitle>Developer</HomeTitle>
					<Paragraph margin="15px 0">
						Tenho 24 anos, tenho 2 anos em experiência na área de aplicações web
					</Paragraph>
				</div>
				<Icons>
					<i className="bi bi-github"></i>
					<i className="bi bi-linkedin"></i>
					<i className="bi bi-file-earmark-pdf"></i>
				</Icons>
			</Content>
			{/*<div*/}
			{/*	id="projetos"*/}
			{/*	style={{*/}
			{/*		background: '#16789C',*/}
			{/*		height: '91vh',*/}
			{/*		padding: '20px',*/}
			{/*		textAlign: 'center',*/}
			{/*	}}>*/}
			{/*	<h1 style={{ color: 'white', marginTop: '20px' }}>Projetos</h1>*/}
			{/*</div>*/}
		</Fragment>
	);
};

export default Home;
