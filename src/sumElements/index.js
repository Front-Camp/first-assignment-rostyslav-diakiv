/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
const sumElements = arr => {
let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!isFinite(arr[i]) || isNaN(arr[i])) {
      let num = parseInt(arr[i], 16);
      if(isNaN(num)){
        continue;
      } else {
        arr[i] = num;
      }
    }

    sum += Number(arr[i]);
  }

  return sum;
};

export default sumElements;
