import React from 'react';
import './ProjectCard.styles.scss';

export default function ProjectCard({ title, order }) {
	return (
		<div className={`ProjectCard ${order}`}>
			<h3>{title}</h3>
			<div className='ProjectCard--details' />
		</div>
	);
}
