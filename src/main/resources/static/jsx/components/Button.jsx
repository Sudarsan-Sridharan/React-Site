import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

var Button = React.createClass({

	render: function() {
		this.label='';
		if (this.props.label){
			this.label = this.props.label;
		}
		return (
			<RaisedButton label={this.label} fullWidth={true} />
		);
	}
});

export default Button;