import React from 'react';
import { Link } from 'react-router-dom';
import './NavButton.styles.scss';

export default function NavButton({ title, linkPath }) {
	return (
		<div className='NavButton from-left'>
			<Link to={linkPath}>
				<span>{title}</span>
			</Link>
		</div>
	);
}
