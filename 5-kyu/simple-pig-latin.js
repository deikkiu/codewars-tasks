/* Move the first letter of each word to the end of it, then add "ay" to the end of the word.
Leave punctuation marks untouched. */

function pigIt(str) {
  const arr = str.split(" ");
  return arr
    .map((word) => {
      return word.match(/[A-z]/i)
        ? `${word.substr(1)}${word.substr(0, 1)}ay`
        : word;
    })
    .join(" ");
}

/* console.log(pigIt("Hello world !"));

function pigIt(str) {
  const strTr = str.trim();
  const arr = strTr.split(" ");
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length !== 1)
      result += `${arr[i].substring(1)}${arr[i].substring(0, 1)}ay `;
    else result += `${arr[i]} `;
  }

  return result.trim();
}

console.log(pigIt("Pig , latin is cool !"));
 */
