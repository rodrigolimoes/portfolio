import React, { FC, Fragment } from 'react';
import styled from 'styled-components';
import BarProgress from '../components/BarProgress';
import { useScrollPercentage } from '../hooks/useScrollPercentage';

const Header = styled.header`
	display: flex;
	padding: 0;
	margin: 0;
	justify-content: space-between;
	background-color: white;
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
	padding: 0 10px;
	&:hover {
		color: ${props => props.theme.main};
	}
`;

const Logo = styled.strong`
	color: ${props => props.theme.main};
	padding: 20px;
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
