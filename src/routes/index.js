import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import HomeLayout from 'layouts/CoreLayout/HomeLayout'
import LoginLayout from 'layouts/CoreLayout/LoginLayout'
import DashboardLayout from 'layouts/CoreLayout/DashboardLayout'
import HomeView from 'views/HomeView/HomeView'
import LoginView from 'views/LoginView/loginView'
import DashboardView from 'views/DashboardView/dashboardView'
import ProfileView from 'views/ProfileView/ProfileView'
import ProjectsView from 'views/ProjectsView/ProjectsView'
import AccountsView from 'views/AccountsView/AccountsView'
import DocumentsView from 'views/DocumentsView/DocumentsView'
import TaskBoardView from 'views/TaskBoardView/TaskBoardView'
import NotFoundView from 'views/NotFoundView/NotFoundView'
import ProjectDetailsView from 'views/ProjectsView/projectDetailsView'

export default (
  <Route component={CoreLayout}>
    <Route path='/' component={HomeLayout} >
      <IndexRoute component={HomeView} />
    </Route>
    <Route path='/login' component={LoginLayout} >
      <IndexRoute component={LoginView} />
    </Route>
    <Route path='/dashboard' component={DashboardLayout}>
      <IndexRoute component={DashboardView} />
      <Route path='/taskboard' component={TaskBoardView} />
      <Route path='/profile' component={ProfileView} />
      <Route path='/projects' component={ProjectsView} />
      <Route path='/projects/:projectId' component={ProjectDetailsView} />
      <Route path='/accounts' component={AccountsView} />
      <Route path='/documents' component={DocumentsView} />
    </Route>
    <Route path='/404' component={NotFoundView} />
    <Redirect from='*' to='/404' />
  </Route>
)
