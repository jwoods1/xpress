import React, {Component} from 'react'

class ProjectComment extends Component {
  render() {
    return(

      <div className="comment media">
        <div className="media-left">
          <a className="avatar avatar-lg" href="javascript:void(0)">
            <img src={this.props.user.avatar} alt="..."/>
          </a>
        </div>
        <div className="media-body">
          <div className="comment-body">
            <a className="comment-author" href="javascript:void(0)">{this.props.user.name}</a>
            <div className="comment-meta">
              <span className="date">{this.props.date}</span>
            </div>
            <div className="comment-content">
              <p>{this.props.comment}
              </p>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default ProjectComment
