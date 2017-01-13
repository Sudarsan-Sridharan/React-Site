var
  React              = require('react'),
  CheckBox           = require('react/components/FormElements/CheckBox'),
  textValues         = {};

var FilterList = React.createClass({

  getInitialState: function() {
    this.filters = [];
    this.filtersNameArr = [];
    return {
      enabled: false
    }
  },

  componentWillMount: function() {
    this._translateCode();
  },

  _translateCode: function() {

    textValues = {
      filterBy: 'Filter By'
    };
  },

  _clearFilters: function() {
    this.filters = [];
    this.filtersNameArr = [];

    this.setState({ enabled: false });

    if (this.props.updateFilter instanceof Function) {
        this.props.updateFilter(this.filters, this.filtersNameArr);
    }
  },

  _onChange: function(val, checked) {
    if (checked) {
      this.filters.push(val);
    } else {
      var idx = this.filters.indexOf(val);
      if(idx > -1){
        this.filters.splice(idx,1);
      }
    }

    this.setState({ enabled: this.filters.length });

    if (this.props.updateFilter instanceof Function) {
      this.props.updateFilter(this.filters);
    }

    // window.scrollTo( 0, 0 ); //TODO:This probably causes the IE filter error. Refactor?
  },

  _renderList: function() {
    var data = this.props.data;

    if (data && data.length) {
      var list = [];
      for (var i=0;i<data.length;i++) {
        var dObj = data[i];

        var dataAttributes = {
          'interaction':'filter',
          'filter-value': dObj.label,
          'filter': dObj.value,
          'filter-category': this.props.dataInteraction
        };

        list.push(
          <li key={i}>
            <CheckBox
              dataAttributes={dataAttributes}
              label={dObj.label}
              subLabel={dObj.subLabel}
              onChangeAction={this._onChange}
              value={dObj.value}
              dataInteraction={this.props.dataInteraction} />
          </li>
        );
      }

      return (
        <ul className="filterUl">
          {list}
        </ul>
      );
    } else {
      return (null);
    }
  },

  _renderClearButton: function() {
    if (this.state.enabled) {
      return <span className="clrButton" onClick={this._clearFilters}>Clear</span>
    } else {
      return <span className="clrDisabledButton">Clear</span>
    }
  },

  render: function() {
    return (
      <div className="filterSection fullWidth boxedContent">
        <div className="filterHeader">
         {textValues.filterBy} {this.props.label}
        </div>
        <div className="filterBody">
          {this._renderList()}
        </div>
        <div>
          <div className="filterFooter">
           {this._renderClearButton()}
          </div>
        </div>
      </div>
    );
  }
});


module.exports = FilterList;
