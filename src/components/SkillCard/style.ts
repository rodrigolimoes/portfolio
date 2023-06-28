import styled from 'styled-components';

export const SkillBox = styled.div`
	width: 350px;
	height: 200px;

	@media only screen and (max-width: 1200px) and (min-width: 1024px) {
		width: 350px;
	}

	@media only screen and (max-width: 1024px) {
		width: 350px;
	}

	@media only screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const Title = styled.div`
	display: flex;
	align-items: center;

	img {
		width: 25px;
		height: 25px;
		margin-left: 5px;
		object-fit: contain;
	}

	h4 {
		display: inline-block;
	}
`;
