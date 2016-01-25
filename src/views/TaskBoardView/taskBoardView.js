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
    this.state={
      tasks:[]
    }
    this.addTaskItem = this.addTaskItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.removeItem = this.removeItem.bind(this);

  }
componentDidMount(){
  let params = this.props.projectId.split(':');
  let projectId = params[1];
  let query = 'projects/' + projectId +'/tasks';
  this.taskBoards = base.syncState(query , {
    context: this,
    state: 'tasks',
    asArray: true
  })
}
componentWillUnmount(){
  base.removeBinding(this.taskBoards);
}
addTaskItem(board, task){
  let newTask = {
    label:task,
    complete:false,
    board: board
  }
  this.setState({
    tasks: this.state.tasks.concat([newTask])
  })
  /*
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
  })*/
}
removeItem(board, task){
  let newArray = this.state.tasks.concat([]);
  newArray.splice(task, 1);

  this.setState({
    tasks:newArray
  })
}
updateItem(board, key, checked, label){
  console.log(checked);
  let update = this.state.tasks.concat([]);
  update[key].complete = checked;

  this.setState({
    tasks: update
  })
}
	render() {
    let backLogTasks = this.state.tasks.filter((i) => {
      return i.board == 'Backlog'
    });
    let compoleteTasks = this.state.tasks.filter((i) => {
      return i.board == 'Completed'
    });
    let doingTasks = this.state.tasks.filter((i) => {
      return i.board == 'Doing'
    });
		return (
		  <div className="Taskboard">
			  <div className="page-header">
			    <h1 className="page-title">TaskBoard</h1>
			  </div>
			  <div className="page-content">
			    <ul className="taskboard-stages" id="taskboard-stages">
            <TaskboardCard key="backLog" title={this.props.boards.taskboards.Backlog.title} update={this.updateItem} remove={this.removeItem} tasks={backLogTasks} board={this.props.boards.taskboards.Backlog} addTaskItem={this.addTaskItem}/>
            <TaskboardCard key="doingLog" title={this.props.boards.taskboards.Doing.title} update={this.updateItem} remove={this.removeItem} tasks={doingTasks} board={this.props.boards.taskboards.Doing} addTaskItem={this.addTaskItem}/>
            <TaskboardCard key="completeLog"title={this.props.boards.taskboards.Completed.title}  update={this.updateItem} remove={this.removeItem} tasks={compoleteTasks} board={this.props.boards.taskboards.Completed}  addTaskItem={this.addTaskItem} />
			    </ul>
			  </div>
			</div>
		);
	}
}

export default TaskBoardView;
