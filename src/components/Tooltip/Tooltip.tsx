import React, { FC, ReactNode } from 'react';
import { TooltipText, TooltipWrap } from './style';

interface TooltipStateProps {
	text: string;
	children: ReactNode;
}
interface TooltipDispatchProps {}

type TooltipProps = TooltipStateProps & TooltipDispatchProps;

const Tooltip: FC<TooltipProps> = ({ text, children }) => {
	return (
		<TooltipWrap>
			{children}
			<TooltipText>{text}</TooltipText>
		</TooltipWrap>
	);
};

export default Tooltip;
