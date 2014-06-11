"use strict";

var Greeter = function() {
  var person = 'world';
  var greet = function() {
    console.log('Hello, ' + person);
  };
  greet.person = function() {
    if (arguments.length === 0) return person;
    person = arguments[0];
    return greet;
  };
  return greet;
};

var greet = Greeter().person('francois');
greet();
greet.person('jonathan');
greet();

