export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.

  for (let i = 0; i < promises.length; i++) {
    if (!(promises[i] instanceof Promise)) {
      throw new Error('Not all elements are promises.');
    }
  }
  // let promise = Promise.resolve();
  // for (let j = 0; j < promises.length; j++){
  //   promises[j] = promises[j];
  // }
  let settledPromise = [];
  //返回promise数组
  for (let j = 0; j < promises.length; j++) {
    settledPromise.push((promises[j]).then(console.log('sunccess')));
  }
  console.log(settledPromise);
  return settledPromise;
  //return promises.reduce((p, f) => p.then(f), Promise.resolve());
  //console.log(Promise.allSettled(promises));
  //return Promise.allSettled(promises).then();
}
