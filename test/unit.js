/*
 * Unit tests
 *
 */

// Dependencies
const awesomeFunctions = require("../app/lib");
const assert = require("assert");

const unit = {};

// --- GetANumber function ---
unit["awesomeFunctions.getANumber should return number"] = function(done) {
  const val = awesomeFunctions.getANumber();
  assert.equal(typeof val, "number");
  done();
};

unit["awesomeFunctions.getANumber should return 1"] = function(done) {
  const val = awesomeFunctions.getANumber();
  assert.equal(val, 1);
  done();
};

unit["awesomeFunctions.getANumber should not return 2"] = function(done) {
  const val = awesomeFunctions.getANumber();
  assert.notEqual(val, 2);
  done();
};

// --- Greeter function ---
unit["awesomeFunctions.greeter should return something"] = function(done) {
  const res = awesomeFunctions.greeter();
  assert.ok(res);
  done();
};

unit["awesomeFunctions.greeter should return 'Hej!' when called with 'swedish' as parameter"] = function(done) {
  const res = awesomeFunctions.greeter("swedish");
  assert.equal(res, "Hej!");
  done();
};

unit["awesomeFunctions.greeter response should be a string"] = function(done) {
  const res = awesomeFunctions.greeter("swedish");
  assert.equal(typeof res, "string");
  done();
};

unit["awesomeFunctions.greeter should return 'Hello!' when called without a parameter"] = function(done) {
  const res = awesomeFunctions.greeter();
  assert.equal(res, "Hello!");
  done();
};

module.exports = unit;
