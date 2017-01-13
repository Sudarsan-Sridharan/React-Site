var React       = require('react');

var Icon = React.createClass({

  // Use this as a generic icon component to pass iconType as a prop
  // and add the classes you need in the switch statement
  // Default icon is set to glyphicons, but if you're adding a SPRITE icon - pass isSprite={true} in addition.

	_onClick: function() {
    if (this.props.onClickAction instanceof Function) {
      this.props.onClickAction();
    }
	},

  _getType: function(type) {
    switch(type) {
      case 'rightArrow':
        return " glyphicon-triangle-right";
      case 'checkPass':
        return " glyphicon-ok";
      case 'checkFail':
        return " glyphicon-remove";
      case 'openInNewSqArrow':
        return " icons-icon_open_in_new";
      case 'greenCheckmark' :
        return " withCheckmark";
			case 'blueFileDownload1' :
        return " icons-ic_file_download_blue_1x";
			case 'filterCheckbox' :
        return " icons-icon-checkmark-checked";
			case 'filterCheckbox-unchecked' :
        return " ";
      case 'errorIcon' :
        return " icons-icon-alert-white"
      case 'editIcon' :
        return " glyphicon-pencil";
      case 'info' :
        return " icons-info_outline_gray";
      case 'downArrow' :
        return " glyphicon-menu-down";
      case 'upArrow' :
        return " glyphicon-menu-up";
      case 'searchMagnifyingGlass':
        return " material-icons";
		}
  },

  render: function() {
    var className = (this.props.isSprite) ? "icon-sprite" : "glyphicon";
    var tooltip   = '';
    var gaMarkup  = '';
    var materialIconsText = '';

    className += this._getType(this.props.iconType);

    if (this.props.className) {
      className = className.concat(" ").concat(this.props.className);
    }

    if (this.props.iconType === 'openInNewSqArrow') {
      gaMarkup = "View Published Reviews";
    }

    if (this.props.tooltip) {
      tooltip = this.props.tooltip;
    }

    if (this.props.materialIconsText) {
      materialIconsText = this.props.materialIconsText;
    }

    return (
      <span
        data-interaction={gaMarkup}
        title={tooltip}
        className={className}
        onClick={this._onClick}>
          {materialIconsText}
      </span>
    );
  }
});

module.exports = Icon;
