import React from 'react';
import './ContactLinks.css';

function ContactLinks() {
	return (
		<div
			id='ContactLinks'
			className='absolute top-full -translate-y-[200%] text-white ml-[2vw] tracking-tight'
		>
			<a href='http://instagram.com/HuyN.2105' className='pr-[1.5vw]'>
				INSTAGRAM
			</a>
			<a
				href='https://www.linkedin.com/in/nguyen-huy-43aa5a323/'
				className='pr-[1.5vw]'
			>
				LINKEDIN
			</a>
			<a href='http://facebook.com/HuyN.2105'>FACEBOOK</a>
		</div>
	);
}

export default ContactLinks;
