import styled from 'styled-components';

export interface IconInputButtonProps {
	size?: 'small' | 'medium' | 'large';
	outline?: boolean;
	backgroundColor?: 'main';
}

const iconFontSize = {
	small: '16px',
	medium: '20px',
	large: '24px',
};

const iconButtonWidth = {
	small: '32px',
	medium: '44px',
	large: '52px',
};

export const IconInputButton = styled.i<IconInputButtonProps>`
	cursor: pointer;
	font-size: ${({ size }) =>
		size ? iconFontSize[size] : iconFontSize['small']};
	width: ${({ size }) =>
		size ? iconButtonWidth[size] : iconButtonWidth['small']};

	color: ${({ outline, theme, backgroundColor = 'main' }) =>
		outline ? theme[backgroundColor] : 'white'};
	background-color: ${({ outline, theme, backgroundColor = 'main' }) =>
		outline ? theme.bg : theme[backgroundColor as any]};
	border: 1px solid
		${({ theme, backgroundColor = 'main' }) => theme[backgroundColor as any]};
	border-radius: 5px;

	&:hover {
		color: white;
		background-color: #1b40c5;
		border: 1px solid
			${({ theme, backgroundColor = 'main' }) => theme[backgroundColor as any]};
	}
`;
