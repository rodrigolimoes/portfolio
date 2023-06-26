import styled from 'styled-components';

export const Content = styled.section`
	display: flex;
	flex-direction: column;
	padding: 20px;
	height: 94vh;
`;

export const HomeSection = styled(Content)`
	text-align: center;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
`;

export const ProjectSection = styled(Content)`
	align-items: center;
	height: 85vh;

	> div {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-wrap: wrap;
	}

	> div > div {
		margin-bottom: 10px;
	}
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
