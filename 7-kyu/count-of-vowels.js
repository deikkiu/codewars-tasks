// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  const myArray = ["a", "e", "i", "o", "u"];
  const newArray = str.split("");
  let resultArray = "";

  for (let i = 0; i < newArray.length; i++) {
    for (let a = 0; a < myArray.length; a++) {
      if (newArray[i] === myArray[a]) {
        resultArray += newArray[i];
      }
    }
  }
  return resultArray;
}

console.log(getCount("abracafsdfsfreuirgcv c effe efvd iii o oodabra"));
