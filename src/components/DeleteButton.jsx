const React = require('react');

const Gliff = require('./Gliff.jsx');

const DeleteButton = React.createClass({

  propTypes: {
    delete: React.PropTypes.func.isRequired
  },

  render: function () {
    return (
      <forum>
        <div className='col-xs-12 form-group'>
          <button type="button" onClick={this.props.delete} className="btn btn-danger btn-block">
            <Gliff gliff="trash"/>
          </button>
        </div>
      </forum>
    );
  }
});

module.exports = DeleteButton;
