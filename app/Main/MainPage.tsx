import './Main.css';
import ContactLinks from '../ContactLinks/ContactLinks';
import { isMobile } from 'react-device-detect';
import PageSplitter from '../PageSplitter/PageSplitter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function MainPage() {
	return (
		<div id='Welcome' className='panel w-[104vw]'>
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
			{isMobile ? (
				<></>
			) : (
				<>
					<ContactLinks />
					<PageSplitter SplitterID={1} />
					<div className='absolute right-[6vw] bottom-[1.25vh] m-4 text-white cursor-default'>
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

export default MainPage;
