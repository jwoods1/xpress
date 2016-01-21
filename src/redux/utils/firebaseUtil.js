import Firebase from 'firebase'
import Rebase from 're-base'
import  Parse  from 'parse'


export const Ref = new Firebase('https://xpressdesign.firebaseio.com/projects/');


export const base = Rebase.createClass('https://xpressdesign.firebaseio.com/');
Parse.initialize("ioE7VoxkOqu75bhOxg7NdDnk2mF8NW9CVVfZ42cy", "JEqfGJvRjQgO9CZYjONtdFACkXHDeEtSpK1lm20o");

export const parse = Parse;

Ref.on('child_changed', function(snapshot) {
  snapshot.ref().child("comments").on("child_changed", function(itemSnap){
    console.log(itemSnap.val());
  })
console.log(snapshot.val());
});
