var React = require('react');
var ReactDOM = require('react-dom');
var reflux = require('reflux');

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="row">
        <h1>test</h1>
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox />,
  document.getElementById('main')
);