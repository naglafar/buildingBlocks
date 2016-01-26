const React = require('react'),
  moment = require('moment');

const DEFAULT_FORMAT = 'MMM D YY [at] HH:mm';

const DateFormat = React.createClass({

  propTypes: {
    date: React.PropTypes.string.isRequired,
    format: React.PropTypes.string
  },

  formatDate: function () {
    return moment(this.props.date).format(this.props.format || DEFAULT_FORMAT);
  },

  render: function () {

    return (
      <span>{this.formatDate()}</span>
    );
  }
});

module.exports = DateFormat;
