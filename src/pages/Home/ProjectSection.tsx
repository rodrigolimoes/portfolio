import React, { FC } from 'react';
import { ProjectSection as ProjectSectionStyle } from './style';
import img from '../../assets/img_1.png';
import img2 from '../../assets/testeImg.png';
import ProjectResume from '../../components/ProjectResume/ProjectResume';
import FadeInSection from '../../components/FadeInSection/FadeInSection';

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
			img: img2,
			technologies: ['Typescript'],
			urlGithub: 'https://github.com/rodrigolimoes/hbs-markdown-helpers',
			urlProject: 'https://www.npmjs.com/package/hbs-markdown-helpers',
		},
		{
			name: 'Aplicação Full Stack - E-commerce',
			description:
				'`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution`',
			img: img,
			technologies: [
				'Typescript',
				'Nodejs',
				'ExpressJs',
				'ReactJs',
				'MongoDB',
				'PostgreSQL',
			],
			urlGithub: 'https://github.com/Bse-B2c',
			urlProject: undefined,
		},
	];

	const onOpen = (url: string) => window.open(url, '_blank');

	return (
		<ProjectSectionStyle id="projetos">
			<h1>Projetos</h1>
			{projects.map((project, index) => (
				<FadeInSection key={`${project.name}-${index}`}>
					<div style={{ marginBottom: '30px' }}>
						<ProjectResume
							name={project.name}
							description={project.description}
							img={project.img}
							technologies={project.technologies}
							onClickOpenRepository={
								project.urlGithub ? () => onOpen(project.urlGithub) : undefined
							}
							onClickViewProject={
								project.urlProject
									? () => onOpen(project.urlProject)
									: undefined
							}
						/>
					</div>
				</FadeInSection>
			))}
		</ProjectSectionStyle>
	);
};

export default ProjectSection;
