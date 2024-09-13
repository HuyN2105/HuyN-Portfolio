import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function PageSplitter() {
	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.to('#Row2', {
				xPercent: 100,
				ease: 'none',
				scrollTrigger: {
					trigger: '#PageSplitter',
					end: '+=' + window.innerWidth, // End the animation when the bottom of the trigger hits the top of the viewport
					scrub: true, // Smoothly animate the progress
					markers: true, // Enable markers for debugging
				},
			});
		});
		return () => ctx.revert();
	}, []);

	return (
		<div
			id='PageSplitter'
			className='rotate-90 w-[120vw] border-t border-b relative translate-x-[42vw] mix-blend-difference'
		>
			<div id='Row1' className='flex whitespace-nowrap'>
				<div className='Name text-white pr-[2.5vh] font-medium text-[2.75vh]'>
					HUYNGUYEN
				</div>
				<div className='GreenText text-green-500 pr-[2.5vh] font-medium text-[2.75vh]'>
					FRONT-END DEVELOPER
				</div>
				<div className='Name text-white pr-[2.5vh] font-medium text-[2.75vh]'>
					HUYNGUYEN
				</div>
				<div className='GreenText text-green-500 pr-[2.5vh] font-medium text-[2.75vh]'>
					FRONT-END DEVELOPER
				</div>
				<div className='Name text-white pr-[2.5vh] font-medium text-[2.75vh]'>
					HUYNGUYEN
				</div>
				<div className='GreenText text-green-500 pr-[2.5vh] font-medium text-[2.75vh]'>
					FRONT-END DEVELOPER
				</div>
				<div className='Name text-white pr-[2.5vh] font-medium text-[2.75vh]'>
					HUYNGUYEN
				</div>
				<div className='GreenText text-green-500 pr-[2.5vh] font-medium text-[2.75vh]'>
					FRONT-END DEVELOPER
				</div>
				<div className='Name text-white pr-[2.5vh] font-medium text-[2.75vh]'>
					HUYNGUYEN
				</div>
				<div className='GreenText text-green-500 pr-[2.5vh] font-medium text-[2.75vh]'>
					FRONT-END DEVELOPER
				</div>
				<div className='Name text-white pr-[2.5vh] font-medium text-[2.75vh]'>
					HUYNGUYEN
				</div>
				<div className='GreenText text-green-500 pr-[2.5vh] font-medium text-[2.75vh]'>
					FRONT-END DEVELOPER
				</div>
				<div className='Name text-white pr-[2.5vh] font-medium text-[2.75vh]'>
					HUYNGUYEN
				</div>
				<div className='GreenText text-green-500 pr-[2.5vh] font-medium text-[2.75vh]'>
					FRONT-END DEVELOPER
				</div>
			</div>
			<div id='Row2' className='flex whitespace-nowrap rotate-180 h-[2.5vh]'>
				<div className='Name text-white pr-[2.5vh] font-medium text-[2.75vh]'>
					HUYNGUYEN
				</div>
				<div className='GreenText text-green-500 pr-[2.5vh] font-medium text-[2.75vh]'>
					FRONT-END DEVELOPER
				</div>
				<div className='Name text-white pr-[2.5vh] font-medium text-[2.75vh]'>
					HUYNGUYEN
				</div>
				<div className='GreenText text-green-500 pr-[2.5vh] font-medium text-[2.75vh]'>
					FRONT-END DEVELOPER
				</div>
				<div className='Name text-white pr-[2.5vh] font-medium text-[2.75vh]'>
					HUYNGUYEN
				</div>
				<div className='GreenText text-green-500 pr-[2.5vh] font-medium text-[2.75vh]'>
					FRONT-END DEVELOPER
				</div>
				<div className='Name text-white pr-[2.5vh] font-medium text-[2.75vh]'>
					HUYNGUYEN
				</div>
				<div className='GreenText text-green-500 pr-[2.5vh] font-medium text-[2.75vh]'>
					FRONT-END DEVELOPER
				</div>
				<div className='Name text-white pr-[2.5vh] font-medium text-[2.75vh]'>
					HUYNGUYEN
				</div>
				<div className='GreenText text-green-500 pr-[2.5vh] font-medium text-[2.75vh]'>
					FRONT-END DEVELOPER
				</div>
				<div className='Name text-white pr-[2.5vh] font-medium text-[2.75vh]'>
					HUYNGUYEN
				</div>
				<div className='GreenText text-green-500 pr-[2.5vh] font-medium text-[2.75vh]'>
					FRONT-END DEVELOPER
				</div>
				<div className='Name text-white pr-[2.5vh] font-medium text-[2.75vh]'>
					HUYNGUYEN
				</div>
				<div className='GreenText text-green-500 pr-[2.5vh] font-medium text-[2.75vh]'>
					FRONT-END DEVELOPER
				</div>
			</div>
		</div>
	);
}

export default PageSplitter;
