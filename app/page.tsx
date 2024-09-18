'use client';

import React, { useState, useEffect } from 'react';
import HorizontalScroll from './HorizontalScroll/HorizontalScroll';
import LoadingScreen from './LoadingScreen/LoadingScreen';

function Home() {
	const [showSplash, setShowSplash] = useState(true);
	const [LoadingState, setLoadingState] = useState(true);

	useEffect(() => {
		if (document.readyState !== 'complete') {
			const handler = () => {
				console.log('load');
				setShowSplash(false);
			};
			window.addEventListener('load', handler);

			return () => {
				window.removeEventListener('load', handler);
			};
		} else {
			const timeout = window.setTimeout(() => {
				console.log('timeout');
				setShowSplash(false);
				setLoadingState(false);
			}, 0);
			return () => window.clearTimeout(timeout);
		}
	}, []);

	return (
		<>
			{showSplash ? <LoadingScreen LoadingState={LoadingState} /> : <></>}
			<HorizontalScroll />
		</>
	);
}

export default Home;
