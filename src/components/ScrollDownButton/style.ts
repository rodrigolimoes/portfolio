import styled from 'styled-components';

export const ScrollDownButton = styled.a`
		cursor: pointer;
		width: 40px;
		height: 40px;
		border: 2px solid ${({ theme }) => theme.secondary};
		border-radius: 50%;
		position: relative;
		bottom: -90px;
		animation: down 1.5s infinite;
		-webkit-animation: down 1.5s infinite;

		&::before {
			content: '';
			position: absolute;
			top: 8px;
			left: 11px;
			width: 15px;
			height: 15px;
			border-left: 2px solid ${({ theme }) => theme.secondary};
			border-bottom: 2px solid ${({ theme }) => theme.secondary};
			transform: rotate(-45deg);
		}
	}

	@keyframes down {
		0% {
			transform: translate(0);
		}
		20% {
			transform: translateY(15px);
		}
		40% {
			transform: translate(0);
		}
	}

	@-webkit-keyframes down {
		0% {
			transform: translate(0);
		}
		20% {
			transform: translateY(15px);
		}
		40% {
			transform: translate(0);
		}
	}
`;
