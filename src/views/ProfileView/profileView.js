import React, {Component} from 'react';

class ProfileView extends Component {
	render() {
		return (
			 <div className="page-content container-fluid">
      <div className="row" data-plugin="matchHeight" data-by-row="true">
        <div className="col-xlg-3 col-lg-4 col-md-12">
          <div className="widget widget-shadow">
            <div className="widget-content text-center bg-white padding-40">
              <div className="avatar avatar-100 margin-bottom-20">
                <img src="../../../global/portraits/1.jpg" alt=""/>
              </div>
              <p className="font-size-20 blue-grey-700">Breno Bitencourt</p>
              <p className="blue-grey-400 margin-bottom-20">Web Designer</p>
              <p className="margin-bottom-35">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                </p>
              <ul className="list-inline font-size-18 margin-bottom-35">
                <li>
                  <a className="blue-grey-400" href="javascript:void(0)">
                    <i className="icon bd-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="margin-left-10">
                  <a className="blue-grey-400" href="javascript:void(0)">
                    <i className="icon bd-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="margin-left-10">
                  <a className="blue-grey-400" href="javascript:void(0)">
                    <i className="icon bd-dribbble" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="margin-left-10">
                  <a className="blue-grey-400" href="javascript:void(0)">
                    <i className="icon bd-instagram" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
              <button type="button" className="btn btn-primary padding-horizontal-40">Follow</button>
            </div>
          </div>
        </div>

        <div className="col-xlg-6 col-lg-8 col-md-12">
          <div className="widget widget-shadow example-responsive" id="widgetLinearea">
            <div className="widget-content padding-30" >
              <div className="row padding-bottom-20" >
                <div className="col-sm-8 col-xs-6">
                  <div className="blue-grey-700">YOUR TRAFFIC VIEWS</div>
                </div>
                <div className="col-sm-4 col-xs-6">
                  <div className="row">
                    <div className="col-xs-6">
                      <div className="counter counter-md">
                        <div className="counter-number-group text-nowrap">
                          <span className="counter-number">76</span>
                          <span className="counter-number-related">%</span>
                        </div>
                        <div className="counter-label blue-grey-400">PC Browser</div>
                      </div>
                    </div>
                    <div className="col-xs-6">
                      <div className="counter counter-md">
                        <div className="counter-number-group text-nowrap">
                          <span className="counter-number">24</span>
                          <span className="counter-number-related">%</span>
                        </div>
                        <div className="counter-label blue-grey-400">Mobile Phone</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ct-chart margin-bottom-30" ></div>
              <ul className="list-inline text-center margin-bottom-0">
                <li>
                  <i className="icon wb-large-point blue-200 margin-right-10" aria-hidden="true"></i>                  PC BROWSER
                </li>
                <li className="margin-left-35">
                  <i className="icon wb-large-point teal-200 margin-right-10" aria-hidden="true"></i>                  MOBILE PHONE
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-xlg-3 col-md-12">
          <div className="row height-full">
            <div className="col-xlg-12 col-md-6" >
              <div className="widget widget-shadow bg-blue-600 white">
                <div className="widget-content padding-30">
                  <div className="counter counter-lg counter-inverse text-left">
                    <div className="counter-label margin-bottom-20">
                      <div>OVERALL SALES</div>
                      <div>Lorem ipsum dolor sit amet</div>
                    </div>
                    <div className="counter-number-group margin-bottom-15">
                      <span className="counter-number-related">$</span>
                      <span className="counter-number">14,000</span>
                    </div>
                    <div className="counter-label">
                      <div className="progress progress-xs margin-bottom-10 bg-blue-800">
                        <div className="progress-bar progress-bar-info bg-white"  aria-valuemax="100"
                        aria-valuemin="0" aria-valuenow="42" role="progressbar">
                          <span className="sr-only">42%</span>
                        </div>
                      </div>
                      <div className="counter counter-sm text-left">
                        <div className="counter-number-group">
                          <span className="counter-number font-size-14">42%</span>
                          <span className="counter-number-related font-size-14">HIGHER THAN LAST MONTH</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xlg-12 col-md-6" >
              <div className="widget widget-shadow bg-red-600 white">
                <div className="widget-content padding-30">
                  <div className="counter counter-lg counter-inverse text-left">
                    <div className="counter-label margin-bottom-20">
                      <div>TODAY'S SALES</div>
                      <div>Lorem ipsum dolor sit amet</div>
                    </div>
                    <div className="counter-number-group margin-bottom-10">
                      <span className="counter-number-related">$</span>
                      <span className="counter-number">41,160</span>
                    </div>
                    <div className="counter-label">
                      <div className="progress progress-xs margin-bottom-10 bg-red-800">
                        <div className="progress-bar progress-bar-info bg-white"  aria-valuemax="100"
                        aria-valuemin="0" aria-valuenow="70" role="progressbar">
                          <span className="sr-only">70%</span>
                        </div>
                      </div>
                      <div className="counter counter-sm text-left">
                        <div className="counter-number-group">
                          <span className="counter-number font-size-14">70%</span>
                          <span className="counter-number-related font-size-14">HIGHER THAN LAST MONTH</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row" data-plugin="matchHeight" data-by-row="true">
        <div className="col-lg-4 col-md-6">
          <div className="panel" id="followers">
            <div className="panel-heading">
              <h3 className="panel-title">
                Followers
              </h3>
            </div>
            <div className="panel-body">
              <ul className="list-group list-group-dividered list-group-full">
                <li className="list-group-item">
                  <div className="media">
                    <div className="media-left">
                      <a className="avatar avatar-online" href="javascript:void(0)">
                        <img src="../../../global/portraits/9.jpg" alt=""/>
                        <i></i>
                      </a>
                    </div>
                    <div className="media-body">
                      <div className="pull-right">
                        <button type="button" className="btn btn-outline btn-default btn-sm">Follow</button>
                      </div>
                      <div>
                        <span>Willard Wood</span>
                      </div>
                      <small>@heavybutterfly920</small>
                    </div>
                  </div>
                </li>

                <li className="list-group-item">
                  <div className="media">
                    <div className="media-left">
                      <a className="avatar avatar-away" href="javascript:void(0)">
                        <img src="../../../global/portraits/10.jpg" alt=""/>
                        <i></i>
                      </a>
                    </div>
                    <div className="media-body">
                      <div className="pull-right">
                        <button type="button" className="btn btn-success btn-default btn-sm"><i className="icon wb-check" aria-hidden="true"></i>Following</button>
                      </div>
                      <div>
                        <span>Ronnie Ellis</span>
                      </div>
                      <small>@kingronnie24</small>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="media">
                    <div className="media-left">
                      <a className="avatar avatar-busy" href="javascript:void(0)">
                        <img src="../../../global/portraits/11.jpg" alt=""/>
                        <i></i>
                      </a>
                    </div>
                    <div className="media-body">
                      <div className="pull-right">
                        <button type="button" className="btn btn-outline btn-default btn-sm">Follow</button>
                      </div>
                      <div>
                        <span>Gwendolyn Wheeler</span>
                      </div>
                      <small>@perttygirl66</small>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="media">
                    <div className="media-left">
                      <a className="avatar avatar-off" href="javascript:void(0)">
                        <img src="../../../global/portraits/12.jpg" alt=""/>
                        <i></i>
                      </a>
                    </div>
                    <div className="media-body">
                      <div className="pull-right">
                        <button type="button" className="btn btn-outline btn-default btn-sm">Follow</button>
                      </div>
                      <div>
                        <span>Daniel Russell</span>
                      </div>
                      <small>@danieltiger08</small>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="panel">
            <div className="panel-heading">
              <h3 className="panel-title">Tickets</h3>
            </div>
            <div className="panel-body">
              <ul className="list-group list-group-dividered list-group-full">
                <li className="list-group-item">
                  <small className="label label-round label-info pull-right">Completed</small>
                  <p>
                    <span>Server unavaible</span>
                    <span>[13060]</span>
                  </p>
                  <small>Opened by
                    <a className="hightlight" href="javascript:void(0)">
                      <span className="avatar avatar-xs">
                        <img src="../../../global/portraits/1.jpg" alt=""/>
                      </span>
                      <span>Herman Beck</span>
                    </a>
                    <time dateTime="2015-07-01T08:55">2 hours ago</time>
                  </small>
                </li>
                <li className="list-group-item">
                  <small className="label label-round label-warning pull-right">Pendening</small>
                  <p>
                    <span>Mobile App Problem</span>
                    <span>[13061]</span>
                  </p>
                  <small>Opened by
                    <a className="hightlight" href="javascript:void(0)">
                      <span className="avatar avatar-xs">
                        <img src="../../../global/portraits/2.jpg" alt=""/>
                      </span>
                      <span>Mary Adams</span>
                    </a>
                    <time dateTime="2015-07-01T07:55">1 hour ago</time>
                  </small>
                </li>
                <li className="list-group-item">
                  <small className="label label-round label-primary pull-right">In progress</small>
                  <p>
                    <span>IE8 problem</span>
                    <span>[13062]</span>
                  </p>
                  <small>Opened by
                    <a className="hightlight" href="javascript:void(0)">
                      <span className="avatar avatar-xs">
                        <img src="../../../global/portraits/3.jpg" alt=""/>
                      </span>
                      <span>Caleb Richards</span>
                    </a>
                    <time dateTime="2015-06-28T21:05">3 days ago</time>
                  </small>
                </li>
                <li className="list-group-item">
                  <small className="label label-round label-danger pull-right">Rejected</small>
                  <p>
                    <span>Respoonsive problem</span>
                    <span>[13063]</span>
                  </p>
                  <small>Opened by
                    <a className="hightlight" href="javascript:void(0)">
                      <span className="avatar avatar-xs">
                        <img src="../../../global/portraits/4.jpg" alt=""/>
                      </span>
                      <span>June Lane</span>
                    </a>
                    <time dateTime="2015-06-27T13:05">4 days ago</time>
                  </small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-12">
          <div className="widget widget-shadow" id="widgetGmap">
            <div className="map height-full" id="gmap"></div>
          </div>
        </div>
      </div>
    </div>
		);
	}
}

export default ProfileView;
