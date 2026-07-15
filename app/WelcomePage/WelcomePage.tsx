'use client';

import './Main.css';
import ContactLinks from '../ContactLinks/ContactLinks';
import { isMobile } from 'react-device-detect';
import PageSplitter from '../PageSplitter/PageSplitter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { EffectComposer, EffectPass, RenderPass } from 'postprocessing';
import TouchTexture from '../Three/TouchTexture';
import { WaterEffect } from '../Three/WaterEffect';

function drawCoverImage(
	ctx: CanvasRenderingContext2D,
	image: CanvasImageSource,
	width: number,
	height: number
) {
	const imageWidth = (image as HTMLImageElement).naturalWidth || (image as any).width;
	const imageHeight = (image as HTMLImageElement).naturalHeight || (image as any).height;
	const scale = Math.max(width / imageWidth, height / imageHeight);
	const drawWidth = imageWidth * scale;
	const drawHeight = imageHeight * scale;
	const x = (width - drawWidth) / 2;
	const y = (height - drawHeight) / 2;
	ctx.drawImage(image, x, y, drawWidth, drawHeight);
}

function createWelcomeTexture(background: THREE.Texture) {
	const canvas = document.createElement('canvas');
	canvas.width = 2048;
	canvas.height = 1280;

	const ctx = canvas.getContext('2d');
	if (!ctx) {
		throw new Error('Canvas 2D context is not available.');
	}

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawCoverImage(ctx, background.image as CanvasImageSource, canvas.width, canvas.height);

	ctx.save();
	ctx.fillStyle = 'rgba(255, 255, 255, 1)';
	ctx.strokeStyle = 'rgba(255, 255, 255, 1)';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.font = '140px CloisterBlack, serif';
	ctx.lineWidth = 5;

	const midX = canvas.width / 2;
	const midY = canvas.height / 2;
	const titleY = [midY - 180, midY, midY + 180];
	const title = 'HUY NGUYEN';
	titleY.forEach((y, index) => {
		if (index % 2 === 0) {
			ctx.strokeText(title, midX, y);
		}
		ctx.fillText(title, midX, y);
	});

	ctx.restore();

	ctx.save();
	ctx.translate(midX - 470, midY);
	ctx.rotate(-Math.PI / 2);
	ctx.font = '70px "New Amsterdam", sans-serif';
	ctx.fillText('SINCE 2006', 0, -320);
	ctx.fillText('SINCE 2006', 0, 320);
	ctx.restore();

	ctx.save();
	ctx.fillStyle = 'rgba(255,255,255,1)';
	ctx.fillRect(midX - 520, midY - 230, 4, 460);
	ctx.fillRect(midX + 520, midY - 230, 4, 460);
	ctx.restore();

	const texture = new THREE.CanvasTexture(canvas);
	texture.colorSpace = THREE.SRGBColorSpace;
	texture.minFilter = THREE.LinearFilter;
	texture.magFilter = THREE.LinearFilter;
	texture.needsUpdate = true;
	return texture;
}

function ScenePlane({ touch }: { touch: TouchTexture }) {
	const { viewport, gl, scene, camera, size } = useThree();
	const background = useLoader(THREE.TextureLoader, '/assets/Images/MainBg.png');
	const [welcomeTexture, setWelcomeTexture] = useState<THREE.CanvasTexture | null>(null);

	useEffect(() => {
		background.colorSpace = THREE.SRGBColorSpace;
		background.minFilter = THREE.LinearFilter;
		background.magFilter = THREE.LinearFilter;
		background.needsUpdate = true;
	}, [background]);

	useEffect(() => {
		if (!background.image) {
			return;
		}

		const texture = createWelcomeTexture(background);
		setWelcomeTexture(texture);

		return () => {
			texture.dispose();
		};
	}, [background]);

	const composer = useMemo(() => {
		const effect = new WaterEffect({ texture: touch.getTexture() });
		const next = new EffectComposer(gl);
		const renderPass = new RenderPass(scene, camera);
		const waterPass = new EffectPass(camera, effect);
		renderPass.renderToScreen = false;
		waterPass.renderToScreen = true;
		next.addPass(renderPass);
		next.addPass(waterPass);
		next.setSize(size.width, size.height);
		return next;
	}, [gl, scene, camera, size.width, size.height, touch]);

	useEffect(() => {
		composer.setSize(size.width, size.height);
		return () => {
			composer.dispose();
		};
	}, [composer, size.width, size.height]);

	useFrame((_, delta) => {
		touch.update(delta);
		composer.render(delta);
	}, 1);

	const map = welcomeTexture ?? background;

	return (
		<mesh position={[0, 0, -1]} scale={[viewport.width, viewport.height, 1]}>
			<planeGeometry args={[1, 1]} />
			<meshBasicMaterial map={map} toneMapped={false} />
		</mesh>
	);
}

function WelcomePage() {
	const touch = useMemo(() => new TouchTexture(), []);

	const handlePointerMove = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
		const rect = event.currentTarget.getBoundingClientRect();
		touch.addTouch({
			x: (event.clientX - rect.left) / rect.width,
			y: 1 - (event.clientY - rect.top) / rect.height
		});
	}, [touch]);

	const handlePointerLeave = useCallback(() => {
		touch.reset();
	}, [touch]);

	return (
		<div
			id='Welcome'
			className='panel fixed z-1000'
			onPointerMove={handlePointerMove}
			onPointerLeave={handlePointerLeave}
		>
			<div className='absolute inset-0 z-0 w-full h-full'>
				<Canvas
					orthographic
					camera={{ position: [0, 0, 1] }}
					className='w-full h-full'
					style={{ pointerEvents: 'none' }}
					onCreated={({ gl }) => {
						gl.outputColorSpace = THREE.SRGBColorSpace;
						gl.toneMapping = THREE.NoToneMapping;
					}}
				>
					<ScenePlane touch={touch} />
				</Canvas>
			</div>

			{isMobile ? (
				<></>
			) : (
				<>
					<ContactLinks />
					<PageSplitter SplitterID={1} />
					<div className='absolute right-[6vw] bottom-[1.25vh] m-4 text-white cursor-default z-10'>
						SCROLL TO BEGIN YOUR JOURNEY
						<FontAwesomeIcon
							icon={faArrowRightFromBracket}
							className='ml-4 translate-y-1'
							style={{ color: '#ffffff', fontSize: '1.5rem' }}
						/>
					</div>
				</>
			)}
		</div>
	);
}

export default WelcomePage;
