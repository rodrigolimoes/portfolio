import React, { FC } from 'react';
import Home from '../pages/Home/Home';

interface BodyStateProps {}
interface BodyDispatchProps {}

type BodyProps = BodyStateProps & BodyDispatchProps;

const Body: FC<BodyProps> = () => {
	return <Home />;
};

export default Body;
