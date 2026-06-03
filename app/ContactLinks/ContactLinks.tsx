import React from 'react';
import './ContactLinks.css';

function ContactLinks() {
	const onClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const links = {
			FB: 'https://facebook.com/HuyN.2105',
			IG: 'https://instagram.com/HuyN.2105',
			LI: 'https://www.linkedin.com/in/nguyen-huy-43aa5a323/',
		};
		const id = e.currentTarget.getAttribute('id');
		window.open(links[id]);
	};

	return (
		<div
			id='ContactLinks'
			className='absolute flex top-full -translate-y-[200%] text-white ml-[2vw] tracking-tight'
		>
			<div id="FB" onClick={(e) => onClickHandler(e)} className="flex cursor-pointer pr-[1.5vw]">FACEBOOK</div>
			<div id="IG" onClick={(e) => onClickHandler(e)} className="flex cursor-pointer pr-[1.5vw]">INSTAGRAM</div>
			<div id="LI" onClick={(e) => onClickHandler(e)} className="flex cursor-pointer pr-[1.5vw]">LINKEDIN</div>
		</div>
	);
}

export default ContactLinks;
