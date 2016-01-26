const React = require('react'),
  Gliff = require('./Gliff.jsx'),
  Link = require('react-router').Link;

const NewButton = React.createClass({

  propTypes: {
    to: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      <forum>
        <div className='col-xs-12 form-group'>
          <Link to={this.props.to}>
            <button className="btn btn-primary btn-block">
              <Gliff gliff="plus"/>
            </button>
          </Link>
        </div>
      </forum>
    );
  }
});

module.exports = NewButton;
