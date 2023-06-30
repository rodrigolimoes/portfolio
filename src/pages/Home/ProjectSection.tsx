import React, { FC } from 'react';
import { ProjectSection as ProjectSectionStyle } from './style';
import hbsMarkdownHelpers from '../../assets/hbsMarkdownHelpers.png';
import comercioEletronico from '../../assets/comercioEletronico.png';
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
				'É uma biblioteca publicada no npm que fornece funções auxiliares de markdown para uso em Handlebars template.',
			img: hbsMarkdownHelpers,
			technologies: ['TypeScript'],
			urlGithub: 'https://github.com/rodrigolimoes/hbs-markdown-helpers',
			urlProject: 'https://www.npmjs.com/package/hbs-markdown-helpers',
		},
		{
			name: 'Aplicação web para criação de sistemas de comércio eletrônico',
			description:
				'Esta aplicação foi criada como parte do trabalho de conclusão do curso de Ciência da Computação. Seu objetivo é viabilizar a exibição e venda de produtos. Durante o desenvolvimento, foram criados 6 serviços e 1 frontend para garantir seu pleno funcionamento.',
			img: comercioEletronico,
			technologies: [
				'TypeScript',
				'NodeJS',
				'ExpressJS',
				'API RESTful',
				'PostgreSQL',
				'MongoDB',
				'ReactJS',
				'ReduxJS',
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
