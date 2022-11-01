// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// code

function generateHashtag(str) {
  if (str.trim() === "") {
    return false;
  }

  const secStr = str.toLowerCase().replace(/^\w|\s\w/g, function (letter) {
    return letter.toUpperCase();
  });

  const arr = secStr.split(" ").filter((n) => n);
  const newStr = arr.join("");

  if (newStr.indexOf("#") > -1) {
    return false;
  }

  const firStr = newStr.replace(/^/, "#");

  if (newStr.length < 140) {
    return firStr;
  } else {
    return false;
  }
}

console.log(generateHashtag("hello,    world"));
