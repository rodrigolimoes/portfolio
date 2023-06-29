import React, { FC } from 'react';
import { HomeSection, HomeTitle, Icons, Paragraph } from './style';
import IconButton from '../../components/IconButton/IconButton';
import ScrollDownButton from '../../components/ScrollDownButton/ScrollDownButton';

interface HomeContentStateProps {}
interface HomeContentDispatchProps {}

type HomeContentProps = HomeContentStateProps & HomeContentDispatchProps;

const HomeContent: FC<HomeContentProps> = () => {
	const onOpen = (url: string) => window.open(url, '_blank');
	return (
		<HomeSection id="home">
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
				<IconButton
					icon={'bi bi-github'}
					outline
					size="medium"
					onClick={() => onOpen('https://github.com/rodrigolimoes')}
				/>
				<IconButton
					icon={'bi bi-linkedin'}
					outline
					size="medium"
					onClick={() => onOpen('https://www.linkedin.com/in/rodrigolimoes/')}
				/>
				<IconButton icon={'bi bi-file-earmark-pdf'} outline size="medium" />
			</Icons>
			<ScrollDownButton href="#skills" />
		</HomeSection>
	);
};

export default HomeContent;
