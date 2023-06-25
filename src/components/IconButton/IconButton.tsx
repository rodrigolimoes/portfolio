import React, { FC, HTMLProps } from 'react';
import { IconInputButton, IconInputButtonProps } from './style';

interface IconButtonStateProps
	extends Omit<HTMLProps<'button'>, 'children' | 'size'> {
	icon: string;
}
interface IconButtonDispatchProps {}

type IconButtonProps = IconButtonStateProps &
	IconButtonDispatchProps &
	IconInputButtonProps;

const IconButton: FC<IconButtonProps> = ({ icon, ...props }) => {
	return (
		<IconInputButton {...(props as any)}>
			<i className={icon}></i>
		</IconInputButton>
	);
};

export default IconButton;
