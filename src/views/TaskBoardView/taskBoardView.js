import React, {Component, PropTypes} from 'react';
import {DragSource} from 'react-dnd'

import "../../../Libs/styles/taskboard.scss";

import "../../../Libs/scripts/taskboard.js";
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
		<div className="Taskboard">
			<div >
			  <div className="page-header">
			    <h1 className="page-title">TaskBoard</h1>
			  </div>
			  <div className="page-content">
			    <ul className="taskboard-stages" id="taskboard-stages"></ul>
			  </div>
			</div>
			<button className="site-action site-floataction btn-raised btn btn-success btn-floating"
			type="button" data-toggle="modal" data-target="#addStageFrom">
			  <i className="icon wb-plus" aria-hidden="true"></i>
			</button>
			<div className="modal fade" id="addStageFrom" aria-hidden="true" aria-labelledby="addStageFrom"
			role="dialog" tabindex="-1">
			  <div className="modal-dialog">
			    <div className="modal-content">
			      <div className="modal-header">
			        <button type="button" className="close" aria-hidden="true" data-dismiss="modal">×</button>
			        <h4 className="modal-title">Create New Group</h4>
			      </div>
			      <div className="modal-body">
			        <form action="#" method="post" role="form">
			          <div className="form-group">
			            <input type="text" className="form-control" id="name" name="name" placeholder="Stage Name" />
			          </div>
			        </form>
			      </div>
			      <div className="modal-footer text-left">
			        <button id="taskboard-stage-creat" className="btn btn-primary" data-dismiss="modal"
			        type="button">Creat</button>
			        <a className="btn btn-sm btn-white" data-dismiss="modal" href="javascript:void(0)">Cancel</a>
			      </div>
			    </div>
			  </div>
			</div>
			</div>
		);
	}
}

export default TaskBoardView;
