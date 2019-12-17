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
					<img src={Email} alt='email' />
					<h2>EMAIL</h2>
				</div>
				<div className='Contact--item item2'>
					<img src={Github} alt='github' />
					<h2>GITHUB</h2>
				</div>
				<div className='Contact--item item3'>
					<img src={Linkedin} alt='linkedin' />
					<h2>LINKEDIN</h2>
				</div>
			</div>
		</div>
	);
}
