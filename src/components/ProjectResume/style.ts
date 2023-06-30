import styled from 'styled-components';

export const ImageProject = styled.div<{ img: string }>`
	height: 300px;
	border-radius: 10px;
	background: url(${({ img }) => img}) no-repeat;
	background-size: cover;
	box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;

	@media only screen and (max-width: 1200px) and (min-width: 1024px) {
		width: 500px;
	}

	@media only screen and (max-width: 1024px) {
		width: 100%;
	}

	@media only screen and (min-width: 1024px) {
		width: 40%;
	}
`;

export const AboutProject = styled.div`
	button {
		justify-self: flex-end;
	}

	@media only screen and (max-width: 1200px) and (min-width: 1024px) {
		width: 530px;
		margin-right: 20px;
	}

	@media only screen and (max-width: 1024px) {
		width: 100%;
	}

	@media only screen and (min-width: 1024px) {
		width: 50%;
	}
`;

export const Project = styled.div`
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	align-items: flex-start;

	@media only screen and (max-width: 1024px) {
		flex-direction: column;
	}
`;

export const TechnologiesWrap = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-wrap: wrap;
	margin-top: 10px;
	margin-bottom: 30px;
`;
