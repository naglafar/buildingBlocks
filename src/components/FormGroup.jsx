const React = require('react');

const Col = require('./Column.jsx');

const FormGroup = React.createClass({

  propTypes: {
    for: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      <div className="form-group">
        <Col s="2">
          <label for={this.props.for} className="control-label">{this.props.label}</label>
        </Col>
        <Col s="10">
          {
            this.props.children
          }
        </Col>
      </div>
    );
  }
});

module.exports = FormGroup;
