import React from 'react';
import NavButton from '../Buttons/NavButton.component';
import './navigation.styles.scss';

export default function Navigation({ changeView }) {
	return (
		<div className='Navigation'>
			<NavButton title='HOME' linkPath='/' />
			<NavButton title='PROJECTS' linkPath='Projects' />
			<NavButton title='ABOUT' linkPath='/About' />
			<NavButton title='CONTACT' linkPath='/' />
		</div>
	);
}
