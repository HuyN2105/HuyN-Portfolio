'use client';

import CursorFollower from './CursorFollower/CursorFollower.jsx';
import MainPage from './Main/MainPage';
import NavBar from './NavBar/NavBar';
import { isMobile } from 'react-device-detect';

function Home() {
	return (
		<>
			{isMobile ? <></> : <CursorFollower />}
			<NavBar />
			<MainPage />
		</>
	);
}

export default Home;
