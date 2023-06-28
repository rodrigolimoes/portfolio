import React, { FC } from 'react';
import { Chip as ChipStyle } from './style';

interface ChipStateProps {
	text: string;
}
interface ChipDispatchProps {}

type ChipProps = ChipStateProps & ChipDispatchProps;

const Chip: FC<ChipProps> = ({ text }) => {
	return <ChipStyle>{text}</ChipStyle>;
};

export default Chip;
