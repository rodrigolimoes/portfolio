import React, { FC } from 'react';
import { styled } from 'styled-components';

const Header = styled.header`
	display: flex;
	padding: 20px;
	justify-content: space-between;
	background-color: white;
	position: sticky;
	top: 0;
`;

const ListItem = styled.ul`
	display: flex;
	justify-content: space-evenly;
	list-style-type: none;
	margin: 0;
	padding: 0;
`;

const Item = styled.li`
	padding: 0 10px;
	&:hover {
		color: ${props => props.theme.main};
	}
`;

const Logo = styled.strong`
	color: ${props => props.theme.main};
`;

interface HeaderAppStateProps {}
interface HeaderAppDispatchProps {}

type HeaderAppProps = HeaderAppStateProps & HeaderAppDispatchProps;

const HeaderApp: FC<HeaderAppProps> = () => {
	return (
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
		</Header>
	);
};

export default HeaderApp;
