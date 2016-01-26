const React = require('react');

const Select = React.createClass({

  propTypes: {
    options: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.string
  },

  renderOption: option => <option key={option.value} value={option.value}>{option.name}</option>,

  onChange: function (e) {
    let value = e.target.value;
    this.props.onChange(value, e);
  },

  render: function () {
    return (
      <select value={this.props.value} onChange={this.onChange}>
        {
          this.props.options.map(this.renderOption)
        }
      </select>
    );
  }
});

module.exports = Select;
