/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
const getFlags = arr => {
  // TODO: refactor
  let newArr = [];
  if(arr instanceof Array) {
    arr.map((value, index, array) => {
      newArr.push(...value.flags);
    })
  }

  return newArr;
};

export default getFlags;
