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
					<a href="mailto:muellerm.dev@gmail.com?subject=portfolio contact"><img src={Email} alt='email' /></a>
					<h2>EMAIL</h2>
				</div>
				<div className='Contact--item item2'>
					<a href="https://github.com/MikkelMulr"><img src={Github} alt='github' /></a>
					<h2>GITHUB</h2>
				</div>
				<div className='Contact--item item3'>
					<a href="https://www.linkedin.com/in/michael-mueller-10a092161/"><img src={Linkedin} alt='linkedin' /></a>
					<h2>LINKEDIN</h2>
				</div>
			</div>
		</div>
	);
}
