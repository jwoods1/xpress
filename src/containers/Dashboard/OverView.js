import React from 'react'
import Rebase from 're-base'
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
              <div className="widget-header-content">
                <a className="avatar avatar-lg" href="javascript:void(0)">
                  <img src="../../../global/portraits/5.jpg" alt="..."/>
                </a>
                <h4 className="profile-user">Terrance arnold</h4>
                <p className="profile-job">Art director</p>
                <p>Hi! I'm Adrian the Senior UI Designer at AmazingSurge. We hope
                  you enjoy the design and quality of Social.</p>
                <div className="profile-social">
                  <a className="icon bd-twitter" href="javascript:void(0)"></a>
                  <a className="icon bd-facebook" href="javascript:void(0)"></a>
                  <a className="icon bd-dribbble" href="javascript:void(0)"></a>
                  <a className="icon bd-github" href="javascript:void(0)"></a>
                </div>
              </div>
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
                    <li className="list-group-item">
                      <div className="media">
                        <div className="media-left">
                          <a className="avatar" href="javascript:void(0)">
                            <img className="img-responsive" src="../../../global/portraits/2.jpg" alt="..." />
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">Ida Fleming
                            <span>posted an updated</span>
                          </h4>
                          <small>active 14 minutes ago</small>
                          <div className="profile-brief">“Check if it can be corrected with overflow : hidden”</div>
                        </div>
                      </div>
                    </li>

                    <li className="list-group-item">
                      <div className="media">
                        <div className="media-left">
                          <a className="avatar" href="javascript:void(0)">
                            <img className="img-responsive" src="../../../global/portraits/3.jpg" alt="..."/>
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">Julius
                            <span>uploaded 4 photos</span>
                          </h4>
                          <small>active 14 minutes ago</small>
                          <div className="profile-brief">
                            <img className="profile-uploaded" src="../../../global/photos/placeholder.png" alt="..."/>
                            <img className="profile-uploaded" src="../../../global/photos/placeholder.png" alt="..."/>
                            <img className="profile-uploaded" src="../../../global/photos/placeholder.png" alt="..."/>
                            <img className="profile-uploaded" src="../../../global/photos/placeholder.png" alt="..."/>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="list-group-item">
                      <div className="media">
                        <div className="media-left">
                          <a className="avatar" href="javascript:void(0)">
                            <img className="img-responsive" src="../../../global/portraits/4.jpg" alt="..."/>
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">Owen Hunt
                            <span>posted a new note</span>
                          </h4>
                          <small>active 14 minutes ago</small>
                          <div className="profile-brief">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer nec odio. Praesent libero. Sed cursus ante
                            dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                            imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce
                            nec tellus sed augue semper porta. Mauris massa.</div>
                        </div>
                      </div>
                    </li>

                    <li className="list-group-item">
                      <div className="media media-lg">
                        <div className="media-left">
                          <a className="avatar" href="javascript:void(0)">
                            <img className="img-responsive" src="../../../global/portraits/5.jpg" alt="..."/>
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">Terrance Arnold
                            <span>posted a new blog</span>
                          </h4>
                          <small>active 14 minutes ago</small>
                          <div className="profile-brief">
                            <div className="media">
                              <a className="media-left">
                                <img className="media-object" src="../../../global/photos/placeholder.png" alt="..."/>
                              </a>
                              <div className="media-body padding-left-20">
                                <h4 className="media-heading">Getting Started</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Integer nec odio. Praesent libero. Sed
                                  cursus ante dapibus diam. Sed nisi. Nulla quis
                                  sem at nibh elementum imperdiet. Duis sagittis
                                  ipsum. Praesent mauris.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="list-group-item">
                      <div className="media">
                        <div className="media-left">
                          <a className="avatar" href="javascript:void(0)">
                            <img className="img-responsive" src="../../../global/portraits/2.jpg" alt="..."/>
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">Ida Fleming
                            <span>posted an new activity comment</span>
                          </h4>
                          <small>active 14 minutes ago</small>
                          <div className="profile-brief">Cras sit amet nibh libero, in gravida nulla. Nulla vel
                            metus.</div>
                        </div>
                      </div>
                    </li>

                    <li className="list-group-item">
                      <div className="media">
                        <div className="media-left">
                          <a className="avatar" href="javascript:void(0)">
                            <img className="img-responsive" src="../../../global/portraits/3.jpg" alt="..."/>
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">Julius
                            <span>posted an updated</span>
                          </h4>
                          <small>active 14 minutes ago</small>
                          <div className="profile-brief">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer nec odio. Praesent libero. Sed cursus ante
                            dapibus diam.</div>
                        </div>
                      </div>
                    </li>
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
