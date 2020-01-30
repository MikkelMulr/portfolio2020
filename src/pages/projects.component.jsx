import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard.component';
import './projects.styles.scss';

export class Projects extends Component {
	render() {
		return (
			<div className='Projects'>
				<div className='Projects--Cards-container'>
					<div className='Projects--Cards'>
						<ProjectCard title='Tymed' order='one' />
						<ProjectCard title='Avalon Resilient' order='two' />
						<ProjectCard title='Restaurant App' order='three' />
						<ProjectCard title='OVBG PathFinder' order='four' />
					</div>
					<div className='Projects--Cards'>
						<ProjectCard title='OB Tracker' order='one' />
						<ProjectCard title='Project TBD' order='two' />
						<ProjectCard title='Project TBD' order='three' />
						<ProjectCard title='Project TBD' order='four' />
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
