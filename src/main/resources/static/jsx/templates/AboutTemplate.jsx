import React from 'react';
import Paper from 'material-ui/Paper';
import 'bootstrap/dist/css/bootstrap.css';

var AboutTemplate = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="col-xs-12">
					<Paper zDepth={1}>
						<center>
							<h2>React.js practice</h2>
						</center>
					</Paper>
				</div>
			</div>
		);
	}
});

module.exports = AboutTemplate;
