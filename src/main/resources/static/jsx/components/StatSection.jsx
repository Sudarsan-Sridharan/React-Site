import React from 'react';
import request from 'superagent';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import StatTable from './StatTable';


const styles = {
	collapsed: {width: 200},
	expanded: {width: 175}
};

var StatSection = React.createClass({

	getInitialState: function(){
		this.year = 2016;
		return {
			seasonSet: [],
			statSet: [],
			value: 1,
		}
	},

	componentWillMount: function() {
		this._getMenuList();
		this._getTableList();
	},

	_getMenuList: function() {
		var self = this;
		var seasonSource = '/soccer/bpl/seasons';
		request.get(seasonSource)
		.withCredentials()
		.set('Accept','application/json')
		.end(function (error,res) {
			if (res) {
				var json = JSON.parse(res.text);
				var seasonsResponse = json.seasons;
				if (seasonsResponse) {
					self._parseSeasonList(seasonsResponse);
				}
			}
		});
	},

	_parseSeasonList: function(object) {
		var results = [];
		for (var i=0; i<object.length; i++){
			results.push({
				year: object[i]
			})
		};

		this.setState({
			seasonSet:results
		});
	},

	_renderDropDown: function() {
		var items = [];
		for (var i=1; i <= this.state.seasonSet.length; i++){
			items.push(<MenuItem value={i} key={i} primaryText={this.state.seasonSet[i-1].year}/>);
		}
		return (items);
	},

	_handleDropdownChange: function(event,index,value) {
		this.setState({value});
		this.year = this.state.seasonSet[value-1].year;
		this._getTableList();

	},

	_getTableList: function() {
    var self = this;
		var statSource = '/soccer/bpl/table';
		request.get(statSource)
		.withCredentials()
		.set('Accept','application/json')
    .query({season : this.year})
		.end(function (error,res) {
			if (res) {
				var json = JSON.parse(res.text);
				var statResponse = json.table;
				if (statResponse) {
					self._parseStatList(statResponse);
				}
			}
		});
  },

	_parseStatList: function(object){
		var results = [];
		for (var i = 0; i < object.length; i++){
			results.push({
				team: object[i]
			});
		}

		this.setState({
			statSet:results
		});
  },

	render: function() {
		return(
			<div className="stat-section">
				<h2>Barclay's Premier League Table</h2>
				<DropDownMenu
					maxHeight={200}
					value={this.state.value}
					onChange={this._handleDropdownChange}
					style={styles.collapsed}
					menuStyle={styles.expanded}
					>
    			{this._renderDropDown()}
    		</DropDownMenu>
				<StatTable data={this.state.statSet}/>
			</div>
		);
	}
});

module.exports = StatSection;
