import React from 'react';
// import Navigation from '../components/Navigation/navigation.component';
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
				{/* <Navigation /> */}
				<HomeContent />
			</div>
		);
	}
}

export default Home;
