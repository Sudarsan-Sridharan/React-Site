import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

var rootInstance = ReactDOM.render(
<p>hi</p>,
	document.getElementById('poc')
);
