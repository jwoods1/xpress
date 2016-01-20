import React, {Component, PropTypes} from 'react'
import {base, parse} from '../../redux/utils/firebaseUtil'
import {DragSource} from 'react-dnd'
import TaskboardCard from 'containers/Dashboard/TaskboardCard'
import "../../../Libs/styles/taskboard.scss"
//import "../../../Libs/scripts/taskboardApp.js"; // temp
//wimport "../../../Libs/scripts/taskboard.js"; // temp need to xtract templates make react components

const cardSource = {
  beginDrag(props) {
    return {
      text: props.text
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}
const propTypes = {
  text: PropTypes.string.isRequired,

  // Injected by React DnD:
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired
};
class Card {
  render() {
    const { isDragging, connectDragSource, text } = this.props;
    return connectDragSource(
      <div style={{ opacity: isDragging ? 0.5 : 1 }}>
        {text}
      </div>
    );
  }
}

class TaskBoardView extends Component {
  constructor(props){
    super(props);
    this.addTaskItem = this.addTaskItem.bind(this);
    this.updateItem = this.updateItem.bind(this);

  }
componentDidMount(){

}
addTaskItem(board, task){
  let params = this.props.projectId.split(':');
  let projectId = params[1];
  let query = 'projects/' + projectId +'/taskboards/' + board +'/tasks';
  base.push(query, {
    data:{
      task:{
        label:task,
        complete:false
      }
    },then(){
      console.log('updated');
    }
  })
}
updateItem(board, key, checked, label){
  let params = this.props.projectId.split(':');
  let projectId = params[1];
  let query = 'projects/' + projectId +'/taskboards/' + board +'/tasks/' + key +'/task';
  base.post(query, {
    data:{
      complete:checked,
      label:label
    },then(){
      console.log('updated');
    }
  })
}
	render() {
		return (
		  <div className="Taskboard">
			  <div className="page-header">
			    <h1 className="page-title">TaskBoard</h1>
			  </div>
			  <div className="page-content">
			    <ul className="taskboard-stages" id="taskboard-stages">
            <TaskboardCard key="backLog" title={this.props.boards.taskboards.Backlog.title} update={this.updateItem} tasks={this.props.boards.taskboards.Backlog.tasks} board={this.props.boards.taskboards.Backlog} addTaskItem={this.addTaskItem}/>
            <TaskboardCard key="doingLog" title={this.props.boards.taskboards.Doing.title} update={this.updateItem} tasks={this.props.boards.taskboards.Doing.tasks} board={this.props.boards.taskboards.Doing} addTaskItem={this.addTaskItem}/>
            <TaskboardCard key="completeLog"title={this.props.boards.taskboards.Completed.title}  update={this.updateItem} tasks={this.props.boards.taskboards.Completed.tasks} board={this.props.boards.taskboards.Completed}  addTaskItem={this.addTaskItem} />
			    </ul>
			  </div>
			</div>
		);
	}
}

export default TaskBoardView;
