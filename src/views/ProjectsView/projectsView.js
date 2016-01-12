import React, {Component} from 'react';

class ProjectsView extends Component {
	render() {
		return (
	<div>
		<div>
	    <div className="page-header">
	      <h1 className="page-title">Projects</h1>
	      <div className="page-header-actions">
	        <form>
	          <div className="input-search">
	            <i className="input-search-icon wb-search" aria-hidden="true"></i>
	            <input type="text" className="form-control" name="" placeholder="Search..." />
	          </div>
	        </form>
	      </div>
	    </div>
	    <div className="page-content">
	      <div className="projects-sort">
	        <span className="projects-sort-label">Sorted by : </span>
	        <div className="inline-block dropdown">
	          <span className="dropdown-toggle" id="projects-menu" data-toggle="dropdown" aria-expanded="false"
	          role="button">
	            Dropdown
	            <i className="icon wb-chevron-down-mini" aria-hidden="true"></i>
	          </span>
	          <ul className="dropdown-menu animation-scale-up animation-top-left animation-duration-250"
	          aria-labelledby="projects-menu" role="menu">
	            <li role="presentation">
	              <a href="javascript:void(0)" role="menuitem" tabindex="-1">Sort One</a>
	            </li>
	            <li className="active" role="presentation">
	              <a href="javascript:void(0)" role="menuitem" tabindex="-1">Sort Two</a>
	            </li>
	            <li role="presentation">
	              <a href="javascript:void(0)" role="menuitem" tabindex="-1">Sort Three</a>
	            </li>
	          </ul>
	        </div>
	      </div>
	      <div className="projects-wrap">
	        <ul className="blocks blocks-100 blocks-xlg-5 blocks-md-4 blocks-sm-3 blocks-xs-2"
	        data-plugin="animateList" data-child=">li">
	          <li>
	            <div className="panel">
	              <figure className="overlay overlay-hover animation-hover">
	                <img className="caption-figure" src="http://placehold.it/140x100" />
	                <figcaption className="overlay-panel overlay-background overlay-fade text-center vertical-align">
	                  <div className="btn-group">
	                    <div className="dropdown pull-left">
	                      <button type="button" className="btn btn-icon btn-pure btn-default dropdown-toggle"
	                      title="Setting"><i className="icon wb-settings" aria-hidden="true"></i></button>
	                      <ul className="dropdown-menu" role="menu">
	                        <li><a href="">Copy</a></li>
	                        <li><a href="">Rename</a></li>
	                      </ul>
	                    </div>
	                    <button type="button" className="btn btn-icon btn-pure btn-default" title="Delete"
	                    data-tag="project-delete"><i className="icon wb-trash" aria-hidden="true"></i></button>
	                  </div>
	                  <button type="button" className="btn btn-outline btn-default project-button">View Project</button>
	                </figcaption>
	              </figure>
	              <div className="time pull-right">Feb 22, 2015</div>
	              <div className="text-truncate">Lorem ipsum</div>
	            </div>
	          </li>
						<li>
	            <div className="panel">
	              <figure className="overlay overlay-hover animation-hover">
	                <img className="caption-figure" src="http://placehold.it/140x100" />
	                <figcaption className="overlay-panel overlay-background overlay-fade text-center vertical-align">
	                  <div className="btn-group">
	                    <div className="dropdown pull-left">
	                      <button type="button" className="btn btn-icon btn-pure btn-default dropdown-toggle"
	                      title="Setting"><i className="icon wb-settings" aria-hidden="true"></i></button>
	                      <ul className="dropdown-menu" role="menu">
	                        <li><a href="">Copy</a></li>
	                        <li><a href="">Rename</a></li>
	                      </ul>
	                    </div>
	                    <button type="button" className="btn btn-icon btn-pure btn-default" title="Delete"
	                    data-tag="project-delete"><i className="icon wb-trash" aria-hidden="true"></i></button>
	                  </div>
	                  <button type="button" className="btn btn-outline btn-default project-button">View Project</button>
	                </figcaption>
	              </figure>
	              <div className="time pull-right">Feb 22, 2015</div>
	              <div className="text-truncate">Lorem ipsum</div>
	            </div>
	          </li>
	        </ul>
	      </div>

	      <nav>
	        <ul className="pagination pagination-no-border">
	          <li className="disabled">
	            <a href="javascript:void(0)" aria-label="Previous">
	              <span aria-hidden="true">&laquo;</span>
	            </a>
	          </li>
	          <li className="active"><a href="javascript:void(0)">1 <span className="sr-only">(current)</span></a></li>
	          <li><a href="javascript:void(0)">2</a></li>
	          <li><a href="javascript:void(0)">3</a></li>
	          <li><a href="javascript:void(0)">4</a></li>
	          <li><a href="javascript:void(0)">5</a></li>
	          <li>
	            <a href="javascript:void(0)" aria-label="Next">
	              <span aria-hidden="true">&raquo;</span>
	            </a>
	          </li>
	        </ul>
	      </nav>
	    </div>
	  </div>


	  <button className="site-action btn-raised btn btn-success btn-floating" data-target="#addProjectForm"
	  data-toggle="modal" type="button">
	    <i className="icon wb-plus" aria-hidden="true"></i>
	  </button>

	  <div className="modal fade" id="addProjectForm" aria-hidden="true" aria-labelledby="addProjectForm"
	  role="dialog" tabindex="-1">
	    <div className="modal-dialog">
	      <div className="modal-content">
	        <div className="modal-header">
	          <button type="button" className="close" aria-hidden="true" data-dismiss="modal">×</button>
	          <h4 className="modal-title">Create New Project</h4>
	        </div>
	        <div className="modal-body">
	          <form action="#" method="post" role="form">
	            <div className="form-group">
	              <label className="control-label margin-bottom-15" for="name">Project name:</label>
	              <input type="text" className="form-control" id="name" name="name" placeholder="Project name" />
	            </div>
	            <div className="form-group">
	              <label className="control-label margin-bottom-15" for="name">Project description:</label>
	              <textarea className="maxlength-textarea form-control mb-sm" placeholder="Project description."
	              rows="4" maxlength="225" data-plugin="maxlength"></textarea>
	            </div>
	            <div className="form-group">
	              <label className="control-label margin-bottom-15" for="name">Choice people to your project:</label>
	              <select multiple="multiple" data-plugin="jquery-selective"></select>
	            </div>
	          </form>
	        </div>
	        <div className="modal-footer text-right">
	          <button className="btn btn-primary" data-dismiss="modal" type="button">Creat</button>
	          <a className="btn btn-sm btn-white" data-dismiss="modal" href="javascript:void(0)">Cancel</a>
	        </div>
	      </div>
	    </div>
	  </div>
 </div>
		);
	}
}

export default ProjectsView;
