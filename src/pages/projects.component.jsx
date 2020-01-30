import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard.component';
import './projects.styles.scss';

export class Projects extends Component {
	render() {
		return (
			<div className='Projects'>
				<div className='Projects--Cards-container'>
					<div className='Projects--Cards'>
						<ProjectCard title='Project' order='one' />
						<ProjectCard title='Project' order='two' />
						<ProjectCard title='Project' order='three' />
						<ProjectCard title='Project' order='four' />
					</div>
					<div className='Projects--Cards'>
						<ProjectCard title='Project' order='one' />
						<ProjectCard title='Project' order='two' />
						<ProjectCard title='Project' order='three' />
						<ProjectCard title='Project' order='four' />
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
