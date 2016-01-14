import React, {PropTypes, Component} from 'react'

class TaskBoardTask extends Component {
  render() {
    return(
      <li className="taskboard-stage">
      	<header className="taskboard-stage-header">
      		<div className="taskboard-stage-actions pull-right">
      			<div className="dropdown">
      				<a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
      				<i className="icon wb-chevron-down" aria-hidden="true"></i>
      				</a>
      				<ul className="dropdown-menu bullet" role="menu">
      					<li role="presentation" className="taskboard-stage-rename">
      						<a href="javascript:void(0)" role="menuitem">
      						<i className="icon wb-pencil" aria-hidden="true"></i>
      						Rename</a>
      					</li>
      					<li role="presentation" className="taskboard-stage-delete"><a href="javascript:void(0)" role="menuitem">
      						<i className="icon wb-trash" aria-hidden="true"></i>Delete</a>
      					</li>
      					<li className="taskboard-stage-rename-wrap">
      						<div className="form-group"><input className="form-control taskboard-stage-rename-input" type="text" value="test" name="name"/></div>
      						<button className="btn btn-primary btn-block taskboard-stage-rename-save" type="button">Save</button>
      					</li>
      				</ul>
      			</div>
      		</div>
      		<h5 className="taskboard-stage-title">test</h5>
      	</header>
      	<div className="taskboard-stage-content">
      		<ul className="list-group taskboard-list">
      			<li className="list-group-item priority-normal" data-taskboard="slidePanel" data-url="panel.tpl">
      				<div className="checkbox-custom checkbox-primary"><input type="checkbox" name="checkbox"/>
      					<label className="task-title">test</label>
      				</div>
      				<div className="task-badges"></div>
      				<ul className="task-members">
      					<li>
      						<img className="avatar avatar-sm" src="../../../../global/portraits/5.jpg"/>
      					</li>
      				</ul>
      			</li>
      		</ul>
      		<div className="action-wrap action-open">
      			<a className="add-item-toggle" href="#"><i className="icon wb-plus" aria-hidden="true"></i>Add Task</a>
      			<div className="add-item-wrap">
      				<form className="add-item" role="form" method="post" action="#">
      				<div className="form-group">
      					<label className="control-label margin-bottom-15" for="name">Task name:</label>
      					<input className="form-control" type="text" placeholder="Task name" name="name"/>
      				</div>
      				<div className="form-group text-right">
      					<a className="btn btn-sm btn-white add-item-cancel">Cancel</a>
      					<button type="button" className="btn btn-primary add-item-add">Add</button>
      				</div>
      				<form>
      			</div>
      		</div>
      	</div>
      </li>
    )
  }
}


export default TaskBoardTask
