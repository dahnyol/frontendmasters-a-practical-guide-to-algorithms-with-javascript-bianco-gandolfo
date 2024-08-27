const uniqSort = require('./uniqueSort-exercise').uniqSort;

const longArrayToSort = [4,2,2,3,2,2,2,4];
const shortArrayToSort = [1,5,2,1];

describe('Unique Sort', () => {
  describe('Task 1', () => {
    it('Should return a uniquely sorted array', () => {
      expect(uniqSort(longArrayToSort)).toEqual([2,3,4]);
    });
  });
  describe('Task 2', () => {
    it('should return a uniqely sorted array with another array', () => {
      expect(uniqSort(shortArrayToSort)).toEqual([1,2,5]);
    });
  });
});