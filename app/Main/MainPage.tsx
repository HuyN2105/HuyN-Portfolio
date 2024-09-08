import './Main.css';
import ContactLinks from '../ContactLinks/ContactLinks';
import { isMobile } from 'react-device-detect';

function MainPage() {
	return (
		<div id='Welcome' className='panel'>
			<div id='Header'>
				<div className='SideText' id='SideText1'>
					<hr />
					<p>SINCE 2006</p>
					<hr />
				</div>
				<div className='MiddleText'>
					<h1>Huy Nguyen</h1>
					<h1>Huy Nguyen</h1>
					<h1>Huy Nguyen</h1>
				</div>
				<div className='SideText' id='SideText2'>
					<hr />
					<p>SINCE 2006</p>
					<hr />
				</div>
			</div>
			{isMobile ? <></> : <ContactLinks />}
		</div>
	);
}

export default MainPage;
