'use client';

import React from 'react';
import HorizontalScroll from './HorizontalScroll/HorizontalScroll';
import LoadingScreen from './LoadingScreen/LoadingScreen';
import { isMobile } from 'react-device-detect';
import ContactLinks from './ContactLinks/ContactLinks';

function Home() {
	return (
		<>
			{isMobile ? (
				<>
					<div className='bg-#0b0b0b text-white text-[2.5vh] font-bold text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
						THIS WEBSITE IS CURRENTLY <p className='text-red-500'>NOT</p>
						SUPPORT MOBILE DEVICES. ACCESS WITH COMPUTER OR COMEBACK IN THE NEAR
						FUTURE.
					</div>
					<ContactLinks />
				</>
			) : (
				<>
					<LoadingScreen />
					<HorizontalScroll />
				</>
			)}
		</>
	);
}

export default Home;
