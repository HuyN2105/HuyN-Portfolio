'use client';

import React, { useState, useEffect } from 'react';
import HorizontalScroll from './HorizontalScroll/HorizontalScroll';
import LoadingScreen from './LoadingScreen/LoadingScreen';

function Home() {
	return (
		<>
			<LoadingScreen />
			<HorizontalScroll />
		</>
	);
}

export default Home;
