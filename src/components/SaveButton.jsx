const React = require('react');

const Gliff = require('./Gliff.jsx');

const SaveButton = React.createClass({

  propTypes: {
    save: React.PropTypes.func.isRequired
  },

  render: function () {
    return (
      <div className='col-xs-12 form-group'>
        <button type="button" onClick={this.props.save} className="btn btn-primary btn-block">
          <Gliff gliff="plus"/>
        </button>
      </div>
    );
  }
});

module.exports = SaveButton;
