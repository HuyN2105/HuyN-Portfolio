import React, { useEffect, useLayoutEffect, useRef } from 'react';
import MainPage from '../Main/MainPage';
import NavBar from '../NavBar/NavBar';
import CursorFollower from '../CursorFollower/CursorFollower';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HorizontalScroll.css';
import { isMobile } from 'react-device-detect';

gsap.registerPlugin(ScrollTrigger);

function HorizontalScroll() {
	const component = useRef();

	const scrollTween = useRef();

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
					snap: 1 / (panels.length - 1),
					start: 'top top',
					end: () =>
						'+=' + document.getElementById('MainContainer').scrollWidth,
					pinSpacing: true,
				},
			});
		}, component);
		scrollTween.current = ctx;
		return () => ctx.revert();
	}, []);

	return (
		<div id='HorizontalScroll' ref={component}>
			<div id='MainContainer' className='flex flex-nowrap w-[520vw] h-[100vh]'>
				{isMobile ? <></> : <CursorFollower />}
				<NavBar />
				<MainPage />
				<MainPage />
				<MainPage />
				<MainPage />
				<MainPage />
			</div>
		</div>
	);
}

export default HorizontalScroll;
