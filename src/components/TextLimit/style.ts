import styled from 'styled-components';

export const TextLimitWrap = styled.div<{ limitRow: number }>`
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: ${({ limitRow }) => limitRow};
	-webkit-box-orient: vertical;
`;
