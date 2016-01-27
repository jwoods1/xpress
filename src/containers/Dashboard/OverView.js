import React, {Component} from 'react'
import DashboardItem from 'components/Dashboard/dashboardItem'
import ProfileWidget from 'components/Dashboard/profileWidget'
import { History, Link } from 'react-router'
class OverView extends Component{
	constructor(props){
		super(props)
	}

	render() {
		let count = this.props.activities.length;
			return (
        	<div>
					 <div className="page-content container-fluid">
			      <div className="row">
			        <div className="col-md-3">
			          <div className="widget widget-shadow text-center">
			            <div className="widget-header">
										<br/>
			              <ProfileWidget avatar={this.props.user.avatar} job={this.props.user.organization} userName={this.props.user.name} bio={this.props.user.bio}/>
			            </div>
			          </div>
			        </div>
			        <div className="col-md-9">
			          <div className="panel">
			            <div className="panel-body nav-tabs-animate">
			              <ul className="nav nav-tabs nav-tabs-line" data-plugin="nav-tabs" role="tablist">
			                <li className="active" role="presentation"><a data-toggle="tab" href="#activities" aria-controls="activities"
			                  role="tab">Activities <span className="badge badge-danger">{count}</span></a></li>
			              </ul>

			              <div className="tab-content">
			                <div className="tab-pane active animation-slide-left" id="activities" role="tabpanel">
			                  <ul className="list-group">
													{
														this.props.activities.reverse().map((item,index) => {
															return <DashboardItem item={item}/ >
														})
													}
			                  </ul>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			</div>

			)
		}
};

export default OverView
