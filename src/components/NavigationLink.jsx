const React = require('react');

const Link = require('react-router').Link;

const NavigationLink = React.createClass({

  propTypes: {
    to: React.PropTypes.string.isRequired,
    gliff: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      <li>
        <Link to={this.props.to}>
          <Gliff gliff={this.props.gliff}/>
          {
            `  ${this.props.name}`
          }
        </Link>
      </li>
    );
  }
});

module.exports = NavigationLink;

