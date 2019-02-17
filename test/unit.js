/*
 * Unit tests
 *
 */

// Dependencies
const awesomeFunctions = require("../app/lib");
const assert = require("assert");

const unit = {};

unit["helpers.getANumber should return number"] = function(done) {
  const val = awesomeFunctions.getANumber();
  assert.equal(typeof val, "number");
  done();
};

// Assert that the getANumber function returns 1

unit["helpers.getANumber should return 1"] = function(done) {
  const val = awesomeFunctions.getANumber();
  assert.equal(val, 1);
  done();
};

// Assert that the getANumber function is not returning 2
unit["helpers.getANumber should not return 2"] = function(done) {
  const val = awesomeFunctions.getANumber();
  assert.notEqual(val, 2);
  done();
};

module.exports = unit;
