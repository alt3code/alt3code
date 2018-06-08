import React from 'react';
import './Main.css';
import { Switch, Route } from 'react-router-dom'
import LandingHome from 'LandingHome/LandingHome';
import Projects from 'Projects/Projects';
import Guides from 'Guides/Guides';

const Main = () => {
	return (
		<div className="main">
		  <Switch>
		    <Route exact path='/' component={LandingHome}/>
		    <Route path='/projects' component={Projects}/>
		    <Route path='/guides' component={Guides}/>
		  </Switch>
        </div>
	);
}

export default Main;