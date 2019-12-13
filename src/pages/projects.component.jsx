import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard.component';
import './projects.styles.scss';

export class Projects extends Component {


	render() {
		return (
			<div className='Projects'>
				<div className='Projects--Cards'>
					<ProjectCard title='Subtrack' order='one' />
					<ProjectCard title='Avalon Resilient' order='two' />
					<ProjectCard title='OVBG PathFinder' order='three' />
				</div>
			</div>
		);
	}
}

export default Projects;
