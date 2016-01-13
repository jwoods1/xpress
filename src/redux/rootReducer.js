import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import auth from './modules/login'


export default combineReducers({
  auth,
  router
})
