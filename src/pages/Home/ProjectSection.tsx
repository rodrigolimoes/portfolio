import React, { FC } from 'react';
import { ProjectSection as ProjectSectionStyle } from './style';
import Card from '../../components/Card/Card';
import TextLimit from '../../components/TextLimit/TextLimit';
import Button from '../../components/Button/Button';
import img from '../../assets/img.png';
import Tooltip from '../../components/Tooltip/Tooltip';

interface ProjectSectionStateProps {}
interface ProjectSectionDispatchProps {}

type ProjectSectionProps = ProjectSectionStateProps &
	ProjectSectionDispatchProps;

const ProjectSection: FC<ProjectSectionProps> = () => {
	const projects = [
		{
			name: 'Hbs-Markdown-helpers',
			description:
				'hbs-markdown-helpers provides some markdown helpers for use in the handlebars template',
			img: '',
			technologies: ['Typescript'],
			url: '',
		},
		{
			name: 'Aplicação Full Stack - E-commerce',
			description: 'Aplicação completa de sistema de E-commerce',
			img: '',
			technologies: [
				'Typescript',
				'Nodejs',
				'ExpressJs',
				'ReactJs',
				'MongoDB',
				'PostgreSQL',
			],
			url: '',
		},
	];
	return (
		<ProjectSectionStyle id="projetos">
			<h1 style={{ marginTop: '20px', color: '#2850E2' }}>Projetos</h1>
			<div>
				{projects.map((project, index) => (
					<Card key={`${project.name}-${index}`}>
						<Card.Img src={img} />
						<Card.Content>
							<Card.Title>{project.name}</Card.Title>
							<Tooltip text={project.description}>
								<TextLimit limitRow={2}>{project.description}</TextLimit>
							</Tooltip>
						</Card.Content>
						<Card.Footer>
							<Button text={'ver mais'} outline />
						</Card.Footer>
					</Card>
				))}
			</div>
		</ProjectSectionStyle>
	);
};

export default ProjectSection;
