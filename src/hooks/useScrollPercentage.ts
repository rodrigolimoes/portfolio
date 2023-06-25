import { useEffect, useState } from 'react';

export const useScrollPercentage = (): number => {
	const [percentage, setPercentage] = useState(0);

	useEffect(() => {
		const updateScroll = () => {
			const scrollY = window.scrollY;
			const height = document.documentElement.scrollHeight - window.innerHeight;

			const percentage = (scrollY / height) * 100;
			setPercentage(percentage);
		};

		window.addEventListener('scroll', updateScroll);

		return () => window.removeEventListener('scroll', updateScroll);
	}, []);

	return percentage;
};
