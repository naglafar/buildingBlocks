const React = require('react');

const Link = require('react-router').Link;

const HomeLink = React.createClass({

  propTypes: {
    gliff: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      <Link to="./">
        <h3>
          <Gliff gliff={this.props.gliff}/> {this.props.name}
        </h3>
      </Link>
    );
  }
});

module.exports = HomeLink;

