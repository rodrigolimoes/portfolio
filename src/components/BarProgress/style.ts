import styled from 'styled-components';

export const Progress = styled('span')`
	position: absolute;
	width: 100%;
	height: 5px;
	background-color: ${props => props.theme.main};
	bottom: 0;
`;
