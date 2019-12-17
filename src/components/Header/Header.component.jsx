import React from 'react';
import menu from '../../assets/images/menu.png';
import './Header.styles.scss';

export default function Header({ openNav }) {
	return (
		<div className='Header'>
			<div className='Logo'>
				<span className='Logo--top'>MIKE MUELLER</span>
				<span className='Logo--bottom'>DEVELOPER</span>
			</div>
			{window.innerWidth <= 480 ? <img src={menu} alt='menu icon' onClick={openNav} /> : null}
		</div>
	);
}
