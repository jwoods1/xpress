import React, {PropTypes} from 'react';

class DashboardItem extends React.Component {
  render(){
    let imgUser = this.props.item.user.avatar.split(':');
    return(
      <li className="list-group-item">
        <div className="media">
          <div className="media-left">
            <a className="avatar" href="javascript:void(0)">
              <img className="img-responsive" src={imgUser[1]} alt={this.props.item.user.name} />
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading">
              <span>Project: {this.props.item.project}</span>
              <hr/>
              <span>{this.props.item.user.name}{' '}</span>
              <span>{this.props.item.action}{' '}</span>
            </h4>
            <small>{this.props.item.updated}</small>
            <div className="profile-brief">“{this.props.item.label} {this.props.item.comment}”</div>
            <small>Completed: {this.props.item.complete}</small>
          </div>
        </div>
      </li>
    )
  }
}
DashboardItem.propTypes = {

}
export default DashboardItem
