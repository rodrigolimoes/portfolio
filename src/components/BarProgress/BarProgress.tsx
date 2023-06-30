import React, { FC } from 'react';
import { Progress } from './style';

interface BarProgressStateProps {
	percentage: number;
}
interface BarProgressDispatchProps {}

type BarProgressProps = BarProgressStateProps & BarProgressDispatchProps;

const BarProgress: FC<BarProgressProps> = ({ percentage }) => {
	return (
		<>
			<Progress style={{ transform: `translateX(${percentage - 100}%)` }} />
		</>
	);
};

export default BarProgress;
