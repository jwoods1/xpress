import React, {Component, PropTypes} from 'react';
import {DragSource} from 'react-dnd'




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
	render() {
		return (
			<div className="col-md-4">
				<ul className="taskboard-stages ui-sortable" id="taskboard-stages">
					<li className="taskboard-stage">
						<header className="taskboard-stage-header ui-sortable-handle">
							<div className="taskboard-stage-actions pull-right">
								<div className="dropdown">
									<a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
										<i className="icon wb-chevron-down" aria-hidden="true"></i></a><ul className="dropdown-menu bullet" role="menu">
										<li role="presentation" className="taskboard-stage-rename">
											<a href="javascript:void(0)" role="menuitem">
												<i className="icon wb-pencil" aria-hidden="true"></i>
												Rename
											</a>
										</li>
										<li role="presentation" className="taskboard-stage-delete">
											<a href="javascript:void(0)" role="menuitem">
												<i className="icon wb-trash" aria-hidden="true"></i>
													Delete
											</a>
										</li>
										<li className="taskboard-stage-rename-wrap">
											<div className="form-group">
												<input className="form-control taskboard-stage-rename-input" type="text" value="test" name="name" />
											</div>
											<button className="btn btn-primary btn-block taskboard-stage-rename-save" type="button">Save</button>
										</li>
									</ul>
								</div>
							</div>
							<h5 className="taskboard-stage-title">test</h5>
						</header>
						<div className="taskboard-stage-content">
							<ul className="list-group taskboard-list ui-sortable"></ul>
							<div className="action-wrap">
								<a className="add-item-toggle" href="#">
									<i className="icon wb-plus" aria-hidden="true"></i>Add Task
								</a>
								<div className="add-item-wrap">
									<form className="add-item" role="form" method="post" action="#">
										<div className="form-group">
											<label className="control-label margin-bottom-15" for="name">Task name:</label>
											<input className="form-control" type="text" placeholder="Task name" name="name" />
										</div>
										<div className="form-group text-right">
											<a className="btn btn-sm btn-white add-item-cancel">Cancel</a>
											<button type="button" className="btn btn-primary add-item-add">Add</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		);
	}
}

export default TaskBoardView;
