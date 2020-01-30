import React from 'react';
import './ProjectCard.styles.scss';



export default function ProjectCard({ title, order, langs, bg }) {

	let displayed = langs.map(lang => {
		return <i className={`devicon-${lang}-plain`}></i>;
	});

	return (
		<div className={`ProjectCard ${order}`} >
			<h3>{title}</h3>
			<div className='ProjectCard--details' style={{ backgroundImage: `url(${bg})` }}>
				<div className="ProjectCard--details--icons">
					{displayed}
				</div>
				<div className="ProjectCard--details--overlay"></div>
			</div>
		</div>
	);
}
