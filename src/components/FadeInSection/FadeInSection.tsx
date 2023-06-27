import React, { FC, ReactNode, useState, useRef, useEffect } from 'react';
import { FadeIn } from './style';

interface FadeInSectionStateProps {
	children: ReactNode;
}
interface FadeInSectionDispatchProps {}

type FadeInSectionProps = FadeInSectionStateProps & FadeInSectionDispatchProps;

const FadeInSection: FC<FadeInSectionProps> = ({ children }) => {
	const [isVisible, setVisible] = useState(false);
	const domRef = useRef<any>();

	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) setVisible(entry.isIntersecting);
			});
		});

		observer.observe(domRef?.current);

		return () => observer.unobserve(domRef?.current);
	}, []);

	return (
		<FadeIn isVisible={isVisible} ref={domRef}>
			{children}
		</FadeIn>
	);
};

export default FadeInSection;
