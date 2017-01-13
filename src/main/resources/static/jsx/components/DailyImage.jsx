import React from 'react';
import request from 'superagent';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';

var DailyImage = React.createClass({
  getInitialState: function(){
    return {
      expanded: false
    }
  },

  componentWillMount: function() {
		this._getImage();
	},

  _getImage: function() {
    var self = this;
		var imageSource = 'http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US';
		request.get(imageSource)
		.withCredentials()
		.set('Accept','application/json')
		.end(function (error,res) {
			if (res) {
				var json = JSON.parse(res.text);
				var imageResponse = json.images;
				if (imageResponse) {
					self._parseSeasonList(imageResponse);
				}
			}
		});
  }

  _handleExpandChange: function(expanded){
    this.setState({
      expanded:expanded
    });
  },

  _handleToggle: function(event, toggle){
    this.setState({
      expanded:toggle
    });
  }

  render: function(){
    return (
      <Card expanded={this.state.expanded} onExpandChange={this._handleExpandChange}>
        <CardHeader
        title="Image of the Day"
        subtitle="Provided by Bing"
        actAsExpander={true}
        showExpandableButton={true}
        />
        <CardText>
          <Toggle
          toggled={this.state.expanded}
          onToggle={this._handleToggle}
          labelPosition="right"
          label="View/Hide"
          />
          <CardMedia
          expandable={true}
          >
          </CardMedia>
        </CardText>
      </Card>
    );
  }
});

module.exports = DailyImage;
