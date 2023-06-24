import React, { FC } from 'react';
import Home from '../pages/Home';

interface BodyStateProps {}
interface BodyDispatchProps {}

type BodyProps = BodyStateProps & BodyDispatchProps;

const Body: FC<BodyProps> = () => {
	return (
		<div>
			<Home />
		</div>
	);
};

export default Body;
