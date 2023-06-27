import styled from 'styled-components';

export const FadeIn = styled.div<{ isVisible: boolean }>`
	width: 100%;
	opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
	transform: ${({ isVisible }) => (isVisible ? 'none' : `translateY(20vh)`)};
	visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
	transition: opacity 0.6s ease-out, transform 1.2s ease-out;
	will-change: opacity, visibility;
`;
