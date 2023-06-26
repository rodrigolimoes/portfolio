import React, { FC } from 'react';
import { ScrollDownButton as ScrollDownInputButton } from './style';

interface ScrollButtonStateProps {}
interface ScrollButtonDispatchProps {}

type ScrollButtonProps = ScrollButtonStateProps & ScrollButtonDispatchProps;

const ScrollDownButton: FC<ScrollButtonProps> = () => {
	return <ScrollDownInputButton />;
};

export default ScrollDownButton;
