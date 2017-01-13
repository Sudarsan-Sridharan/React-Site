var React        = require('react'),
    Icon         = require('react/components/UI/Icons/Icon');

var CheckBox = React.createClass({

  getInitialState: function() {
    return {
      isCheckedCls: ''
    };
  },

  componentDidMount: function() {
    var self = this;

    if (this.props.dataAttributes) {
      var dataAttrs = this.props.dataAttributes;
      for (var i in dataAttrs) {
        self.refs.checkboxLabel.setAttribute('data-attr-' + i, dataAttrs[i]);
      }
    }
  },

  _onChange: function(){
    if(this.props.onChangeAction instanceof Function) {
      var myCheck=this.refs.myCheck;
      this.props.onChangeAction(myCheck.value, myCheck.checked);
    }

    (this.refs.myCheck) ? this._changeIcon(this.refs.myCheck) : null;
  },

  _renderSubLabel: function() {
    if(this.props.subLabel) {
      return (<span class="sublabel">{this.props.subLabel}</span>);
    } else {
      return (null);
    }
  },

  _changeIcon: function(myCheck) {
    if(myCheck.checked) {
      this.setState({isCheckedCls: 'filterCheckbox'});
    }
    else{
      this.setState({isCheckedCls: 'filterCheckbox-unchecked'});
    };
  },

  render: function() {
    var chkBxClass     = "chkboxNew";
    var type           = 'checkbox';
                          
    return (
      <div className="checkBox col-xs-12">
        <label className="lblCheckBox" ref="checkboxLabel" id="checkboxLabel">
          <div className="col-xs-2" id="checkbox">
            <input
              ref="myCheck"
              type="checkbox"
              className={chkBxClass}
              value={this.props.value}
              onChange={this._onChange} />
            <Icon iconType={this.state.isCheckedCls} className="checkboxBorder" />
          </div>
          <div className="checkboxLabel col-xs-10">{this.props.label}</div>
          {this._renderSubLabel()}
        </label>
      </div>

    );
  }
});


module.exports = CheckBox;
