import React from 'react';
import NavButton from '../Buttons/NavButton.component';
import './navigation.styles.scss';

export default function Navigation({ navState, openNav }) {
	if (navState) {
		return (
			<div className='Navigation' onClick={window.innerWidth < 1200 ? openNav : null}>
				<NavButton title='HOME' linkPath='/' />
				<NavButton title='PROJECTS' linkPath='Projects' />
				<NavButton title='ABOUT' linkPath='/About' />
				<NavButton title='CONTACT' linkPath='/Contact' />
			</div>
		);
	} else {
		return null;
	}
}
