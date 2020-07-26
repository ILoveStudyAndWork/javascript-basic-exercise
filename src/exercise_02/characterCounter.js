export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.
  if (string === 0 || string === null || string === '' || string === undefined) {
    return 0;
  }
  const s = string.toString();
  if (prediction === undefined) {
    return s.length;
  }
  let count = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (prediction(s[i]) === true) {
      count += 1;
    }
  }
  return count;
}
