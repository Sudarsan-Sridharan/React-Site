import {blueGrey700, blueGrey900, amberA400} from 'material-ui/styles/colors';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from '../jsx/components/Header';
import 'bootstrap/dist/css/bootstrap.css';
var css = require("../scss/master.scss");

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: blueGrey700,
		primary2Color: blueGrey900,
		accent1Color: amberA400,
		pickerHeaderColor: blueGrey700
	}
});

var Master = React.createClass({
	render: function() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<Header history={this.props.history}/>
					<div id="main">
						{this.props.children}
					</div>
				</div>
      		</MuiThemeProvider>
		);
	}
});

module.exports = Master;
