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
			gsap.to(`#Row2-${SplitterID}`, {
				xPercent: 25,
				ease: 'none',
				scrollTrigger: {
					trigger: `#PageSplitter-${SplitterID}`,
					scrub: 1,
					pinSpacing: true,
					start: 'top top',
					end: '+=600%',
				},
			});
			gsap.to(`#Row1-${SplitterID}`, {
				xPercent: -25,
				ease: 'none',
				scrollTrigger: {
					trigger: `#PageSplitter-${SplitterID}`,
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
			id={`PageSplitter-${SplitterID}`}
			className='rotate-90 w-[120vw] border-t border-b relative translate-x-[42vw] mix-blend-difference'
		>
			{SplitterID === 1 ? (
				<div>
					<div id={`Row1-${SplitterID}`} className='flex whitespace-nowrap'>
						{Array.from({ length: PageSplitterBannerAmount }).map(
							(_, index) => (
								<React.Fragment key={`row1-${SplitterID}-${index}`}>
									<div className='Name text-white pr-[2.5vh] font-medium text-[3vh]'>
										HUYNGUYEN
									</div>
									<div className='GreenText text-green-500 pr-[2.5vh] font-medium text-[3vh]'>
										FULL-STACK DEVELOPER
									</div>
								</React.Fragment>
							)
						)}
					</div>
					<div
						id={`Row2-${SplitterID}`}
						className='flex whitespace-nowrap rotate-180 h-[2.5vh]'
					>
						{Array.from({ length: PageSplitterBannerAmount }).map(
							(_, index) => (
								<React.Fragment key={`row2-${SplitterID}-${index}`}>
									<div className='Name text-white pr-[2.5vh] font-medium text-[3vh]'>
										HUYNGUYEN
									</div>
									<div className='GreenText text-green-500 pr-[2.5vh] font-medium text-[3vh]'>
										FULL-STACK DEVELOPER
									</div>
								</React.Fragment>
							)
						)}
					</div>
				</div>
			) : (
				<div
					id={`Row2-${SplitterID}`}
					className='flex whitespace-nowrap rotate-180 h-[2.5vh]'
				>
					{Array.from({ length: PageSplitterBannerAmount }).map((_, index) => (
						<React.Fragment key={`row2-${SplitterID}-${index}`}>
							<div className='Name text-white pr-[2.5vh] font-medium text-[3vh]'>
								HUYNGUYEN
							</div>
							<div className='GreenText text-green-500 pr-[2.5vh] font-medium text-[3vh]'>
								FULL-STACK DEVELOPER
							</div>
						</React.Fragment>
					))}
				</div>
			)}
		</div>
	);
}

export default PageSplitter;
