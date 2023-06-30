import React, { FC } from 'react';
import { AboutSection, AboutTitle, Icons, Paragraph } from './style';
import IconButton from '../../components/IconButton/IconButton';
import ScrollDownButton from '../../components/ScrollDownButton/ScrollDownButton';

interface AboutStateProps {}
interface AboutDispatchProps {}

type AboutProps = AboutStateProps & AboutDispatchProps;

const About: FC<AboutProps> = () => {
	const onOpen = (url: string) => window.open(url, '_blank');

	const calcAge = (birthDate: { day: number; month: number; year: number }) => {
		const currentDate = new Date();
		const currentMonth = currentDate.getMonth() + 1;
		let age = currentDate.getFullYear() - birthDate.year;

		if (
			currentMonth < birthDate.month ||
			(currentMonth === birthDate.month &&
				currentDate.getDate() < birthDate.day)
		) {
			age--;
		}

		return age < 0 ? 0 : age;
	};

	return (
		<AboutSection id="about">
			<div>
				<Paragraph margin="7px 0">Ola, sou o Rodrigo Limões</Paragraph>
				<AboutTitle>Full Stack</AboutTitle>
				<br />
				<AboutTitle>Developer</AboutTitle>
				<div>
					<Paragraph margin="15px 0">
						Tenho {calcAge({ day: 21, month: 9, year: 1998 })} anos e sou um
						desenvolvedor Full Stack com 2 anos de experiência em
						desenvolvimento web.
					</Paragraph>
				</div>
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
				<IconButton
					icon={'bi bi-file-earmark-pdf'}
					outline
					size="medium"
					onClick={() =>
						onOpen(
							'https://docs.google.com/document/d/1IHC-rG3nL1BH0D4slZtRS6oalI8mCV1d8nP14vgtA1c/edit?usp=sharing'
						)
					}
				/>
			</Icons>
			<ScrollDownButton href="#skills" />
		</AboutSection>
	);
};

export default About;
