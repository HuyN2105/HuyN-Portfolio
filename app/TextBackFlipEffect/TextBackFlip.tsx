import React from 'react';
import './TextBackFlip.css';

import gsap from 'gsap';

interface TextBackFlipProps {
	id: string;
	text: string;
	onClickHandler: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	customStyleOriginal?: string | '';
	customStyleClone?: string | '';
	ClassN?: string | '';
}

function TextBackFlip({
	id,
	text,
	onClickHandler,
	customStyleOriginal,
	customStyleClone,
	ClassN,
}: TextBackFlipProps) {
	const MouseEnterHandler = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		const id = e.currentTarget.getAttribute('id');
		const NotCloneTargets = document.querySelectorAll(`#${id} .Original`);
		const CloneTargets = document.querySelectorAll(`#${id} .Clone`);
		gsap.to(NotCloneTargets, {
			rotationX: 90,
			transformPerspective: 600,
			duration: 0.25,
			stagger: 0.05,
		});
		gsap.to(CloneTargets, {
			rotationX: 0,
			transformPerspective: 600,
			duration: 0.25,
			stagger: 0.05,
			delay: 0.075,
		});
	};
	const MouseLeaveHandler = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		const id = e.currentTarget.getAttribute('id');
		const NotCloneTargets = document.querySelectorAll(`#${id} .Original`);
		const CloneTargets = document.querySelectorAll(`#${id} .Clone`);

		gsap.to(NotCloneTargets, {
			rotationX: 0,
			transformPerspective: 600,
			duration: 0.25,
			stagger: 0.05,
			delay: 0.075,
		});
		gsap.to(CloneTargets, {
			rotationX: -90,
			transformPerspective: 600,
			duration: 0.25,
			stagger: 0.05,
		});
	};

	return (
		<>
			<div
				onMouseEnter={MouseEnterHandler}
				onMouseLeave={MouseLeaveHandler}
				style={{ transformStyle: 'preserve-3d' }}
				className={ClassN}
				id={id}
				onClick={onClickHandler}
			>
				{text.split('').map((char, index) => (
					<div key={index} className={`Original ${customStyleOriginal}`}>
						{char}
					</div>
				))}
				<div className='absolute flex NiceFont'>
					{text.split('').map((char, index) => (
						<div key={index} className={`Clone ${customStyleClone}`}>
							{char}
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default TextBackFlip;
