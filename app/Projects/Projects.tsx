import React, { useLayoutEffect } from 'react';
import PageSplitter from '../PageSplitter/PageSplitter';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Projects() {
	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.to('#FirstLine', {
				left: '47.5vw',
				ease: 'none',
				scrollTrigger: {
					trigger: '#ProjectsContainer',
					scrub: 1,
					pinSpacing: true,
					start: 'top top',
					end:
						'+=' + document.getElementById('ProjectsContainer').scrollWidth * 2,
				},
			});
			gsap.to('#SecondLine', {
				left: '56vw',
				ease: 'none',
				scrollTrigger: {
					trigger: '#ProjectsContainer',
					scrub: 1,
					pinSpacing: true,
					start: 'top top',
					end:
						'+=' + document.getElementById('ProjectsContainer').scrollWidth * 2,
				},
			});
		});
		return () => ctx.revert();
	}, []);

	return (
		<div
			id='ProjectsContainer'
			className='panel w-[104vw] min-h-screen text-white relative mix-blend-difference z-[1000] text-center align-middle cursor-default'
		>
			<div
				id='FirstLine'
				className='absolute top-[50vh] left-[25vw] -translate-x-1/2 -translate-y-1/2 text-[15vh] flex'
			>
				<p className='font-Hypik'>HuyN</p>
				<p className='font-Hypik translate-x-[40%] italic'>'s</p>
			</div>
			<div
				id='SecondLine'
				className='SecondLine absolute top-[56.75vh] left-[75vw] -translate-x-1/2 -translate-y-1/2 text-[4vh] tracking-[2vh] font-NewAmsterdam'
			>
				Adventure
			</div>
			<PageSplitter SplitterID={1} />
		</div>
	);
}

export default Projects;
