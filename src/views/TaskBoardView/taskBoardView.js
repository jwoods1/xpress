import React, {Component, PropTypes} from 'react'
import {base, parse} from '../../redux/utils/firebaseUtil'
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import TaskboardCard from 'containers/Dashboard/TaskboardCard'
import moment from 'moment'
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
  base.push('activities', {
    data:{
      action:"Task Added",
      project:this.props.boards.title,
      label:task,
      board: board,
      complete:false,
      user:user,
      updated:moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
      timeStamp:moment().format()
    }
  })
}
moveItem(item){
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
  base.push('activities', {
    data:{
      action:"Task updated",
      project:this.props.boards.title,
      label:item.label,
      board: item.board,
      complete:item.complete,
      user:item.user,
      updated:moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
      timeStamp:moment().format()
    }
  })
}
removeItem(item){
  let params = this.props.projectId.split(':');
  let projectId = params[1];
  let query = 'projects/' + projectId +'/tasks/'+ item.key;
  base.post(query, {
    data:{
    }
  })
  base.push('activities', {
    data:{
      action:"Task Deleted",
      project:this.props.boards.title,
      label:item.label,
      board: item.board,
      complete:item.complete,
      user:item.user,
      updated:moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
      timeStamp:moment().format()
    }
  })
}
updateItem(item, checked){
  let params = this.props.projectId.split(':');
  let projectId = params[1];
  let query = 'projects/' + projectId +'/tasks/'+ item.key;
  base.post(query, {
    data:{
      label:item.label,
      board: item.board,
      complete:checked,
      user:item.user
    }
  })
  base.push('activities', {
    data:{
      action:"Task updated",
      project:this.props.boards.title,
      label:item.label,
      board: item.board,
      complete:checked,
      user:item.user,
      updated:moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
      timeStamp:moment().format()
    }
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
