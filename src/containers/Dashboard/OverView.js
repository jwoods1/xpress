import React from 'react'
import Rebase from 're-base'
import DashboardItem from 'components/Dashboard/dashboardItem'
import ProfileWidget from 'components/Dashboard/profileWidget'
import { History, Link } from 'react-router'

var base = Rebase.createClass('https://xpressdesign.firebaseio.com/');
const OverView = React.createClass({
	render() {
			return (
        	<div>
			 <div className="page-content container-fluid">
      <div className="row">
        <div className="col-md-3">
          <div className="widget widget-shadow text-center">
            <div className="widget-header">
              <ProfileWidget avatar="http://placehold.it/150x150" job="Developer / Boss" userName="Jason Woods" bio="Super cool guy, that likes to code."/>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="panel">
            <div className="panel-body nav-tabs-animate">
              <ul className="nav nav-tabs nav-tabs-line" data-plugin="nav-tabs" role="tablist">
                <li className="active" role="presentation"><a data-toggle="tab" href="#activities" aria-controls="activities"
                  role="tab">Activities <span className="badge badge-danger">5</span></a></li>
              </ul>

              <div className="tab-content">
                <div className="tab-pane active animation-slide-left" id="activities" role="tabpanel">
                  <ul className="list-group">
          					<DashboardItem avatar="http://placehold.it/150x150" status="Updated Project 1234" author="Jwoo" brief="Updated project to display cool stuff."/ >
                  </ul>
                  <a className="btn btn-block btn-default profile-readMore" href="javascript:void(0)"
                  role="button">Show more</a>
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
});

export default OverView
