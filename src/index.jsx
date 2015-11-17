var React = require('react');
var ReactDOM = require('react-dom');

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="row">
        <h1>bye world</h1>
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox />,
  document.getElementById('main')
);