import React from 'react';
import request from 'superagent';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const tooltipStyles = {
    tooltipPosition: "top-center"
};

const tableProps = {
    showCheckBox: false,
    fixedHeader: true
}

const tableStyles = {
  teamColumnWidth: 150
}

var StatTable = React.createClass({
  _renderTable: function(){
    var items = [];
    for (var i = 0; i < this.props.data.length; i++){
      items.push(<TableRow>
        <TableRowColumn>
          {this.props.data[i].team.team}
        </TableRowColumn>
        <TableRowColumn>
          {this.props.data[i].team.gamesPlayed}
        </TableRowColumn>
        <TableRowColumn>
          {this.props.data[i].team.wins}
        </TableRowColumn>
        <TableRowColumn>
          {this.props.data[i].team.draws}
        </TableRowColumn>
        <TableRowColumn>
          {this.props.data[i].team.losses}
        </TableRowColumn>
        <TableRowColumn>
          {this.props.data[i].team.goalsFor}
        </TableRowColumn>
        <TableRowColumn>
          {this.props.data[i].team.goalsAgainst}
        </TableRowColumn>
        <TableRowColumn>
          {this.props.data[i].team.goalDiff}
        </TableRowColumn>
        <TableRowColumn>
          {this.props.data[i].team.points}
        </TableRowColumn>
      </TableRow>
      )
    }

    return (items);
  },

  render: function() {
    return (
      <Table
      selectable={tableProps.showCheckBox}
      fixedHeader={tableProps.fixedHeader}
      >
        <TableHeader
        displaySelectAll={tableProps.showCheckBox}
        adjustForCheckbox={tableProps.showCheckBox}
        >
          <TableHeaderColumn>
            Team
          </TableHeaderColumn>
          <TableHeaderColumn
          tooltip="Games Played"
          tooltipPosition="top-center"
          tooltipStyle={tooltipStyles}
          >
            GP
          </TableHeaderColumn>
          <TableHeaderColumn
          tooltip="Wins"
          tooltipPosition="top-center"
          tooltipStyle={tooltipStyles}
          >
            W
          </TableHeaderColumn>
          <TableHeaderColumn
          tooltip="Draws"
          tooltipPosition="top-center"
          tooltipStyle={tooltipStyles}
          >
            D
          </TableHeaderColumn>
          <TableHeaderColumn
          tooltip="Losses"
          tooltipPosition="top-center"
          tooltipStyle={tooltipStyles}
          >
            L
          </TableHeaderColumn>
          <TableHeaderColumn
          tooltip="Goals For"
          tooltipPosition="top-center"
          tooltipStyle={tooltipStyles}
          >
            GF
          </TableHeaderColumn>
          <TableHeaderColumn
          tooltip="Goals Against"
          tooltipPosition="top-center"
          tooltipStyle={tooltipStyles}
          >
            GA
          </TableHeaderColumn>
          <TableHeaderColumn
          tooltip="Goal Differential"
          tooltipPosition="top-center"
          tooltipStyle={tooltipStyles}
          >
            GD
          </TableHeaderColumn>
          <TableHeaderColumn
          tooltip="Points"
          tooltipPosition="top-center"
          tooltipStyle={tooltipStyles}
          >
            Pts
          </TableHeaderColumn>
        </TableHeader>
        <TableBody
        displayRowCheckbox={tableProps.showCheckBox}
        >
          {this._renderTable()}
        </TableBody>
      </Table>
    );
  }
});

module.exports = StatTable;
