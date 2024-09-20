import React, { useLayoutEffect } from 'react';
import PageSplitter from '../PageSplitter/PageSplitter';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Projects() {
	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			let FL = gsap.utils.toArray('.FirstLine');
			gsap.to(FL, {
				x: '50vw',
				ease: 'none',
				duration: 1,
				trigger: '.SecondLine',
			});
		});
		return ctx.revert();
	});

	return (
		<div
			id='ProjectsContainer'
			className='panel w-[104vw] min-h-screen text-white relative mix-blend-difference z-[1000] text-center align-middle cursor-default'
		>
			<h1 className='absolute top-[50vh] left-[47.5vw] -translate-x-1/2 -translate-y-1/2 text-[15vh] flex'>
				<p className='FirstLine font-Hypik'>HuyN</p>
				<p className='FirstLine font-Hypik translate-x-[40%] italic'>'s</p>
			</h1>
			<h1 className='SecondLine absolute top-[56.75vh] left-[56vw] -translate-x-1/2 -translate-y-1/2 text-[4vh] tracking-[2vh] font-NewAmsterdam'>
				Adventure
			</h1>
			<PageSplitter SplitterID={2} />
		</div>
	);
}

export default Projects;
