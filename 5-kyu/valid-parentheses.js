/* Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
The function should return true if the string is valid, and false if it's invalid. */

function validParentheses(parens) {
  // your code here ..
  let result = [];

  for (const letter of parens) {
    if (letter === "(") result.push(letter);
    if (letter === ")") {
      if (!result.pop()) return false;
    }
  }

  return result.length === 0;
}
