import React,{Component} from 'react'

class Task extends Component {
  constructor(props) {
      super(props);
      this.isChecked = this.isChecked.bind(this);
      this.remove = this.remove.bind(this);
    }
  isChecked(){
    let item = this.props.item;
    let checked = this.refs.taskChecked.checked;
    let board = this.props.board.title;
    let label = this.props.label
    this.props.update(board, item, checked, label)
  }
  remove(){
    let board = this.props.board.title;
    let item = this.props.item;
    console.log('clicked remove');
    this.props.remove(board, item )
  }
  render() {

    return(
      <li className="list-group-item priority-normal" data-taskboard="slidePanel" data-url="panel.tpl">
        <span ><i onClick={this.remove} className="icon wb-minus-circle"></i></span>
        <div className="checkbox-custom checkbox-primary"><input onChange={this.isChecked} checked={this.props.complete} type="checkbox" ref="taskChecked" name="checkbox"/>
          <label className="task-title">{this.props.label}</label>
        </div>
        <ul className="task-members">
          <li>
            <img className="avatar avatar-sm" src={this.props.userImg}/>
          </li>
        </ul>
      </li>
    )
  }
}

export default Task;
