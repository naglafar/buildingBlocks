const React = require('react'),
  NavigationBar = require('./NavigationBar.jsx');

const Layout = React.createClass({

  render: function () {
    return (
      <div>
        <NavigationBar/>
        { this.props.children }
      </div>
    );
  }
});

module.exports = Layout;
