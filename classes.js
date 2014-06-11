"use strict";

var Greeter = function(options) {
  this.person = options && options.person || 'world';
};
Greeter.prototype.greet = function() {
  console.log('Hello, ' + this.person);
};
Greeter.prototype.setPerson = function(person) {
  this.person = person;
};
Greeter.prototype.getPerson = function() {
  return this.person;
};

var greeter = new Greeter({ person: 'francois' });
greeter.greet();
greeter.setPerson('jonathan');
greeter.greet();

