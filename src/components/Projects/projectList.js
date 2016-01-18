import React, {Component} from 'react'
import {Link} from 'react-router'
class ProjectList extends Component {

  render() {
    const projectUrl = '/projects/:'+this.props.link;
    return(
      <li>
        <div className="panel">
          <figure className="overlay overlay-hover animation-hover">
            <img className="caption-figure" src={this.props.img} />
            <figcaption className="overlay-panel overlay-background overlay-fade text-center vertical-align">
              <Link  to={projectUrl} className="btn btn-outline btn-default project-button">View Project</Link>
            </figcaption>
          </figure>
          <div className="time pull-right">{this.props.date}</div>
          <div className="text-truncate">{this.props.title}</div>
        </div>
      </li>
    )
  }
}

export default ProjectList
