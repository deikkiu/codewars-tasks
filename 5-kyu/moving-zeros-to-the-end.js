/* Write an algorithm that takes an array and moves all of the zeros to the end,
preserving the order of the other elements. */

// code

function moveZeros(arr) {
  let notZero = arr.filter((el) => el !== 0);
  let zeroEl = arr.filter((el) => el === 0);

  return notZero.concat(zeroEl);
}

console.log(
  moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a", true, null, undefined, "aaa"])
);
