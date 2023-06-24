import React, { FC } from 'react';
import { styled } from 'styled-components';

const Header = styled.header`
	display: flex;
	padding: 20px;
	justify-content: space-between;
`;

const ListItem = styled.ul`
	display: flex;
	justify-content: space-evenly;
	list-style-type: none;
	margin: 0;
	padding: 0;
	& li {
		padding: 0 10px;
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
				<li>Home</li>
				<li>About</li>
				<li>Projetos</li>
			</ListItem>
		</Header>
	);
};

export default HeaderApp;
