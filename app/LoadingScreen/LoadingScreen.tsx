import React, { useState, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';

import './LoadingScreen.css';

function LoadingScreen() {
	const [showSplash, setShowSplash] = useState(true);

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
			}, 0);
			return () => window.clearTimeout(timeout);
		}
	}, []);

	useLayoutEffect(() => {
		gsap.to('#LoadingText', {
			opacity: 0,
			duration: 0.4,
			delay: 0.5,
		});
		gsap.to('#Loading1', {
			x: '-100vw',
			duration: 0.9,
			ease: 'power1.out',
			delay: 1.15,
		});
		gsap.to('#Loading2', {
			x: '-100vw',
			duration: 0.85,
			ease: 'power1.inOut',
			delay: 1.125,
		});
	}, [showSplash]);

	return (
		<>
			<div
				className='center fixed text-white cursor-default z-[9999] bg-[#0b0b0b] h-screen w-screen'
				id='Loading1'
			>
				<div
					className='fixed top-[50vh] left-[50vw] -translate-x-1/2 -translate-y-1/2'
					id='LoadingText'
				>
					<div className='relative m-3 overflow-hidden tracking-widest font-normal text-xl rounded-3xl h-10 w-[25vw] cursor-default border flex text-nowrap border-white items-center whitespace-nowrap'>
						<div
							id='LoadingState1'
							className='absolute -translate-x-full z-1000'
						>
							PLEASE WAIT, WEBSITE'S CONTENT IS BEING LOADED
						</div>
						<div id='LoadingState2' className='absolute -translate-x-full'>
							PLEASE WAIT, WEBSITE'S CONTENT IS BEING LOADED
						</div>
					</div>
				</div>
			</div>
			<div
				className='w-screen h-screen bg-green-600 fixed z-[9900]'
				id='Loading2'
			></div>
		</>
	);
}

export default LoadingScreen;
