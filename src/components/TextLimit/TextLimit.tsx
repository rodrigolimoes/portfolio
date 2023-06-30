import React, { FC, ReactNode } from 'react';
import { TextLimitWrap } from './style';

interface TextLimitStateProps {
	limitRow: number;
	children: ReactNode;
}
interface TextLimitDispatchProps {}

type TextLimitProps = TextLimitStateProps & TextLimitDispatchProps;

const TextLimit: FC<TextLimitProps> = ({ limitRow, children }) => {
	return <TextLimitWrap limitRow={limitRow}>{children}</TextLimitWrap>;
};

export default TextLimit;
