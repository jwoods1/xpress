import React, {Component, PropTypes} from 'react'
import {base, parse} from '../../redux/utils/firebaseUtil'
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import TaskboardCard from 'containers/Dashboard/TaskboardCard'
import "../../../Libs/styles/taskboard.scss"



class TaskBoardView extends Component {
  constructor(props){
    super(props);
    this.state={
      tasks:[]

    }
    this.addTaskItem = this.addTaskItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.moveItem = this.moveItem.bind(this);
  }
componentDidMount(){
  let params = this.props.projectId.split(':');
  let projectId = params[1];
  let query = 'projects/' + projectId +'/tasks';

  this.taskBoards = base.bindToState(query , {
    context: this,
    state: 'tasks',
    asArray: true
  })
}
componentWillUnmount(){
  base.removeBinding(this.taskBoards);
}
addTaskItem(board, task){
  let user = this.props.user;
  console.log(user);
  let params = this.props.projectId.split(':');
  let projectId = params[1];
  let query = 'projects/' + projectId +'/tasks';
  base.push(query, {
    data:{
      label:task,
      board: board,
      complete:false,
      user:user
    }
  })
}
moveItem(item){
  console.log(item);
  let params = this.props.projectId.split(':');
  let projectId = params[1];
  let query = 'projects/' + projectId +'/tasks/'+ item.key;
  base.post(query, {
    data:{
      label:item.label,
      board: item.board,
      complete:item.complete,
      user:item.user
    }
  })
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
            <TaskboardCard key="backLog" move={this.moveItem} title={this.props.boards.taskboards.Backlog.title} update={this.updateItem} remove={this.removeItem} tasks={backLogTasks} board={this.props.boards.taskboards.Backlog} addTaskItem={this.addTaskItem}/>
            <TaskboardCard key="doingLog" move={this.moveItem} title={this.props.boards.taskboards.Doing.title} update={this.updateItem} remove={this.removeItem} tasks={doingTasks} board={this.props.boards.taskboards.Doing} addTaskItem={this.addTaskItem}/>
            <TaskboardCard key="completeLog" move={this.moveItem} title={this.props.boards.taskboards.Completed.title}  update={this.updateItem} remove={this.removeItem} tasks={compoleteTasks} board={this.props.boards.taskboards.Completed}  addTaskItem={this.addTaskItem} />
			    </ul>
			  </div>
			</div>
		);
	}
}

export default DragDropContext(HTML5Backend)(TaskBoardView);
