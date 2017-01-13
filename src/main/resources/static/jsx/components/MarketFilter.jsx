var
  React              = require('react'),
  request            = require('superagent'),
  FilterList         = require('react/components/UI/Filters/FilterList'),
  resultSet          = [],
  textValues = {};

var MarketFilter = React.createClass({

  getInitialState: function() {
    return {
      resultSet: [],
      key: Math.random()
    };
  },

  componentWillMount: function() {
    this._translateCode();
    this._getFilterList();
  },

  _translateCode: function() {
    textValues = {
      label: 'Market'
    };
  },

  _getFilterList: function() {
    var self = this;
    var usersVendor = Gcrowd.profileDetails.vendorAccess.vendorId;
    var vendorSource = '/reviews/market';
    if (!!usersVendor) {
      request.get(vendorSource)
      .withCredentials()
      .set('Accept', 'application/json')
      .query({vendorid : usersVendor})
      .end(function (error, res) {
        if (res) {
          var json = JSON.parse(res.text);
          var marketFilterList = json.marketList;
          if (marketFilterList) {
            self._parseFilterList(marketFilterList);
          }
        }
      });
    }
  },

  _updateFilter : function(filters){
    if(this.props.updateFilter instanceof Function){
      this.props.updateFilter(filters);
    }
    if(!filters.length){
      this.setState({
        key: Math.random()
      });
    }
  },

  _parseFilterList : function (obj){
    var results = [];
    for(var i=0;i<obj.length;i++){
      results.push({
        label: obj[i].name,
        value: obj[i].id
      })
    };

    this.setState({
      resultSet:results
    });
  },

  render: function() {
    return(
      <FilterList
        updateFilter={this._updateFilter}
        label={textValues.label}
        data={this.state.resultSet}
        key ={this.state.key}
        dataInteraction="Filter by Market" />

    );
  }
});

module.exports = MarketFilter;
