import React,{PropTypes, Component} from 'react'


class ProfileWidget extends Component {
  render(){
    return(
      <div className="widget-header-content">
        <a className="avatar avatar-lg" href="javascript:void(0)">
          <img className="img-responsive" src={this.props.avatar} alt={this.props.userName}/>
        </a>
        <h4 className="profile-user">{this.props.userName}</h4>
        <p className="profile-job">{this.props.job}</p>
        <p>{this.props.bio}</p>
        <br/>
      </div>
    )
  }

}
ProfileWidget.propTypes = {

}

export default ProfileWidget
