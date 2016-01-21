import React, {Component} from 'react'
import DashboardItem from 'components/Dashboard/dashboardItem'
import ProfileWidget from 'components/Dashboard/profileWidget'
import { History, Link } from 'react-router'
class OverView extends Component{
	constructor(props){
		super(props)
	}

	render() {
			return (
        	<div>
					 <div className="page-content container-fluid">
			      <div className="row">
			        <div className="col-md-3">
			          <div className="widget widget-shadow text-center">
			            <div className="widget-header">
										<br/>
			              <ProfileWidget avatar={this.props.user.avatar} job={this.props.user.organization} userName={this.props.user.name} bio="Super cool guy, that likes to code."/>
			            </div>
			          </div>
			        </div>
			        <div className="col-md-9">
			          <div className="panel">
			            <div className="panel-body nav-tabs-animate">
			              <ul className="nav nav-tabs nav-tabs-line" data-plugin="nav-tabs" role="tablist">
			                <li className="active" role="presentation"><a data-toggle="tab" href="#activities" aria-controls="activities"
			                  role="tab">Activities <span className="badge badge-danger">{this.props.acivityCount}</span></a></li>
			              </ul>

			              <div className="tab-content">
			                <div className="tab-pane active animation-slide-left" id="activities" role="tabpanel">
			                  <ul className="list-group">
			          					<DashboardItem avatar="http://files.parsetfss.com/fd04cac6-ed59-4388-88cb-2dfaa9fa4ab6/tfss-9e750919-9d66-498a-abcb-e2dbe44a88b6-me.jpg" status="Updated Project 1234" author="Jwoo" brief="Updated project to display cool stuff."/ >
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
