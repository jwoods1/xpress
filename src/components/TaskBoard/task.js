import React,{Component, PropTypes} from 'react'
import { ItemTypes } from '../../views/TaskBoardView/taskContraints'
import { DragSource } from 'react-dnd'

const taskSource = {
  beginDrag(props){
    return{
      'key': props.item,
      'board':props.board.title,
      'label':props.label,
      'user' :props.user,
      'complete': props.complete
    };
  }
};

function collect(connect, monitor){
  return{
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}
class Task extends Component {
  constructor(props) {
      super(props);
      this.isChecked = this.isChecked.bind(this);
      this.removeItem = this.removeItem.bind(this);
    }
  isChecked(){
    let item = this.props.task;
    let checked = this.refs.taskChecked.checked;
    this.props.update(item, checked)
  }
  removeItem(){
    this.props.remove(this.props.task)
  }
  render() {
    const {connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <li className="list-group-item priority-normal" data-taskboard="slidePanel" data-url="panel.tpl">
        <div className="checkbox-custom checkbox-primary"><input onChange={this.isChecked} checked={this.props.complete} type="checkbox" ref="taskChecked" name="checkbox"/>
          <label className="task-title">{this.props.label}</label>
        </div>
        <div className="task-badges">
          <span onClick={this.removeItem} className="task-badge task-badge-subtask icon wb-list-bulleted"></span>
        </div>
        <ul className="task-members">
          <li>
            <img className="avatar avatar-sm" src={this.props.user.avatar}/>
          </li>
        </ul>
      </li>
    )
  }
}

Task.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  userImg: PropTypes.string,
  complete: PropTypes.bool,
  remove: PropTypes.func,
  update: PropTypes.func
}
export default DragSource(ItemTypes.TASK, taskSource, collect)(Task);
