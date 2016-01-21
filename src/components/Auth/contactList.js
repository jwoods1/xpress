import React, {Component} from "react"

class ContactList extends Component {
  render() {
    return(
      <tr>
      <td>{this.props.name} </td>
      <td>{this.props.email} </td>
      <td>{this.props.subject} </td>
      <td>{this.props.details}</td>
      </tr>
    )
  }
}
export default ContactList
