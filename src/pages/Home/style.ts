import styled from 'styled-components';

export const Content = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	flex-wrap: wrap;
	justify-content: center;
	height: 85vh;
`;

export const HomeTitle = styled.h1`
	font-size: 4rem;
	font-weight: 800;
	padding: 0;
	margin: 0;
`;

export const Icons = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-top: 20px;

	i {
		font-size: 2rem;
		cursor: pointer;
		transition: transform 1.5s;

		&:hover {
			transform: rotateY(360deg);
		}
	}
`;
