import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard.component';
import Tymed from '../assets/images/tymed.png';
import Avalon from '../assets/images/avalon.png';
import './projects.styles.scss';

export class Projects extends Component {
	render() {
		return (
			<div className='Projects'>
				<div className='Projects--Cards-container'>
					<div className='Projects--Cards Cards-top'>
						<ProjectCard
							title='Tymed'
							order='one'
							langs={[ 'react', 'html5', 'css3', 'sass', 'nodejs', 'javascript' ]}
							bg={Tymed}
						/>
						<ProjectCard
							title='Avalon Resilient'
							order='two'
							langs={[ 'react', 'html5', 'css3', 'sass', 'nodejs', 'javascript' ]}
							bg={Avalon}
						/>
						<ProjectCard
							title='Restaurant App'
							order='three'
							langs={[ 'react', 'html5', 'css3', 'sass', 'nodejs', 'javascript' ]}
						/>
						<ProjectCard
							title='OVBG PathFinder'
							order='four'
							langs={[ 'react', 'html5', 'css3', 'sass', 'nodejs', 'javascript' ]}
						/>
					</div>
					<div className='Projects--Cards'>
						<ProjectCard
							title='OB Tracker'
							order='one'
							langs={[ 'react', 'html5', 'css3', 'sass', 'nodejs', 'javascript' ]}
						/>
						<ProjectCard
							title='LakeRidge CT Myths'
							order='two'
							langs={[ 'vuejs', 'html5', 'css3', 'sass', 'nodejs', 'javascript' ]}
						/>
						<ProjectCard
							title='Project TBD'
							order='three'
							langs={[ 'react', 'html5', 'css3', 'sass', 'nodejs', 'javascript' ]}
						/>
						<ProjectCard
							title='Project TBD'
							order='four'
							langs={[ 'react', 'html5', 'css3', 'sass', 'nodejs', 'javascript' ]}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
