import React, { FC } from 'react';
import { SkillsContent } from './style';
import logo from '../../assets/logo192.png';
import mongoLogo from '../../assets/mongoLogo.png';
import gitLogo from '../../assets/gitLogo.png';
import SkillCard from '../../components/SkillCard/SkillCard';
import FadeInSection from '../../components/FadeInSection/FadeInSection';

interface SkillsStateProps {}
interface SkillsDispatchProps {}

type SkillsProps = SkillsStateProps & SkillsDispatchProps;

const Skills: FC<SkillsProps> = () => {
	return (
		<SkillsContent>
			<FadeInSection>
				<h1>Habilidades</h1>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						flexWrap: 'wrap',
					}}>
					<SkillCard
						img={logo}
						title={'ReactJS'}
						description={
							'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution'
						}
					/>
					<SkillCard
						img={logo}
						title={'NodeJS'}
						description={
							'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution'
						}
					/>
					<SkillCard
						img={logo}
						title={'Typescript'}
						description={
							'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution'
						}
					/>
					<SkillCard
						img={logo}
						title={'JavaScript'}
						description={
							'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution'
						}
					/>
					<SkillCard
						img={mongoLogo}
						title={'MongoDb'}
						description={
							'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution'
						}
					/>
					<SkillCard
						img={gitLogo}
						title={'Git'}
						description={
							'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution'
						}
					/>
				</div>
			</FadeInSection>
		</SkillsContent>
	);
};

export default Skills;
