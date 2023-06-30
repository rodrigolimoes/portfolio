import React, { FC, ReactNode, useState, useRef, useEffect } from 'react';
import { FadeIn } from './style';

interface FadeInSectionStateProps {
	children: ReactNode;
}
interface FadeInSectionDispatchProps {}

type FadeInSectionProps = FadeInSectionStateProps & FadeInSectionDispatchProps;

const FadeInSection: FC<FadeInSectionProps> = ({ children }) => {
	const [isVisible, setVisible] = useState(false);
	const domRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		let observerRefValue: null | any = null;
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) setVisible(entry.isIntersecting);
			});
		});

		if (domRef.current) {
			observer.observe(domRef?.current);
			observerRefValue = domRef?.current;
		}

		return () => {
			if (observerRefValue) {
				observer.unobserve(observerRefValue);
			}
		};
	}, []);

	return (
		<FadeIn isVisible={isVisible} ref={domRef}>
			{children}
		</FadeIn>
	);
};

export default FadeInSection;
