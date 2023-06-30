import React, { FC } from 'react';
import { ScrollDownButton as ScrollDownInputButton } from './style';

interface ScrollButtonStateProps {
	href?: string;
}
interface ScrollButtonDispatchProps {}

type ScrollButtonProps = ScrollButtonStateProps & ScrollButtonDispatchProps;

const ScrollDownButton: FC<ScrollButtonProps> = ({ href }) => {
	return <ScrollDownInputButton href={href} />;
};

export default ScrollDownButton;
