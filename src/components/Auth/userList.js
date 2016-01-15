import React, {Component} from "react"

class UserList extends Component {
  removeEvent(){
    let event = this.props.remove;
    event(this.props.id)

  }
  editEvent(){
    let event = this.props.edit
    event(this.props.id);
  }
  render() {
    return(
      <li className="list-group-item">
      <span>{this.props.name} </span>
        <span>{this.props.org} </span>
          <span>{this.props.role} </span>
            <span className="badge" onClick={this.editEvent.bind(this)} >Edit</span>
            <span className="badge" onClick={this.removeEvent.bind(this)} >Remove</span>
      </li>
    )
  }
}
export default UserList
