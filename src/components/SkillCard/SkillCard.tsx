import React, { FC } from 'react';
import { SkillBox, Title } from './style';

interface SkillCardStateProps {
	img: string;
	title: string;
	description: string;
}
interface SkillCardDispatchProps {}

type SkillCardProps = SkillCardStateProps & SkillCardDispatchProps;

const SkillCard: FC<SkillCardProps> = ({ title, img, description }) => {
	return (
		<SkillBox>
			<Title>
				<h4>{title}</h4>
				<img src={img} alt={`${title} Logo`} />
			</Title>
			<span>{description}</span>
		</SkillBox>
	);
};

export default SkillCard;
