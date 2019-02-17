// Sample functions to be tested

// Container object
awesomeFunctions = {};

// Simply return a number
awesomeFunctions.getANumber = function() {
  return 1;
};

// Hello in given language
awesomeFunctions.greeter = function(langauge = "") {
  langauge = langauge.toLowerCase();
  switch (langauge) {
    case "swedish":
      return "Hej!";
    case "french":
      return "bonjour";
    case "spanish":
      return "Hola!";
    default:
      return "Hello!";
  }
};

// A function that calls back

awesomeFunctions.callbackSomething = function(a, b, callback) {
  try {
    const val = adder(a, b);
    callback(val);
  } catch (e) {
    callback(e);
  }
};

// Helper for callbackSomething
const adder = function(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    const err = new Error("Mega error!");
    throw err;
  }
  return parseInt(a) + parseInt(b);
};

module.exports = awesomeFunctions;
