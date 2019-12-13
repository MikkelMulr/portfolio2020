import React from 'react';
import { Link } from 'react-router-dom';
import './NavButton.styles.scss';

export default function NavButton({ title, linkPath }) {
	return (
		<Link to={linkPath}>
			<div className='NavButton from-left'>
				<span>{title}</span>
			</div>
		</Link>
	);
}
