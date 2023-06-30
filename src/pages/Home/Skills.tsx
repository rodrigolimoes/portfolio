import React, { FC } from 'react';
import { SkillsContent } from './style';
import SkillCard from '../../components/SkillCard/SkillCard';
import FadeInSection from '../../components/FadeInSection/FadeInSection';

interface SkillsStateProps {}
interface SkillsDispatchProps {}

type SkillsProps = SkillsStateProps & SkillsDispatchProps;

const Skills: FC<SkillsProps> = () => {
	const skills = [
		{
			name: 'ReactJS',
			description:
				'É uma biblioteca JavaScript de código aberto desenvolvida pelo Facebook para criar interfaces de usuário em aplicativos web.',
		},
		{
			name: 'NodeJS',
			description:
				'É um ambiente de tempo de execução JavaScript de código aberto que permite a execução de código JavaScript no lado do servidor.',
		},
		{
			name: 'JavaScript',
			description:
				'É uma linguagem de programação de alto nível, iterpretada e multiplataforma. Muito utilizada em aplicações web.',
		},
		{
			name: 'TypeScript',
			description:
				'É uma linguagem de programação de código aberto desenvolvida pela Microsoft.',
		},
		{
			name: 'MongoDb',
			description:
				'É um banco de dados não relacional de código aberto, altamente escalável e flexível, permitindo o armazenamento de grandes volumes de dados.',
		},
		{
			name: 'Git',
			description:
				'É um sistema de controle de versão distribuído amplamente utilizado para gerenciar o código-fonte de projetos de software.',
		},
	];
	return (
		<SkillsContent id="skills">
			<FadeInSection>
				<h1>Habilidades</h1>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						flexWrap: 'wrap',
					}}>
					{skills.map((skill, index) => (
						<SkillCard
							key={`${skill.name}-${index}`}
							title={skill.name}
							description={skill.description}
						/>
					))}
				</div>
			</FadeInSection>
		</SkillsContent>
	);
};

export default Skills;
