import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PageSplitterProps {
	SplitterID: number;
}

function PageSplitter({ SplitterID }: PageSplitterProps) {
	const PageSplitterBannerAmount = 7;

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: '#PageSplitter',
					start: 'top top', // Start the animation when the top of the trigger hits the bottom of the viewport
					end: '+=100vw', // End the animation when the bottom of the trigger hits the top of the viewport
					scrub: 1,
					pin: true,
					markers: false,
				},
			});

			tl.to('#Row1', {
				duration: 1,
				x: '75%',
			}).to(
				'#Row2',
				{
					duration: 1,
					x: '-75%',
				},
				0
			);
		});
		return () => ctx.revert();
	}, []);

	return (
		<div
			id='PageSplitter'
			className='rotate-90 w-[120vw] border-t border-b relative translate-x-[42vw] mix-blend-difference'
		>
			{SplitterID === 1 ? (
				<div>
					<div id='Row1' className='flex whitespace-nowrap'>
						{Array.from({ length: PageSplitterBannerAmount }).map((_) => (
							<>
								<div className='Name text-white pr-[2.5vh] font-medium text-[2.75vh]'>
									HUYNGUYEN
								</div>
								<div className='GreenText text-green-500 pr-[2.5vh] font-medium text-[2.75vh]'>
									FRONT-END DEVELOPER
								</div>
							</>
						))}
					</div>
					<div
						id='Row2'
						className='flex whitespace-nowrap rotate-180 h-[2.5vh]'
					>
						{Array.from({ length: PageSplitterBannerAmount }).map((_) => (
							<>
								<div className='Name text-white pr-[2.5vh] font-medium text-[2.75vh]'>
									HUYNGUYEN
								</div>
								<div className='GreenText text-green-500 pr-[2.5vh] font-medium text-[2.75vh]'>
									FRONT-END DEVELOPER
								</div>
							</>
						))}
					</div>
				</div>
			) : (
				<></>
			)}
		</div>
	);
}

export default PageSplitter;
