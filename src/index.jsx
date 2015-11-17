import { Router, Route, Link } from 'react-router'
import React from 'react'
import { render } from 'react-dom'
import  Redux  from 'redux'


const Users = React.createClass({
  render() {
    return (
      <div>
        <h1>Users</h1>
      </div>
    )
  }
})

const User = React.createClass({
  render() {
    return (
      <div>
        <h2>Test Page</h2>
      </div>
    )
  }
})
render((
  <Router>
    <Route path="/" component={User}>
      <Route path="users" component={Users}/>
      <Route path="test" component={User}/>
     </Route>
  </Router>
), document.getElementById('main'))