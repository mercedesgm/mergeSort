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

console.log(bubbleSort([1]));

console.log(bubbleSort([2, 1]));

console.log(bubbleSort([5, 1, -1, 10, 9]));

// module.exports = bubbleSort;
