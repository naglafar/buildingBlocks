var React = require('react'),
  HomeLink = require('./HomeLink.jsx'),
  NavigationLink = require('./NavigationLink.jsx');

var NavBarContainer = React.createClass({

  propTypes: {
    appName: React.PropTypes.string.isRequired,
    appGliff: React.PropTypes.string.isRequired,
    navLinks: React.PropTypes.arrayOf(React.PropTypes.shape({
      to: React.PropTypes.string.isRequired,
      gliff: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired
    })).isRequired
  },

  render: function () {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed"
                    data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <HomeLink name={this.props.appName} gliff={this.props.appGliff}/>
          </div>

          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              {this.props.navLinks.map(this.renderNavLink)}
            </ul>
          </div>
        </div>
      </nav>
    );
  },

  renderNavLink: (link) => {
    return <NavigationLink to={link.to} gliff={link.gliff} name={link.gliff}/>;
  }
});

module.exports = NavBarContainer;
