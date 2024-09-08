import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface props {
	scrollTween: gsap.core.Tween | null;
}

function PageSplitter({ scrollTween }: props) {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#PageSplitter',
				start: 'left 100%',
				end: 'left 0',
				scrub: 1,
				containerAnimation: scrollTween,
				markers: false,
			},
		});
		tl.to('#Row1', {
			xPercent: -15,
		});
		tl.to('#Row2', {
			xPercent: 25,
		});
	}, []);

	return (
		<div
			id='PageSplitter'
			className='rotate-90 w-[120vw] border-t border-b absolute top-[100vh] z-[199] mix-blend-difference'
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
