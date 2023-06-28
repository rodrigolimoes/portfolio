import React, { FC } from 'react';
import { ImageProject, Project, AboutProject, TechnologiesWrap } from './style';
import Button from '../Button/Button';
import Chip from '../Chip/Chip';

interface ProjectResumeStateProps {
	name: string;
	img: string;
	description: string;
	technologies: Array<string>;
}
interface ProjectResumeDispatchProps {
	onClickOpenRepository?: () => void;
	onClickViewProject?: () => void;
}

type ProjectResumeProps = ProjectResumeStateProps & ProjectResumeDispatchProps;

const ProjectResume: FC<ProjectResumeProps> = ({
	name,
	description,
	technologies,
	img,
	onClickOpenRepository,
	onClickViewProject,
}) => {
	return (
		<Project>
			<ImageProject img={img} />
			<AboutProject>
				<h4>{name}</h4>
				<span>{description}</span>
				<TechnologiesWrap>
					{technologies.map((technology, index) => (
						<Chip key={`${technology}-${index}`} text={technology} />
					))}
				</TechnologiesWrap>
				<Button
					text={'Abrir Repositório'}
					icon={'bi bi-github'}
					onClick={onClickOpenRepository}
					disabled={!onClickOpenRepository}
					style={{ marginRight: '4px' }}
				/>
				<Button
					text={'Visualizar'}
					icon={'bi bi-eye-fill'}
					backgroundColor={'info'}
					outline
					disabled={!onClickViewProject}
					onClick={onClickViewProject}
				/>
			</AboutProject>
		</Project>
	);
};

export default ProjectResume;
