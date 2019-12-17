import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home.component';
import Projects from './pages/projects.component';
import About from './pages/about.component';
import Contact from './pages/contact.component';
import Navigation from './components/Navigation/navigation.component';
import Header from './components/Header/Header.component';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentView: 'Home',
			navOpen: true
		};

		this.handleShowMobileNav = this.handleShowMobileNav.bind(this);
	}

	componentDidMount() {
		if (window.innerWidth < 1200) {
			this.setState({ navOpen: false });
		}
	}

	handleShowMobileNav() {
		this.setState({ navOpen: !this.state.navOpen });
	}

	render() {
		return (
			<div className='App'>
				<Header openNav={this.handleShowMobileNav} />
				<Navigation navState={this.state.navOpen} openNav={this.handleShowMobileNav} />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/projects' component={Projects} />
					<Route exact path='/about' component={About} />
					<Route exact path='/contact' component={Contact} />
				</Switch>
			</div>
		);
	}
}

export default App;
