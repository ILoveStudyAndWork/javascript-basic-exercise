export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (typeof start !== 'number' || typeof end !== 'number'){
    return null;
  }
  let rangeArray = [];
  if (start <= end) {
    for (let i = start; i < end; i += 1) {
      rangeArray.push(i);
    }
  } else {
    for (let i = start; i > end; i -= 1) {
      rangeArray.push(i);
    }
  }
  return rangeArray;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (numbers === undefined) {
    return 0;
  }
  let Sum = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    if (typeof (numbers[i]) === 'number') {
      Sum += numbers[i];
    } else {
      Sum += sum(numbers[i]);
    }
  }
  return Sum;

}
