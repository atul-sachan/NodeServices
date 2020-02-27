var _ = require('lodash');

module.exports = function(callback, arr, chunk){
    callback(null,_.chunk(arr, chunk));
}
console.log(_.chunk([1,2,3,4,5,6],2));