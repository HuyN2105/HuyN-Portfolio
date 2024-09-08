'use client';

import CursorFollower from './CursorFollower/CursorFollower.jsx';
import HorizontalScroll from './HorizontalScroll/HorizontalScroll';
import MainPage from './Main/MainPage';
import NavBar from './NavBar/NavBar';
import PageSplitter from './PageSplitter/PageSplitter';
import { isMobile } from 'react-device-detect';

function Home() {
	return (
		<>
			<HorizontalScroll />
		</>
	);
}

export default Home;
