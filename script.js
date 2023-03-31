var shoutIt = function (name) {
  var shout = `Hello, ${name}, nice to meet you!`.toUpperCase();
  return shout;
};
console.log(shoutIt("Eric"));

// multiply

var multiply = function (num1, num2) {
  if (typeof num1 !== "number") {
    return `user numbers only`;
  } else if (typeof num2 !== "number") {
    return `please provide two numbers only`;
  } else {
    var total = num1 * num2;
    return total;
  }
};

console.log(multiply(2, "s"));
