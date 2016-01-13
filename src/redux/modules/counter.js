
var Firebase = require('firebase');
var Ref = new Firebase('https://xpressdesign.firebaseio.com/');





// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_USER = 'UPDATE_USER'

// ------------------------------------
// Actions
// ------------------------------------
function updateUser(user){
  return{
    type:'UPDATE_USER',
    user : user
  }
}

export const loginUser = (user, pass) => {
  console.log(user);
    return Ref.authWithPassword({
      "email": user,
      "password": pass
    }, function(error, authData, dispatch) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        user => dispatch(updateUser(user));
        console.log("Authenticated successfully with payload:", authData);
      }
    });
}


export const actions = {
  loginUser,
  updateUser
}
var it = [];
// ------------------------------------
// Reducer
// ------------------------------------

export default function user(state = {}, action) {
  switch (action.type) {
    case UPDATE_USER:
      return Object.assign({}, state, {
        email: action.user
      })
    default:
      return state
  }
}
