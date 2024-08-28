import React from 'react';
import './ContactLinks.css';
import gsap from 'gsap';

function ContactLinks() {
	const MouseEnterHandler = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		const id = e.currentTarget.getAttribute('id');
		const NotCloneTargets = document.querySelectorAll(`#${id} .NotClone`);
		const CloneTargets = document.querySelectorAll(`#${id} .Clone`);
		gsap.to(NotCloneTargets, {
			rotationX: 90,
			transformPerspective: 600,
			duration: 0.2,
			stagger: 0.1,
		});
		gsap.to(CloneTargets, {
			rotationX: 0,
			transformPerspective: 600,
			duration: 0.2,
			stagger: 0.1,
			delay: 0.075,
		});
	};
	const MouseLeaveHandler = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		const id = e.currentTarget.getAttribute('id');
		const NotCloneTargets = document.querySelectorAll(`#${id} .NotClone`);
		const CloneTargets = document.querySelectorAll(`#${id} .Clone`);
		gsap.to(NotCloneTargets, {
			rotationX: 0,
			transformPerspective: 600,
			duration: 0.2,
			stagger: 0.1,
			delay: 0.075,
		});
		gsap.to(CloneTargets, {
			rotationX: -90,
			transformPerspective: 600,
			duration: 0.2,
			stagger: 0.1,
		});
	};
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
			<div
				onMouseEnter={MouseEnterHandler}
				onMouseLeave={MouseLeaveHandler}
				style={{ transformStyle: 'preserve-3d' }}
				className='flex pr-[1.5vw] cursor-pointer'
				id='IG'
				onClick={onClickHandler}
			>
				<div className='NotClone'>I</div>
				<div className='NotClone'>N</div>
				<div className='NotClone'>S</div>
				<div className='NotClone'>T</div>
				<div className='NotClone'>A</div>
				<div className='NotClone'>G</div>
				<div className='NotClone'>R</div>
				<div className='NotClone'>A</div>
				<div className='NotClone'>M</div>
				<div className='absolute flex NiceFont'>
					<div className='Clone'>I</div>
					<div className='Clone'>N</div>
					<div className='Clone'>S</div>
					<div className='Clone'>T</div>
					<div className='Clone'>A</div>
					<div className='Clone'>G</div>
					<div className='Clone'>R</div>
					<div className='Clone'>A</div>
					<div className='Clone'>M</div>
				</div>
			</div>
			<div
				onMouseEnter={MouseEnterHandler}
				onMouseLeave={MouseLeaveHandler}
				style={{ transformStyle: 'preserve-3d' }}
				className='flex pr-[1.5vw] cursor-pointer'
				id='LI'
				onClick={onClickHandler}
			>
				<div className='NotClone'>L</div>
				<div className='NotClone'>I</div>
				<div className='NotClone'>N</div>
				<div className='NotClone'>K</div>
				<div className='NotClone'>E</div>
				<div className='NotClone'>D</div>
				<div className='NotClone'>I</div>
				<div className='NotClone'>N</div>
				<div className='absolute flex NiceFont'>
					<div className='Clone'>L</div>
					<div className='Clone'>I</div>
					<div className='Clone'>N</div>
					<div className='Clone'>K</div>
					<div className='Clone'>E</div>
					<div className='Clone'>D</div>
					<div className='Clone'>I</div>
					<div className='Clone'>N</div>
				</div>
			</div>
			<div
				onMouseEnter={MouseEnterHandler}
				onMouseLeave={MouseLeaveHandler}
				style={{ transformStyle: 'preserve-3d' }}
				className='flex cursor-pointer'
				id='FB'
				onClick={onClickHandler}
			>
				<div className='NotClone'>F</div>
				<div className='NotClone'>A</div>
				<div className='NotClone'>C</div>
				<div className='NotClone'>E</div>
				<div className='NotClone'>B</div>
				<div className='NotClone'>O</div>
				<div className='NotClone'>O</div>
				<div className='NotClone'>K</div>
				<div className='absolute flex NiceFont'>
					<div className='Clone'>F</div>
					<div className='Clone'>A</div>
					<div className='Clone'>C</div>
					<div className='Clone'>E</div>
					<div className='Clone'>B</div>
					<div className='Clone'>O</div>
					<div className='Clone'>O</div>
					<div className='Clone'>K</div>
				</div>
			</div>
		</div>
	);
}

export default ContactLinks;
