import './NavBar.css';
import { isMobile } from 'react-device-detect';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import TextBackFlip from '../TextBackFlipEffect/TextBackFlip';
import React from 'react';

gsap.registerPlugin(ScrollToPlugin);

function NavBar() {
	return (
		<div
			id='NavBar'
			className='border-b border-white w-full flex'
			style={{ backgroundColor: '#0b0b0b' }}
		>
			<Image
				className='m-3 ml-6 rounded-full border'
				src='/Logo-removebg.png'
				width={40}
				height={40}
				alt='Logo'
				id='NavLogoImg'
			/>
			<div className='fixed m-4 ml-[80px] text-white text-2xl tracking-widest cursor-default'>
				HuyN
			</div>
			{isMobile ? (
				<React.Fragment></React.Fragment>
			) : (
				<div
					id='AvailableState'
					className='m-3 overflow-hidden relative left-[50vw] -translate-x-[90%] tracking-widest font-thin text-xl rounded-3xl h-10 w-[17.5rem] cursor-pointer border flex text-nowrap border-white hover:border-green-600 items-center mix-blend-difference'
					onClick={() =>
						window.open('https://www.linkedin.com/in/nguyen-huy-43aa5a323/')
					}
				>
					<div
						id='AvailableState1'
						className='absolute -translate-x-full z-1000 whitespace-nowrap'
					>
						AVAILABLE FOR PART TIME POSITION OR INTERNSHIP 🟢
					</div>
					<div
						id='AvailableState2'
						className='absolute -translate-x-full whitespace-nowrap'
					>
						AVAILABLE FOR PART TIME POSITION OR INTERNSHIP 🟢
					</div>
				</div>
			)}
			<div
				id='ScrollToContainer'
				className='flex gap-[1vw] text-lg tracking-widest cursor-pointer absolute left-[91vw] m-5 -translate-x-1/2'
			>
				<div id='ScrollToProjects'>
					<TextBackFlip
						id='ProjectsPageLink'
						text='PROJECTS'
						onClickHandler={() => {
							console.log('SCROLL');
							gsap.to(window, {
								duration: 2,
								scrollTo: { x: '#ProjectsContainer' },
							});
						}}
						ClassN='flex cursor-pointer'
						customStyleClone='text-[1.1vh] font-bold'
					/>
				</div>
				<div id='ScrollToAbout'>
					<TextBackFlip
						id='AboutPageLink'
						text='ABOUT'
						onClickHandler={() => {
							console.log('SCROLL');
							gsap.to(window, {
								duration: 2,
								scrollTo: { x: '#AboutContainer' },
							});
						}}
						ClassN='flex cursor-pointer'
						customStyleClone='text-[1.1vh] font-bold'
					/>
				</div>
				<div id='ScrollToContact'>
					<TextBackFlip
						id='ContactPageLink'
						text='CONTACT'
						onClickHandler={() => {
							console.log('SCROLL');
							gsap.to(window, {
								duration: 2,
								scrollTo: { x: '#ContactContainer' },
							});
						}}
						ClassN='flex cursor-pointer'
						customStyleClone='text-[1.1vh] font-bold'
					/>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
