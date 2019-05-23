// // const { bubbleSort, swap } = require('../bubblesort')

// // const bubbleSort = require('../bubblesort');
// describe('Bubble Sort', function() {
//   const bubbleSpy = {};
//   beforeAll(function() {
//     bubbleSpy.swap = swap;
//     spyOn(bubbleSpy, 'swap').and.callThrough();
//   });

//   it('handles an empty array', function() {
//     // console.log(bubbleSpy.swap(0, 1, [2, 1]));
//     expect(bubbleSort([])).toEqual([]);
//     expect(bubbleSpy.swap.calls.count()).toEqual(0);
//     // expect(bubbleSpy.swap.callCount).toEqual(0);
//   });

//   it('handles an array of one', function() {
//     expect(bubbleSort([1])).toEqual([1]);
//     expect(bubbleSpy.swap.calls.count()).toEqual(0);
//     // expect(bubbleSpy.swap.callCount).toEqual(0);
//   });

//   it('properly sorts the array of two', function() {
//     expect(bubbleSort([5, 1])).toEqual([1, 5]);
//     expect(bubbleSpy.swap.calls.count()).toEqual(1);
//     // expect(bubbleSpy.swap.callCount).toEqual(1);
//   });

//   it('properly sorts an array of multiple', function() {
//     expect(bubbleSort([5, 1, -1])).toEqual([-1, 1, 5]);
//     expect(bubbleSpy.swap.calls.count()).toEqual(3);
//     // expect(bubbleSpy.swap.callCount).toEqual(3);
//   });

//   it('properly sorts an array of multiple', function() {
//     expect(bubbleSort([5, 1, -1, 10, 9])).toEqual([-1, 1, 5, 9, 10]);
//   });
// });
