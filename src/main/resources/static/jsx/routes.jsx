import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';
const Master = require('./master');
const Home = require('./templates/MUITemplate');
const About = require('./templates/AboutTemplate');
const Vanilla = require('./templates/VanillaTemplate');

const AppRoutes = (
	<Route path="/" component={Master}>
		<IndexRoute component={Home}/>
		<Redirect from="home" to="/" />
		<Route path="about" component={About}/>
		<Route path="vanilla" component={Vanilla}/>
	</Route>
);

module.exports = AppRoutes;
