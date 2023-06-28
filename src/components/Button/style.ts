import styled from 'styled-components';

export interface InputButtonProps {
	backgroundColor?: 'main' | 'info';
	size?: 'small' | 'medium' | 'large';
	outline?: boolean;
	icon?: string;
	disabled?: boolean;
}

const fontSize = {
	small: '14px',
	medium: '16px',
	large: '16px',
};

const paddingSize = {
	small: '0 16px',
	medium: '0 24px',
	large: '0 32px',
};

const heightButton = {
	small: '32px',
	medium: '44px',
	large: '52px',
};

const iconFontSize = {
	small: '16px',
	medium: '20px',
	large: '24px',
};

const iconMargin = {
	small: '4px',
	medium: '8px',
	large: '8px',
};

export const InputButton = styled.button<InputButtonProps>`
	font-family: Poppins, sans-serif;
	cursor: pointer;

	font-size: ${({ size }) => (size ? fontSize[size] : fontSize['small'])};
	padding: ${({ size }) => (size ? paddingSize[size] : paddingSize['small'])};
	height: ${({ size }) => (size ? heightButton[size] : heightButton['small'])};

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

	i {
		font-size: ${({ size }) =>
			size ? iconFontSize[size] : iconFontSize['small']};
		margin-right: ${({ size }) =>
			size ? iconMargin[size] : iconMargin['small']};
	}
`;

export const DisabledButton = styled(InputButton)`
	cursor: initial;
	border: 1px solid #e0e0e0;
	color: #b6b6b6;
	background: ${({ outline, theme }) => (outline ? theme.bg : '#e0e0e0')};

	&:hover {
		color: #b6b6b6;
		background-color: ${({ outline, theme }) =>
			outline ? theme.bg : '#e0e0e0'};
		border: 1px solid #e0e0e0;
	}
`;
