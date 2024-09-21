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
			gsap.to('#Row2', {
				xPercent: 25,
				ease: 'none',
				scrollTrigger: {
					trigger: '#PageSplitter',
					scrub: 1,
					pinSpacing: true,
					start: 'top top',
					end: '+=600%',
				},
			});
			gsap.to('#Row1', {
				xPercent: -25,
				ease: 'none',
				scrollTrigger: {
					trigger: '#PageSplitter',
					scrub: 1,
					pinSpacing: true,
					start: 'top top',
					end: '+=600%',
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
			{SplitterID === 1 ? (
				<div>
					<div id='Row1' className='flex whitespace-nowrap'>
						{Array.from({ length: PageSplitterBannerAmount }).map((_) => (
							<>
								<div className='Name text-white pr-[2.5vh] font-medium text-[3vh]'>
									HUYNGUYEN
								</div>
								<div className='GreenText text-green-500 pr-[2.5vh] font-medium text-[3vh]'>
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
								<div className='Name text-white pr-[2.5vh] font-medium text-[3vh]'>
									HUYNGUYEN
								</div>
								<div className='GreenText text-green-500 pr-[2.5vh] font-medium text-[3vh]'>
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
