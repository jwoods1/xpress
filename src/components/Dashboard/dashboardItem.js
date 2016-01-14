import React, {PropTypes} from 'react';

class DashboardItem extends React.Component {
  render(){
    return(
      <li className="list-group-item">
        <div className="media">
          <div className="media-left">
            <a className="avatar" href="javascript:void(0)">
              <img className="img-responsive" src={this.props.avatar} alt={this.props.author} />
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading">{this.props.author}{" "}
              <span>{this.props.status}</span>
            </h4>
            <small>{this.props.time}</small>
            <div className="profile-brief">“{this.props.brief}”</div>
          </div>
        </div>
      </li>
    )
  }
}
DashboardItem.propTypes = {
  avatar: PropTypes.string,
  status: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  brief: PropTypes.string.isRequired
}
export default DashboardItem
