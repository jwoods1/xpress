import { createAction, handleActions } from 'redux-actions'
import Rebase from 're-base'
const base = Rebase.createClass('https://xpressdesign.firebaseio.com/');
// ------------------------------------
// Constants
// ------------------------------------
const auth = () => {return base.getAuth();}
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
//this.ref = base.authWithPassword({
//		email    : this.refs.email.value,
//	password : this.refs.password.value
//	}, this.authHandler);
// ------------------------------------
// Actions
// ------------------------------------
export const increment = createAction(COUNTER_INCREMENT, (payload) => payload)

// This is a thunk, meaning it is a function that immediately
// returns a function for lazy evaluation. It is incredibly useful for
// creating async actions, especially when combined with redux-thunk!
// NOTE: This is solely for demonstration purposes. In a real application,
// you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
// reducer take care of this logic.
export const doubleAsync = () => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(increment(getState().counter))
    }, 1000)
  }
}
export const actions = {
  increment,
  doubleAsync
}
var it = [];
// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [COUNTER_INCREMENT]: (state, { payload }) => ({state + payload})
}, 1)
