import React,{Component} from 'react'

class Task extends Component {
  render() {
    return(
      <li className="list-group-item priority-normal" data-taskboard="slidePanel" data-url="panel.tpl">
        <div className="checkbox-custom checkbox-primary"><input type="checkbox" name="checkbox"/>
          <label className="task-title">{this.props.label}</label>
        </div>
        <div className="task-badges"></div>
        <ul className="task-members">
          <li>
            <img className="avatar avatar-sm" src={this.props.userImg}/>
          </li>
        </ul>
      </li>
    )
  }
}

export default Task;