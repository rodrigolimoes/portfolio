import styled from 'styled-components';

const backgroundColor = '#443f3f';

export const TooltipWrap = styled.div`
	position: relative;
	display: inline-block;

	&:hover {
		> span {
			visibility: visible;
			opacity: 1;
		}
	}
`;

export const TooltipText = styled.span`
	position: absolute;
	bottom: 100%;
	left: 50%;
	margin-left: -60px;
	padding: 5px 0;
	border-radius: 6px;

	visibility: hidden;
	opacity: 0;
	transition: opacity 0.4s;

	background-color: ${backgroundColor};
	color: ${({ theme }) => theme.bg};
	text-align: center;

	&::after {
		content: ' ';
		position: absolute;
		top: 100%;
		left: 50%;
		margin-left: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: ${backgroundColor} transparent transparent transparent;
	}
`;
