import React, {Component} from 'react'

class ProjectDocs extends Component {
  render() {
    return(
      <div className="panel col-xs-3">
        <figure className="overlay overlay-hover animation-hover">
          <img className="caption-figure img-responsive" src={this.props.url} />
          <figcaption className="overlay-panel overlay-background overlay-fade text-center vertical-align">
            <a href={this.props.url} className="btn btn-outline btn-default project-button">download</a>
          </figcaption>
        </figure>
        <div className="time pull-right">{this.props.docName}</div>
        <div className="text-truncate">{this.props.docType}</div>
      </div>
    )
  }
}

export default ProjectDocs
