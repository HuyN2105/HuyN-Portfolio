import React from 'react';

interface LoadingScreenProps {
	LoadingState: boolean;
}

function LoadingScreen({ LoadingState }: LoadingScreenProps) {
	// Handler for the proxy
	const variableHandler = {
		set(target, property, value) {
			console.log(
				`Variable "${property}" changed from ${target[property]} to ${value}`
			);
			target[property] = value;
			return true;
		},
	};

	// Proxy for the loading variable to monitor changes
	const monitoredVariable = new Proxy({ value: LoadingState }, variableHandler);

	return (
		<div className='center fixed top-[50vh] left-[50vw] -translate-x-1/2 -translate-y-1/2 text-white cursor-default z-9999 bg-[#0b0b0b]'>
			LoadingScreen
		</div>
	);
}

export default LoadingScreen;
