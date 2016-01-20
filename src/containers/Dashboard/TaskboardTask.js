import React, {PropTypes, Component} from 'react'
import Task from 'components/TaskBoard/task'

class TaskBoardTask extends Component {
  constructor(props) {
      super(props);
      this.state = {
        tasks:{}
      };
    }
componentWillReceiveProps(nextProps){
  if(nextProps.tasks){
    this.setState({
      tasks:nextProps.tasks
    })
  }

}
mapObject(object, callback) {
  console.log();
  return Object.keys(object).map(function (key) {
    return callback(key, object[key]);
  });
}
update(item,value){
  this.props.update(item,value);
}
  renderTasks(){

  }
  render() {
    let updateCheck = this.props.update
    let board = this.props.board
    return(
      <ul className="list-group taskboard-list">
        {
          this.mapObject(this.state.tasks, function(key, value){
            return <Task label={value.task.label} item={key} complete={value.task.complete} update={updateCheck} board={board} key={key} />
          })
        }
      </ul>
    )
  }
}


export default TaskBoardTask
