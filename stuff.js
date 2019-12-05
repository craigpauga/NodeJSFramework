var counter = function(arr){
    return "There are " + arr.length + " ninjas";
}; 

var adder = function(a,b){
    return 'The sum of the 2 numbers is ${a+b}';
};

var pi = 3.412;

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;