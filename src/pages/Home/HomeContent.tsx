import React, { FC } from 'react';
import { HomeSection, HomeTitle, Icons, Paragraph } from './style';
import IconButton from '../../components/IconButton/IconButton';
import ScrollDownButton from '../../components/ScrollDownButton/ScrollDownButton';

interface HomeContentStateProps {}
interface HomeContentDispatchProps {}

type HomeContentProps = HomeContentStateProps & HomeContentDispatchProps;

const HomeContent: FC<HomeContentProps> = () => {
	const onOpen = (url: string) => window.open(url, '_blank');

	const onDownloadCurriculum = () => {
		fetch('curriculum.pdf').then(response => {
			response.blob().then(blob => {
				const fileUrl = window.URL.createObjectURL(blob);

				let alink = document.createElement('a');
				alink.href = fileUrl;
				alink.download = 'curriculum.pdf';
				alink.click();
			});
		});
	};

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
		<HomeSection id="home">
			<div>
				<Paragraph margin="7px 0">Ola, sou o Rodrigo Limões</Paragraph>
				<HomeTitle>Full Stack</HomeTitle>
				<br />
				<HomeTitle>Developer</HomeTitle>
				<Paragraph margin="15px 0">
					Tenho {calcAge({ day: 21, month: 9, year: 1998 })} e sou um
					desenvolvedor web com 2 anos de experiência na área.
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
				<IconButton
					icon={'bi bi-file-earmark-pdf'}
					outline
					size="medium"
					onClick={onDownloadCurriculum}
				/>
			</Icons>
			<ScrollDownButton href="#skills" />
		</HomeSection>
	);
};

export default HomeContent;
