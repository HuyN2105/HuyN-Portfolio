// Components import
import MainPage from '../Main/MainPage';
import NavBar from '../NavBar/NavBar';
import CursorFollower from '../CursorFollower/CursorFollower';
import Projects from '../Projects/Projects';

// Tools import
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HorizontalScroll.css';
import { isMobile } from 'react-device-detect';

gsap.registerPlugin(ScrollTrigger);

function HorizontalScroll() {
	const component = useRef();

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			let panels = gsap.utils.toArray('.panel');
			gsap.to(panels, {
				xPercent: -100 * (panels.length - 1),
				ease: 'none',
				scrollTrigger: {
					trigger: '#MainContainer',
					pin: true,
					scrub: 1,
					// snap: 1 / (panels.length - 1),
					start: 'top top',
					end: () =>
						'+=' + document.getElementById('MainContainer').scrollWidth,
					pinSpacing: true,
				},
			});
		}, component);
		return () => ctx.revert();
	}, []);

	return (
		<div id='HorizontalScroll' ref={component}>
			<div id='MainContainer' className='flex flex-nowrap w-[204vw] h-[100vh]'>
				{isMobile ? <></> : <CursorFollower />}
				<NavBar />
				<MainPage />
				<Projects />
			</div>
		</div>
	);
}

export default HorizontalScroll;
