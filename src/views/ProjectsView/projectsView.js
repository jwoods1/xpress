import React, {Component} from 'react';

class ProjectsView extends Component {
	render() {
		return (
	<div>
	<div>
    <div className="page-aside">
      <div className="page-aside-switch">
        <i className="icon wb-chevron-left" aria-hidden="true"></i>
        <i className="icon wb-chevron-right" aria-hidden="true"></i>
      </div>
      <div className="page-aside-inner">
        <section className="page-aside-section">
          <h5 className="page-aside-title">Project List</h5>
          <div className="list-group has-actions">
            <div className="list-group-item">
              <div className="list-content">
                <span className="item-right">10</span>
                <span className="list-text">Projects</span>
                <div className="item-actions">
                  <span className="btn btn-pure btn-icon" data-toggle="list-editable"><i className="icon wb-edit" aria-hidden="true"></i></span>
                  <span className="btn btn-pure btn-icon"><i className="icon wb-trash" aria-hidden="true"></i></span>
                </div>
              </div>
              <div className="list-editable">
                <div className="form-group form-material">
                  <input type="text" className="form-control empty" name="label" data-bind=".list-text"
                  value="Admin Calendar"/>
                  <button type="button" className="input-editable-close icon wb-close" data-toggle="list-editable-close"
                  aria-label="Close" aria-expanded="true"></button>
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="list-content">
                <span className="item-right">5</span>
                <span className="list-text">Projects</span>
                <div className="item-actions">
                  <span className="btn btn-pure btn-icon" data-toggle="list-editable"><i className="icon wb-edit" aria-hidden="true"></i></span>
                  <span className="btn btn-pure btn-icon"><i className="icon wb-trash" aria-hidden="true"></i></span>
                </div>
              </div>
              <div className="list-editable">
                <div className="form-group form-material">
                  <input type="text" className="form-control empty" name="label" data-bind=".list-text"
                  value="Home Calendar"/>
                  <button type="button" className="input-editable-close icon wb-close" data-toggle="list-editable-close"
                  aria-label="Close" aria-expanded="true"></button>
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="list-content">
                <span className="item-right">16</span>
                <span className="list-text">Work Calendar</span>
                <div className="item-actions">
                  <span className="btn btn-pure btn-icon" data-toggle="list-editable"><i className="icon wb-edit" aria-hidden="true"></i></span>
                  <span className="btn btn-pure btn-icon"><i className="icon wb-trash" aria-hidden="true"></i></span>
                </div>
              </div>
              <div className="list-editable">
                <div className="form-group form-material">
                  <input type="text" className="form-control empty" name="label" data-bind=".list-text"
                  value="Work Calendar"/>
                  <button type="button" className="input-editable-close icon wb-close" data-toggle="list-editable-close"
                  aria-label="Close" aria-expanded="true"></button>
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="list-content">
                <span className="item-right">30</span>
                <span className="list-text">Calendar One</span>
                <div className="item-actions">
                  <span className="btn btn-pure btn-icon" data-toggle="list-editable"><i className="icon wb-edit" aria-hidden="true"></i></span>
                  <span className="btn btn-pure btn-icon"><i className="icon wb-trash" aria-hidden="true"></i></span>
                </div>
              </div>
              <div className="list-editable">
                <div className="form-group form-material">
                  <input type="text" className="form-control empty" name="label" data-bind=".list-text"
                  value="Calendar One"/>
                  <button type="button" className="input-editable-close icon wb-close" data-toggle="list-editable-close"
                  aria-label="Close" aria-expanded="true"></button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="page-aside-section">
          <h5 className="page-aside-title">EVENTS</h5>
          <div className="list-group calendar-list">
            <a className="list-group-item calendar-event" data-title="Meeting" data-stick="true"
            data-color="red-600" href="javascript:void(0)">
              <i className="wb-medium-point red-600 margin-right-10" aria-hidden="true"></i>Meeting
            </a>
            <a className="list-group-item calendar-event" data-title="Birthday Party" data-stick="true"
            data-color="green-600" href="javascript:void(0)">
              <i className="wb-medium-point green-600 margin-right-10" aria-hidden="true"></i>Birthday
              Party
            </a>
            <a className="list-group-item calendar-event" data-title="Call Jimba" data-stick="true"
            data-color="orange-600" href="javascript:void(0)">
              <i className="wb-medium-point orange-600 margin-right-10" aria-hidden="true"></i>Call
              Jimba
            </a>
            <a className="list-group-item calendar-event" data-title="Dinner with Team" data-stick="true"
            data-color="cyan-600" href="javascript:void(0)">
              <i className="wb-medium-point cyan-600 margin-right-10" aria-hidden="true"></i>Dinner
              with Team
            </a>
            <a id="addNewEventBtn" className="list-group-item" href="javascript:void(0)"> <i className="icon wb-plus" aria-hidden="true"></i> Add New Event </a>
          </div>
        </section>

      </div>
    </div>
    <div className="page-main">
      <div className="page-header">
        <h1 className="page-title">Projects</h1>
      </div>
      <div className="page-content calendar-container padding-horizontal-30 container-fluid">
        <div className="panel">
          <div className="padding-30" id="calendar"></div>
        </div>

        <div className="modal fade" id="addNewEvent" aria-hidden="true" aria-labelledby="addNewEvent"
        role="dialog" tabindex="-1">
          <div className="modal-dialog">
            <form className="modal-content form-horizontal" action="#" method="post" role="form">
              <div className="modal-header">
                <button type="button" className="close" aria-hidden="true" data-dismiss="modal">×</button>
                <h4 className="modal-title">New Event</h4>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label className="col-sm-2 control-label" for="ename">Name:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="ename" name="ename"/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label" for="starts">Starts:</label>
                  <div className="col-sm-10">
                    <div className="input-group">
                      <input type="text" className="form-control" id="starts" data-container="#addNewEvent"
                      data-plugin="datepicker"/>
                      <span className="input-group-addon">
                        <i className="icon wb-calendar" aria-hidden="true"></i>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-2 control-label" for="ends">Ends:</label>
                  <div className="col-sm-10">
                    <div className="input-group">
                      <input type="text" className="form-control" id="ends" data-container="#addNewEvent"
                      data-plugin="datepicker"/>
                      <span className="input-group-addon">
                        <i className="icon wb-calendar" aria-hidden="true"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label" for="repeats">Repeats:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="repeats" name="repeats" data-plugin="TouchSpin"
                    data-min="0" data-max="10" value="0" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">Color:</label>
                  <div className="col-sm-10">
                    <ul className="color-selector">
                      <li className="bg-blue-600">
                        <input type="radio" checked name="colorChosen" id="colorChosen2"/>
                        <label for="colorChosen2"></label>
                      </li>
                      <li className="bg-green-600">
                        <input type="radio" name="colorChosen" id="colorChosen3"/>
                        <label for="colorChosen3"></label>
                      </li>
                      <li className="bg-cyan-600">
                        <input type="radio" name="colorChosen" id="colorChosen4"/>
                        <label for="colorChosen4"></label>
                      </li>
                      <li className="bg-orange-600">
                        <input type="radio" name="colorChosen" id="colorChosen5"/>
                        <label for="colorChosen5"></label>
                      </li>
                      <li className="bg-red-600">
                        <input type="radio" name="colorChosen" id="colorChosen6"/>
                        <label for="colorChosen6"></label>
                      </li>
                      <li className="bg-blue-grey-600">
                        <input type="radio" name="colorChosen" id="colorChosen7"/>
                        <label for="colorChosen7"></label>
                      </li>
                      <li className="bg-purple-600">
                        <input type="radio" name="colorChosen" id="colorChosen8"/>
                        <label for="colorChosen8"></label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label" for="people">People:</label>
                  <div className="col-sm-10">
                    <select id="people" multiple="multiple" data-plugin="jquery-selective"></select>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="form-actions">
                  <button className="btn btn-primary" data-dismiss="modal" type="button">Add this event</button>
                  <a className="btn btn-sm btn-white" data-dismiss="modal" href="javascript:void(0)">Cancel</a>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="modal fade" id="editNewEvent" aria-hidden="true" aria-labelledby="editNewEvent"
        role="dialog" tabindex="-1" data-show="false">
          <div className="modal-dialog">
            <form className="modal-content form-horizontal" action="#" method="post" role="form">
              <div className="modal-header">
                <button type="button" className="close" aria-hidden="true" data-dismiss="modal">×</button>
                <h4 className="modal-title">Edit Event</h4>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label className="col-sm-2 control-label" for="editEname">Name:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="editEname" name="editEname"/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label" for="editStarts">Starts:</label>
                  <div className="col-sm-10">
                    <div className="input-group">
                      <input type="text" className="form-control" id="editStarts" name="editStarts" data-container="#editNewEvent"
                      data-plugin="datepicker"/>
                      <span className="input-group-addon">
                        <i className="icon wb-calendar" aria-hidden="true"></i>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-2 control-label" for="editEnds">Ends:</label>
                  <div className="col-sm-10">
                    <div className="input-group">
                      <input type="text" className="form-control" id="editEnds" data-container="#editNewEvent"
                      data-plugin="datepicker"/>
                      <span className="input-group-addon">
                        <i className="icon wb-calendar" aria-hidden="true"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label" for="editRepeats">Repeats:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="editRepeats" name="repeats" data-plugin="TouchSpin"
                    data-min="0" data-max="10" value="0" />
                  </div>
                </div>
                <div className="form-group" id="editColor">
                  <label className="control-label col-sm-2">Color:</label>
                  <div className="col-sm-10">
                    <ul className="color-selector">
                      <li className="bg-blue-600">
                        <input type="radio" data-color="blue|600" name="colorChosen" id="editColorChosen2"/>
                        <label for="editColorChosen2"></label>
                      </li>
                      <li className="bg-green-600">
                        <input type="radio" data-color="green|600" name="colorChosen" id="editColorChosen3"/>
                        <label for="editColorChosen3"></label>
                      </li>
                      <li className="bg-cyan-600">
                        <input type="radio" data-color="cyan|600" name="colorChosen" id="editColorChosen4"/>
                        <label for="editColorChosen4"></label>
                      </li>
                      <li className="bg-orange-600">
                        <input type="radio" data-color="orange|600" name="colorChosen" id="editColorChosen5"/>
                        <label for="editColorChosen4"></label>
                      </li>
                      <li className="bg-red-600">
                        <input type="radio" data-color="red|600" name="colorChosen" id="editColorChosen6"/>
                        <label for="editColorChosen6"></label>
                      </li>
                      <li className="bg-blue-grey-600">
                        <input type="radio" data-color="blue-grey|600" name="colorChosen" id="editColorChosen7"/>
                        <label for="editColorChosen7"></label>
                      </li>
                      <li className="bg-purple-600">
                        <input type="radio" data-color="purple|600" name="colorChosen" id="editColorChosen8"/>
                        <label for="editColorChosen8"></label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label" for="editPeople">People:</label>
                  <div className="col-sm-10">
                    <select id="editPeople" multiple="multiple" data-plugin="jquery-selective"></select>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="form-actions">
                  <button className="btn btn-primary" data-dismiss="modal" type="button">Save</button>
                  <button className="btn btn-danger" data-dismiss="modal" type="button">Delete</button>
                  <a className="btn btn-sm btn-white" data-dismiss="modal" href="javascript:void(0)">Cancel</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="addNewCalendarForm" aria-hidden="true" aria-labelledby="addNewCalendarForm"
  role="dialog" tabindex="-1">
    <div className="modal-dialog">
      <form className="modal-content" action="#" method="post" role="form">
        <div className="modal-header">
          <button type="button" className="close" aria-hidden="true" data-dismiss="modal">×</button>
          <h4 className="modal-title">Create New Calendar</h4>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label className="control-label margin-bottom-15" for="name">Calendar name:</label>
            <input type="text" className="form-control" id="name" name="name" placeholder="Calendar name"/>
          </div>
          <div className="form-group">
            <label className="control-label margin-bottom-15" for="name">Choice people to your project:</label>
            <select multiple="multiple" data-plugin="jquery-selective"></select>
          </div>
        </div>
        <div className="modal-footer">
          <div className="form-actions">
            <button className="btn btn-primary" data-dismiss="modal" type="button">Create</button>
            <a className="btn btn-sm btn-white" data-dismiss="modal" href="javascript:void(0)">Cancel</a>
          </div>
        </div>
      </form>
    </div>
  </div>
 </div>
		);
	}
}

export default ProjectsView;
