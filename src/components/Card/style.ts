import styled from 'styled-components';

export const Box = styled.div`
	width: 400px;
	background-color: ${({ theme }) => theme.bg};
	text-align: left;
	border-radius: 3px;
	box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;
`;

export const CardImg = styled.img`
	width: 100%;
	margin: 0;
	padding: 0;
	max-height: 9.5rem;

	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
	object-fit: cover;
`;

export const CardTitle = styled.h3`
	margin: 0;
`;

export const CardBody = styled.div`
	margin: 0;
	padding: 10px;
`;

export const CardFooter = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: flex-end;
	padding: 10px;
`;
