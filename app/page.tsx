'use client';

import CursorFollower from './CursorFollower/CursorFollower.jsx';
import MainPage from './Main/MainPage';
import NavBar from './NavBar/NavBar';

function Home() {
	return (
		<>
			<CursorFollower />
			<NavBar />
			<MainPage />
		</>
	);
}

export default Home;
