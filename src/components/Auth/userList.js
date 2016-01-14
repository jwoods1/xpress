import React, {Component} from "react"

class UserList extends Component {
  render() {
    return(
      <li className="list-group-item">
      <span>{this.props.name} </span>
        <span>{this.props.org} </span>
          <span>{this.props.role} </span>
            <span className="badge" onClick={this.props.remove} >X</span>
      </li>
    )
  }
}
export default UserList
