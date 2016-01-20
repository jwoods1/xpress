import React, {Component} from 'react'
import TaskBoardTask from './TaskboardTask'

class TaskboardCard extends Component {
  addItem(){
    let newTask = this.refs.newTask.value;
    let board = this.props.title;
    this.props.addTaskItem(board,newTask);
  }
  render() {
    return(
      <li className="taskboard-stage">
      	<header className="taskboard-stage-header">
      		<h5 className="taskboard-stage-title">{this.props.title}</h5>
      	</header>
      	<div className="taskboard-stage-content">
      		<TaskBoardTask tasks={this.props.tasks} update={this.props.update} board={this.props.title}/>
      		<div className="action-wrap action-open">
      			<a className="add-item-toggle" href="#"><i className="icon wb-plus" aria-hidden="true"></i>Add Task</a>
      			<div className="add-item-wrap">
      				<div className="add-item" role="form">
          				<div className="form-group">
          					<label className="control-label margin-bottom-15" htmlFor="name">Task name:</label>
          					<input className="form-control" type="text" ref="newTask" placeholder="Task name" name="name"/>
          				</div>
          				<div className="form-group text-right">
          					<a className="btn btn-sm btn-white add-item-cancel">Cancel</a>
          					<button type="button" onClick={this.addItem.bind(this)} className="btn btn-primary add-item-add">Add</button>
          				</div>
              </div>
      			</div>
      		</div>
      	</div>
      </li>
    )
  }
}

export default TaskboardCard
