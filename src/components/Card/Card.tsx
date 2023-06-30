import React, { FC, ReactNode } from 'react';
import { Box, CardImg, CardFooter, CardBody, CardTitle } from './style';

interface CardComposition {
	Img: typeof CardImg;
	Footer: typeof CardFooter;
	Content: typeof CardBody;
	Title: typeof CardTitle;
}

interface CardStateProps {
	children: ReactNode;
}
interface CardDispatchProps {}

type CardProps = CardStateProps & CardDispatchProps;

const Card: FC<CardProps> & CardComposition = ({ children }) => {
	return <Box>{children}</Box>;
};

Card.Img = CardImg;
Card.Content = CardBody;
Card.Footer = CardFooter;
Card.Title = CardTitle;

export default Card;
