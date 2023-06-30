import React, { FC } from 'react';
import styled from 'styled-components';

const FooterContent = styled.footer`
	background: #002626;
	color: ${({ theme }) => theme.bg};
	padding: 20px;

	p {
		padding: 0;
		margin-top: 0;

		font-weight: 300;
		font-size: 14px;
	}

	i {
		margin-right: 10px;
		font-size: 20px;
		cursor: pointer;
		&:hover {
			color: ${({ theme }) => theme.main};
		}
	}
`;

const FooterLogo = styled.h3`
	font-weight: 700;
	color: ${props => props.theme.main};
	margin: 0 0 3px 0;
`;

interface FooterStateProps {}
interface FooterDispatchProps {}

type FooterProps = FooterStateProps & FooterDispatchProps;

const Footer: FC<FooterProps> = () => {
	const onOpen = (url: string) => window.open(url, '_blank');

	return (
		<FooterContent>
			<FooterLogo>{`<RL/>`}</FooterLogo>
			<p>
				Portfólio desenvolvido por Rodrigo Limões.
				<br />
				<span>E-mail: rdglimoes@gmail.com</span>
			</p>

			<i
				className={'bi bi-github'}
				onClick={() => onOpen('https://github.com/rodrigolimoes')}
			/>
			<i
				className={'bi bi-linkedin'}
				onClick={() => onOpen('https://www.linkedin.com/in/rodrigolimoes/')}
			/>
		</FooterContent>
	);
};

export default Footer;
