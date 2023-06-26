import React, { FC, Fragment } from 'react';
import styled from 'styled-components';
import BarProgress from '../components/BarProgress';
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
`;

const ListItem = styled.ul`
	display: flex;
	justify-content: space-evenly;
	list-style-type: none;
	margin: 0;
	padding: 20px;
`;

const Item = styled.li`
	color: ${({ theme }) => theme.bg};
	padding: 0 10px;
	margin-left: 5px;
	background-color: ${props => props.theme.main};

	border-radius: 50px;

	&:hover {
		color: ${props => props.theme.main};
		background-color: ${({ theme }) => theme.bg};
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
		<Fragment>
			<Header>
				<Logo>{`<RL/>`}</Logo>
				<ListItem>
					<a href="#home">
						<Item>Home</Item>
					</a>
					<a href="https://google.com">
						<Item>About</Item>
					</a>
					<a href="#projetos">
						<Item>Projetos</Item>
					</a>
				</ListItem>
				<BarProgress percentage={scrollPercentage} />
			</Header>
		</Fragment>
	);
};

export default HeaderApp;
