import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import user from './modules/counter'


console.log(user);
export default combineReducers({
  user,
  router
})
