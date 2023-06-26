import styled from 'styled-components';

export const Content = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	flex-wrap: wrap;
	justify-content: center;
	height: 94vh;
	text-align: center;
`;

export const HomeTitle = styled.h1`
	display: inline-block;
	font-size: 3.5rem;
	font-weight: 800;
	padding: 0;
	margin: -14px 0 -30px 0;
	color: ${props => props.theme.main};
`;

export const Paragraph = styled.p<{ margin: string }>`
	margin: ${props => props.margin};
`;

export const Icons = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 15px;

	> * {
		margin: 0 20px;
	}
`;
