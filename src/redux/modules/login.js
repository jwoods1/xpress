//import {dispatch} from 'redux'
import {Ref} from '../utils/firebaseUtil'
import { pushPath } from 'redux-simple-router'




// ------------------------------------
// Constants
// ------------------------------------
export const GET_USER = 'GET_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_ERROR = 'LOGIN_ERROR'


// ------------------------------------
// Actions
// ------------------------------------
function loginUser(user, auth, error){
  return{
    type:'LOGIN_USER',
    user : user,
    auth: auth,
    error: error
  }
}

function getUser(user){
  return{
    type:'GET_USER',
    user : user
  }
}
function loginError(error){
  return{
    type:'LOGIN_ERROR',
    error
  }
}

function authUser(user, pass){
    return function (dispatch) {
      return Ref.authWithPassword({
       "email": user,
       "password": pass
     }, function(error, authData) {
       if (error) {
         return  dispatch({
               type: 'LOGIN_ERROR',
               error: "Incorrect password or username"
           })
       } else {
          return  dispatch({
                type: 'LOGIN_USER',
                user: authData,
                auth: true,
                error
            })
       }
     });
    }
}

export const actions = {
  loginUser,
  getUser,
  authUser,
  loginError,
  pushPath
}
// ------------------------------------
// Reducer
// ------------------------------------
 export const initialStat = {
   user: {},
   auth: false,
   error: null
 }
export default function user(state = initialStat, action) {
  switch (action.type) {
    case LOGIN_USER:
      return Object.assign({}, state, {
        user: action.user,
        auth: action.auth,
        error: action.error
      })
    case GET_USER:
      return Object.assign({}, state, {
        user: action.user
      })
      case LOGIN_ERROR:
        return Object.assign({}, state, {
          error: action.error
        })
    default:
      return state
  }
}
