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

module.exports = awesomeFunctions;
