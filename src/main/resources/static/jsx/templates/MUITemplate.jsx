import React from 'react';
import Paper from 'material-ui/Paper';
import Button from '../modules/Button';
import StatSection from '../components/StatSection';
import ImageGallery from '../components/ImageGallery';
var css = require("../../scss/home.scss");

const style = {
  height: 100,
  width: 100,
  textAlign: 'center'
};

var MUITemplate = React.createClass({
	render: function() {
		return (
			<div className="container home-container">
				<div className="col-xs-12 ">
          <center>
					     <Paper zDepth={1}>
                <StatSection />
					     </Paper>
               <Paper zDepth={1}>
                 <h2>Gallery</h2>
                 <ImageGallery />
               </Paper>
          </center>
				</div>
			</div>
		);
	}
});

module.exports = MUITemplate;
