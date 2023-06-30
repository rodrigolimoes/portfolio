import React, { FC } from 'react';
import styled from 'styled-components';
import BarProgress from '../components/BarProgress/BarProgress';
import { useScrollPercentage } from '../hooks/useScrollPercentage';

const Header = styled.header`
	z-index: 9999;
	display: flex;
	padding: 0;
	margin: 0;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.bg};
	position: fixed;
	top: 0;
	width: 100%;
	height: 9vh;
`;

const ListItem = styled.ul`
	display: flex;
	justify-content: space-evenly;
	list-style-type: none;
	margin: 0;
	padding: 20px;
`;

const Item = styled.li`
	padding: 0 10px;

	border-radius: 50px;

	&:hover {
		color: ${props => props.theme.main};
	}
`;

const Logo = styled.h3`
	font-weight: 700;
	color: ${props => props.theme.main};
	padding: 0 20px;
`;

interface HeaderAppStateProps {}
interface HeaderAppDispatchProps {}

type HeaderAppProps = HeaderAppStateProps & HeaderAppDispatchProps;

const HeaderApp: FC<HeaderAppProps> = () => {
	const scrollPercentage = useScrollPercentage();

	return (
		<Header>
			<a href="#about">
				<Logo>{`<RL/>`}</Logo>
			</a>
			<ListItem>
				<a href="#about">
					<Item>Início</Item>
				</a>
				<a href="#skills">
					<Item>Habilidades</Item>
				</a>
				<a href="#projetos">
					<Item>Projetos</Item>
				</a>
			</ListItem>
			<BarProgress percentage={scrollPercentage} />
		</Header>
	);
};

export default HeaderApp;
