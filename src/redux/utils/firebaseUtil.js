import Firebase from 'firebase'
import Rebase from 're-base'
export const Ref = new Firebase('https://xpressdesign.firebaseio.com/');


export const base = Rebase.createClass('https://xpressdesign.firebaseio.com/');
