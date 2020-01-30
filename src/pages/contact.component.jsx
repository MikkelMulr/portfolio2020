import React from 'react';
import Github from '../assets/images/github.png';
import Email from '../assets/images/email.png';
import Linkedin from '../assets/images/linkdin.png';
import './contact.styles.scss';

export default function Contact() {
	return (
		<div className='Contact'>
			<div className='Contact--items'>
				<div className='Contact--item item1'>
					<div className="Contact--item-inner">
						<a href='mailto:muellerm.dev@gmail.com?subject=portfolio contact'>
							<img src={Email} alt='email' />
						</a>
					</div>
					{window.innerWidth < 800 ? <h2>EMAIL</h2> : null}

				</div>
				<div className='Contact--item item2'>
					<div className="Contact--item-inner">
						<a href='https://github.com/MikkelMulr' target='_blank' rel='noopener noreferrer'>
							<img src={Github} alt='github' />
						</a>
					</div>
					{window.innerWidth < 800 ? <h2>GITHUB</h2> : null}
				</div>
				<div className='Contact--item item3'>
					<div className="Contact--item-inner">
						<a href='https://www.linkedin.com/in/michael-mueller-10a092161/' target='_blank' rel='noopener noreferrer'>
							<img src={Linkedin} alt='linkedin' />
						</a>
					</div>
					{window.innerWidth < 800 ? <h2>LINKEDIN</h2> : null}
				</div>
			</div>
		</div>
	);
}
