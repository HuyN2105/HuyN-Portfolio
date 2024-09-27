import React from 'react';
import './ContactLinks.css';
import TextBackFlip from '../TextBackFlipEffect/TextBackFlip';

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
			<TextBackFlip
				id='FB'
				text='FACEBOOK'
				onClickHandler={onClickHandler}
				ClassN='flex cursor-pointer pr-[1.5vw]'
			/>
			<TextBackFlip
				id='IG'
				text='INSTAGRAM'
				onClickHandler={onClickHandler}
				ClassN='flex cursor-pointer pr-[1.5vw]'
			/>
			<TextBackFlip
				id='LI'
				text='LINKEDIN'
				onClickHandler={onClickHandler}
				ClassN='flex cursor-pointer pr-[1.5vw]'
			/>
		</div>
	);
}

export default ContactLinks;
