import styled from 'styled-components';

export const Content = styled.section`
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

export const AboutSection = styled(Content)`
	text-align: center;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	height: 100vh;

	div > div {
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;

		> * {
			width: 60%;

			@media only screen and (max-width: 579px) and (min-width: 768px) {
				width: 90%;
			}

			@media only screen and (max-width: 579px) {
				width: 100%;
			}
		}
	}
`;

export const SkillsContent = styled(Content)`
	min-height: 91vh;
	color: white;
	background-color: #153455;
`;

export const ProjectSection = styled(Content)`
	min-height: 91vh;

	h1 {
		margin-top: 20px;
		color: ${({ theme }) => theme.main};
	}
`;

export const AboutTitle = styled.h1`
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
