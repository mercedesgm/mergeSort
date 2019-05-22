const swap = (a, b, arr) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
};

const bubbleSort = arr => {
  let sorted = false;
  let counter = 1;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - counter; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(i, i + 1, arr);
        sorted = false;
      }
    }
    counter++;
  }
  return arr;
};

const bubbleSortWithCallback = (arr, comparatorFunc) => {
  if (comparatorFunc === undefined) {
    let sorted = false;
    let counter = 1;
    while (!sorted) {
      sorted = true;
      for (let i = 0; i < arr.length - counter; i++) {
        if (arr[i] > arr[i + 1]) {
          swap(i, i + 1, arr);
          sorted = false;
        }
      }
      counter++;
    }
    return arr;
  } else {
    let sorted = false;
    let counter = 1;
    while (!sorted) {
      sorted = true;
      for (let i = 0; i < arr.length - counter; i++) {
        if (comparatorFunc(arr[i], arr[i + 1]) > 0) {
          swap(i, i + 1, arr);
          sorted = false;
        }
      }
      counter++;
    }
    return arr;
  }
};
// console.log(bubbleSort([1]));

// console.log(bubbleSort([2, 1]));

console.log(bubbleSortWithCallback([5, 1, -1, 10, 9], (a, b) => a - b));

// module.exports = bubbleSort;

// module.exports = { bubbleSort, swap };
