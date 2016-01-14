import React, {PropTypes, Component} from 'react'

class NotifyWidget extends Component {
  render(){
    return(

      <li className="list-group" role="presentation">
        <div data-role="container">
        <div data-role="content">
          <a className="list-group-item" href="javascript:void(0)" role="menuitem">
          <div className="media">
            <div className="media-left padding-right-10">
            <i className="icon wb-order bg-red-600 white icon-circle" aria-hidden="true"></i>
            </div>
            <div className="media-body">
            <h6 className="media-heading">A new order has been placed</h6>
            <time className="media-meta" dateTime="2015-06-12T20:50:48+08:00">5 hours ago</time>
            </div>
          </div>
          </a>
          <a className="list-group-item" href="javascript:void(0)" role="menuitem">
          <div className="media">
            <div className="media-left padding-right-10">
            <i className="icon wb-user bg-green-600 white icon-circle" aria-hidden="true"></i>
            </div>
            <div className="media-body">
            <h6 className="media-heading">Completed the task</h6>
            <time className="media-meta" dateTime="2015-06-11T18:29:20+08:00">2 days ago</time>
            </div>
          </div>
          </a>
          <a className="list-group-item" href="javascript:void(0)" role="menuitem">
          <div className="media">
            <div className="media-left padding-right-10">
            <i className="icon wb-settings bg-red-600 white icon-circle" aria-hidden="true"></i>
            </div>
            <div className="media-body">
            <h6 className="media-heading">Settings updated</h6>
            <time className="media-meta" dateTime="2015-06-11T14:05:00+08:00">2 days ago</time>
            </div>
          </div>
          </a>
          <a className="list-group-item" href="javascript:void(0)" role="menuitem">
          <div className="media">
            <div className="media-left padding-right-10">
            <i className="icon wb-calendar bg-blue-600 white icon-circle" aria-hidden="true"></i>
            </div>
            <div className="media-body">
            <h6 className="media-heading">Event started</h6>
            <time className="media-meta" dateTime="2015-06-10T13:50:18+08:00">3 days ago</time>
            </div>
          </div>
          </a>
          <a className="list-group-item" href="javascript:void(0)" role="menuitem">
          <div className="media">
            <div className="media-left padding-right-10">
            <i className="icon wb-chat bg-orange-600 white icon-circle" aria-hidden="true"></i>
            </div>
            <div className="media-body">
            <h6 className="media-heading">Message received</h6>
            <time className="media-meta" dateTime="2015-06-10T12:34:48+08:00">3 days ago</time>
            </div>
          </div>
          </a>
        </div>
        </div>
      </li>
    )
  }
}
NotifyWidget.propTypes = {
  time: PropTypes.string.isRequire,
  text: PropTypes.string.isRequire,
  icon: PropTypes.string.isRequire
}
export default NotifyWidget
