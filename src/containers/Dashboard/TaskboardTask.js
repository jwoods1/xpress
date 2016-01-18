import React, {PropTypes, Component} from 'react'
import Task from 'components/TaskBoard/task'

const tasks = [ // Need to make this dynamic
  {'label':'Test1', 'userImg':'testimage1'},
  {'label':'Test2', 'userImg':'testimage1'},
  {'label':'Test3', 'userImg':'testimage1'}
];
class TaskBoardTask extends Component {
  renderTasks(){

  }
  render() {
    return(
      <ul className="list-group taskboard-list">
        {tasks.map((item, index) => {
          return <Task label={item.label} key={index} userImg={item.userImg}  / >
        })}
      </ul>
    )
  }
}


export default TaskBoardTask
