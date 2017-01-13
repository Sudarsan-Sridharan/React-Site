import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
const AppRoutes = require('./routes')

injectTapEventPlugin();

var rootInstance = ReactDOM.render(
	<Router
	history={hashHistory}
    onUpdate={() => window.scrollTo(0, 0)}
  	>
    	{AppRoutes}
  	</Router>,
	document.getElementById('app')
);