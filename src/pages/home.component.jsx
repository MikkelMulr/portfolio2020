import React from 'react';
import HomeContent from '../components/HomeContent/HomeContent.component';

import './home.styles.scss';

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return (
			<div className='Home'>
				<HomeContent />
			</div>
		);
	}
}

export default Home;
