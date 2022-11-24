/* The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers */

const maxSequence = (arr) => {
  let bestSum = 0;
  let currentSum = 0;

  for (let x of arr) {
    currentSum = Math.max(0, currentSum + x);
    bestSum = Math.max(bestSum, currentSum);
  }

  return bestSum;
};
