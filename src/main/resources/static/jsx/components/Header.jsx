import React from 'react';
import Router from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
const Home = require('../templates/MUITemplate');
const About = require('../templates/AboutTemplate');
const Vanilla = require('../templates/VanillaTemplate');

var tabStyles= {
	textTransform: 'none',
	height: '58px'
}

var Header = React.createClass({
	componentWillMount() {
		this.setState({
      		tabIndex: this._getSelectedIndex()});
    	let setTabsState = function() {
      		this.setState({renderTabs: !(document.body.clientWidth <= 647)});
    	}.bind(this);
    	setTabsState();
    	window.onresize = setTabsState;
    },
	_getSelectedIndex() {
    	return this.props.history.isActive('/home') ? '1' :
      		this.props.history.isActive('/about') ? '3' :
      		this.props.history.isActive('/vanilla') ? '2' : '1';
  	},

  	_handleTabChange(value, e, tab) {
    	this.props.history.push(tab.props.route);
    	this.setState({tabIndex: this._getSelectedIndex()});
  	},
	render: function() {
		return (
			<div className="container-fluid">
				<div className="row">
					<h1 className="col-sm-4">
						React
					</h1>
					<div className="col-sm-2">
					</div>
					<div className="col-sm-6">
						<Tabs
						value={this.state.tabIndex}
                  		onChange={this._handleTabChange}>
							<Tab
							value="1"
							style={tabStyles}
							route="/home"
							label="Material-UI" />
							<Tab
							value="2"
							style={tabStyles}
							route="/vanilla"
							label="Vanilla" />
							<Tab
							value="3"
							style={tabStyles}
							route="/about"
							label="About" />
						</Tabs>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Header;
