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
      <tr>
      <td>{this.props.name} </td>
      <td>{this.props.org} </td>
      <td>{this.props.role} </td>
      <td className="text-warning" onClick={this.editEvent.bind(this)} >Edit</td>
      <td className="text-danger" onClick={this.removeEvent.bind(this)} >Remove</td>
      </tr>
    )
  }
}
export default UserList
