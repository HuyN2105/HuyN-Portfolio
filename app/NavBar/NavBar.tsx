import React from 'react';

import Image from 'next/image';
import './NavBar.css';

function NavBar() {
	return (
		<div id='NavBar' className='border-b border-white w-full flex'>
			<Image
				className='m-3 ml-6 rounded-full border'
				src='/Logo-removebg.png'
				width={40}
				height={40}
				alt='Logo'
				id='NavLogoImg'
			/>
			<div className='fixed m-4 ml-[80px] text-white text-2xl tracking-widest'>
				HuyN
			</div>
			<div
				id='AvailableState'
				className='m-3 overflow-hidden fixed left-1/2 -translate-x-[60%] tracking-widest font-thin text-xl rounded-3xl h-10 w-[17.5rem] cursor-pointer border flex text-nowrap border-white hover:border-red-600 items-center mix-blend-difference'
				onClick={() =>
					window.open('https://www.linkedin.com/in/nguyen-huy-43aa5a323/')
				}
			>
				<div id='AvailableState1' className='absolute -translate-x-full z-1000'>
					CURRENTLY NOT AVAILABLE 🔴
				</div>
				<div id='AvailableState2' className='absolute -translate-x-full'>
					CURRENTLY NOT AVAILABLE 🔴
				</div>
			</div>
		</div>
	);
}

export default NavBar;
