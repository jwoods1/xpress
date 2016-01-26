import React, {Component} from 'react'
import Task from 'components/TaskBoard/task'
import { ItemTypes } from '../../views/TaskBoardView/taskContraints'
import { DropTarget } from 'react-dnd'

const cardTarget = {
  drop(props, monitor){
    let item = monitor.getItem();
    item.board = props.title;
    console.log(item);
    props.move(item);
    //console.log(item);
  }
}

function collect(connect, monitor){
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

class TaskboardCard extends Component {
  constructor(props) {
      super(props);
    }
  addItem(){
    let newTask = this.refs.newTask.value;
    let board = this.props.title;
    this.props.addTaskItem(board,newTask);
    this.refs.newTask.value = "";
  }

  render() {
    const {connectDropTarget, isOver} = this.props;
    return connectDropTarget(
      <li className="taskboard-stage">
      	<header className="taskboard-stage-header">
      		<h5 className="taskboard-stage-title">{this.props.title}</h5>
      	</header>
      	<div className="taskboard-stage-content">
          <ul className="list-group taskboard-list">
            {

              this.props.tasks.map((item, index) => {
                return <Task label={item.label} item={item.key} complete={item.complete} task={item} user={item.user} update={this.props.update} remove={this.props.remove} board={this.props.board}  key={index} />
              })
            }
          </ul>
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

export default DropTarget(ItemTypes.TASK, cardTarget, collect)(TaskboardCard);
