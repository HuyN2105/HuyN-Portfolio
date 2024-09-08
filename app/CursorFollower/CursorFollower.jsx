'use client';

import './CursorFollower.css';
import { useEffect } from 'react';

function CursorFollower() {
	useEffect(() => {
		const coords = { x: -50, y: -50 };
		const circles = document.querySelectorAll('.circle');

		circles.forEach(function (circle, index) {
			circle.x = 0;
			circle.y = 0;
		});

		window.addEventListener('mousemove', function (e) {
			coords.x = e.clientX;
			coords.y = e.clientY;
		});

		function animateCircles() {
			let x = coords.x;
			let y = coords.y;

			circles.forEach(function (circle, index) {
				circle.style.left = x - 12 + 'px';
				circle.style.top = y - 12 + 'px';

				circle.style.scale = (circles.length - index) / circles.length;

				circle.x = x;
				circle.y = y;

				const nextCircle = circles[index + 1] || circles[0];
				x += (nextCircle.x - x) * 0.35;
				y += (nextCircle.y - y) * 0.35;
			});

			requestAnimationFrame(animateCircles);
		}

		animateCircles();
	}, []);

	return (
		<>
			<div>
				<div id='Follower' className='circle'></div>
				<div id='Follower' className='circle'></div>
				<div id='Follower' className='circle'></div>
				<div id='Follower' className='circle'></div>
				<div id='Follower' className='circle'></div>
				<div id='Follower' className='circle'></div>
				<div id='Follower' className='circle'></div>
				<div id='Follower' className='circle'></div>
				<div id='Follower' className='circle'></div>
				<div id='Follower' className='circle'></div>
				<div id='Follower' className='circle'></div>
			</div>
		</>
	);
}

export default CursorFollower;
