import React from 'react';
import request from 'superagent';
import {GridList, GridTile} from 'material-ui/GridList';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    overFlowY: 'auto'
  }
}

var ImageGallery = React.createClass({

  getInitialState: function() {
    this.modalImage = '';
    this.modalTitle = '';
    return {
      open: false,
      images: []
    }
  },

  componentWillMount: function(){
    this._getImages();
  },

  _handleOpen: function(image, title){
    this.modalImage = image;
    this.modalTitle = title;
    this.setState({open: true});
  },

  _handleClose: function(){
    this.setState({open: false});
  },

  _getImages: function(){
    var self = this;
		var imageSource = '/images/bing-gallery';
		request.get(imageSource)
		.withCredentials()
		.set('Accept','application/json')
		.end(function (error,res) {
			if (res) {
				var json = JSON.parse(res.text);
				var imageResponse = json.images;
				if (imageResponse) {
					self._parseImageList(imageResponse);
				}
			}
		});
  },

  _parseImageList: function(object){
    var results = [];
    for (var i = 0; i < object.length; i++){
      results.push({
        image: object[i]
      });
    }
    this.setState({
      images: results
    });
  },

  _renderTiles: function(){

    var self = this;
    var items = [];
    var domain = "http://www.bing.com";

    for (var i = 0; i < self.state.images.length; i++){
      if (i == 0){
        items.push(
          <GridTile
          key={self.state.images[i].image.url}
          title={self.state.images[i].image.copyright}
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          //onTouchTap={this._handleOpen.bind(this,domain.concat(self.state.images[i].image.url),self.state.images[i].image.copyright)}
          cols={2}
          rows={2}
          >
            <img src={domain.concat(self.state.images[i].image.url)} />
          </GridTile>
        );
      }
      else if (i == (self.state.images.length-1)){
        items.push(
          <GridTile
          key={self.state.images[i].image.url}
          title={self.state.images[i].image.copyright}
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          //onTouchTap={this._handleOpen.bind(this,domain.concat(self.state.images[i].image.url),self.state.images[i].image.copyright)}
          cols={2}
          rows={2}
          >
            <img src={domain.concat(self.state.images[i].image.url)} />
          </GridTile>
        );
      } else {
        items.push(
          <GridTile
          key={self.state.images[i].image.url}
          title={self.state.images[i].image.copyright}
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          //onTouchTap={this._handleOpen.bind(this,domain.concat(self.state.images[i].image.url),self.state.images[i].image.copyright)}
          cols={1}
          rows={1}
          >
            <img src={domain.concat(self.state.images[i].image.url)} />
          </GridTile>
        );
      }
    }
    return (items);
  },

  render: function() {

    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this._handleClose}
      />,
    ];

    return (
      <div className="gallery" style={styles.root}>
        <GridList
        cols={2}
        cellHeight={200}
        padding={1}
        styles={styles.gridList}>
          {this._renderTiles()}
        </GridList>
        <Dialog
          title={this.modalTitle}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this._handleClose}
        >
          <img src={this.modalImage} />
        </Dialog>
      </div>
    );
  }
});

module.exports = ImageGallery;
