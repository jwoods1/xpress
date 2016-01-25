import React, {Component} from 'react'
import Task from 'components/TaskBoard/task'

class TaskboardCard extends Component {
  constructor(props) {
      super(props);

      this.update = this.update.bind(this);
      this.mapObject = this.mapObject.bind(this);
    }
componentWillReceiveProps(nextProps){


}
  addItem(){
    let newTask = this.refs.newTask.value;
    let board = this.props.title;
    this.props.addTaskItem(board,newTask);
  }
  mapObject(object, callback) {
    console.log();
    return Object.keys(object).map(function (key) {
      return callback(key, object[key]);
    });
  }
  update(board, item, checked, label){
    this.props.update(board, item, checked, label);
  }

  render() {
    var update = this.update;
    var remove = this.props.remove;
    var board = this.props.board;
    return(
      <li className="taskboard-stage">
      	<header className="taskboard-stage-header">
      		<h5 className="taskboard-stage-title">{this.props.title}</h5>
      	</header>
      	<div className="taskboard-stage-content">
          <ul className="list-group taskboard-list">
            {
              /*
              this.mapObject(this.state.tasks, function(key, value){
                console.log(key);
                console.log(value);
                return <Task label={value.task.label} item={key} complete={value.task.complete} userImg={value.task.userImg} update={update} remove={remove} board={board}  key={key} />
              })*/
              this.props.tasks.map((item, index) => {
                return <Task label={item.label} item={index} complete={item.complete} userImg={item.userImg} update={update} remove={remove} board={board}  key={index} />
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

export default TaskboardCard
