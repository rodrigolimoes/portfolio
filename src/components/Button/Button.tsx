import React, { FC, HTMLProps } from 'react';
import { InputButton, InputButtonProps, DisabledButton } from './style';

interface ButtonStateProps
	extends Omit<HTMLProps<'button'>, 'children' | 'size'> {
	text: string;
	icon?: string;
}
interface ButtonDispatchProps {}

type ButtonProps = ButtonStateProps & ButtonDispatchProps & InputButtonProps;

const Button: FC<ButtonProps> = ({ text, icon, disabled, ...props }) => {
	if (disabled)
		return (
			<DisabledButton disabled={disabled} {...(props as any)}>
				{icon && <i className={icon}></i>}
				{text ?? ''}
			</DisabledButton>
		);

	return (
		<InputButton {...(props as any)}>
			{icon && <i className={icon}></i>}
			{text ?? ''}
		</InputButton>
	);
};

export default Button;
