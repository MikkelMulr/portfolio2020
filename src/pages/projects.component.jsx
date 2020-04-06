import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard.component';
import Tymed from '../assets/images/tymed.png';
import Avalon from '../assets/images/avalon.png';
import Ovbg from '../assets/images/ovbg.png';
import restApp from '../assets/images/restapp.PNG';
import neverDusty from '../assets/images/neverdusty.PNG';
import covidbg from '../assets/images/covidbg.PNG';
import lakebg from '../assets/images/lakebg.PNG';
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
							linkTo='https://www.avalonresilient.com'
						/>
						<ProjectCard
							title='OVBG PathFinder'
							order='four'
							langs={[ 'html5', 'css3', 'nodejs', 'javascript' ]}
							bg={Ovbg}
							linkTo='https://ovbg2019.github.io/ovbgapp/'
						/>
						<ProjectCard
							title='Restaurant App'
							order='three'
							langs={[ 'react', 'html5', 'css3', 'jquery', 'javascript' ]}
							bg={restApp}
							linkTo='https://mikkelmulr.github.io/restApp/'
						/>
					</div>
					<div className='Projects--Cards'>
						<ProjectCard
							title='COVID-19 Tracker'
							order='one'
							langs={[ 'react', 'html5', 'css3', 'sass', 'nodejs', 'javascript' ]}
							linkTo='https://mikkelmulr.github.io/corvir_map/'
							bg={covidbg}
						/>
						<ProjectCard
							title='SubTracks'
							order='two'
							langs={[ 'react', 'html5', 'css3', 'sass', 'nodejs', 'javascript' ]}
						/>
						<ProjectCard
							title='NeverDusty Games'
							order='three'
							langs={[ 'react', 'html5', 'css3', 'sass', 'nodejs', 'javascript' ]}
							bg={neverDusty}
							linkTo='https://github.com/MikkelMulr/ND_GameLib'
						/>
						<ProjectCard
							title='LakeRidge Health Clinical Trials'
							order='four'
							langs={[ 'vuejs', 'html5', 'css3', 'nodejs', 'javascript' ]}
							bg={lakebg}
							linkTo='https://lakeridgemyths.netlify.com/'
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
