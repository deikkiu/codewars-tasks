function withoutRepeat(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    let count = 0;

    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        count++;
      }
    }

    if (count === 1) result.push(array[i]);
  }

  return result;
}

console.log(withoutRepeat([1, 2, 3, 3, 3]));

const linearWithoutrepeat = (arr) => {
  const result = [];
  const dis = {};

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    dis[item] = dis[item] ? dis[item] + 1 : 1;
  }

  return Object.keys(dis).filter((item) => dis[item] === 1);
};

console.log(linearWithoutrepeat([1, 2, 3, 3, 3]));
