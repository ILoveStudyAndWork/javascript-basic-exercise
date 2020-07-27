export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array === undefined) {
    throw 'Flatten undefined or null array';
  }
  if (array === null) {
    throw 'Flatten undefined or null array';
  }
  if (array.length === 0) {
    return [];
  }
  //递归
  let retnArray = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      retnArray.push(array[i]);
    } else {
      let currentArray = array[i];
      for (let j = 0; j < currentArray.length; j++) {
        retnArray.push(currentArray[j]);
      }
    }
  }
  return retnArray;
}
