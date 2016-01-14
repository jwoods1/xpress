import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import authInfo from './modules/login'


export default combineReducers({
  authInfo,
  router
})
