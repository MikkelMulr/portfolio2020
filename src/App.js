import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home.component';
import Projects from './pages/projects.component';
import About from './pages/about.component';
import Navigation from './components/Navigation/navigation.component';
import Header from './components/Header/Header.component';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentView: 'Home'
		};
	}

	render() {
		return (
			<div className='App'>
				<Header />
				<Navigation />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/projects' component={Projects} />
					<Route exact path='/about' component={About} />
				</Switch>
			</div>
		);
	}
}

export default App;
