describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      expect(split([0, 1, 2, 3])).toEqual([[0, 1], [2, 3]])
    });
    it('is able to split an odd arrays into two halves', function() {
        expect(split([0, 1, 2, 3, 4])).toEqual([[0, 1], [2, 3, 4]])
      });
  });

  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      expect(merge([1], [2])).toEqual([1, 2])
    });
    it('is able to merge odd numbered arrays', function() {
        expect(merge([1, 2], [3])).toEqual([1, 2, 3])
    })
  });

  describe('mergeSort function', function() {
    it('sorts an array', function() {
          expect(mergeSort([3, 1, 4, 2])).toEqual([1, 2, 3, 4])
      })
    it('sorts an odd numbered array', function() {
        expect(mergeSort([1, 3, 2])).toEqual([1, 2, 3])
    })
    it('it handles duplicate numbers and negative numbers', function() {
      expect(mergeSort([1, 3, 2, -1, 5 , 7, 80, 99, 5, 6, 7])).toEqual([ -1, 1, 2, 3, 5, 5, 6, 7, 7, 80, 99])
  })
  })