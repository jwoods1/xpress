import Firebase from 'firebase'
import Rebase from 're-base'
import  Parse  from 'parse'


export const Ref = new Firebase('https://xpressdesign.firebaseio.com/');


export const base = Rebase.createClass('https://xpressdesign.firebaseio.com/');
Parse.initialize("ioE7VoxkOqu75bhOxg7NdDnk2mF8NW9CVVfZ42cy", "JEqfGJvRjQgO9CZYjONtdFACkXHDeEtSpK1lm20o");

export const parse = Parse;
