import React from 'react';

function About() {
	return (
		<div
			id='AboutContainer'
			className='panel w-screen min-h-screen text-white relative mix-blend-difference z-[1000] text-center align-middle'
		>
			<h1 className='absolute top-[50vh] left-[47.5vw] -translate-x-1/2 -translate-y-1/2 text-[7vh] flex'>
				<p className='font-Hypik'>HuyN</p>
				<p className='font-NewAmsterdam translate-x-1/2 italic'>'s</p>
			</h1>
			<h1 className='absolute top-[57vh] left-[52.5vw] -translate-x-1/2 -translate-y-1/2 text-[7vh] font-NewAmsterdam'>
				Adventure
			</h1>
		</div>
	);
}

export default About;
