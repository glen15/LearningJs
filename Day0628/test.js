function fibonacci(num) {
  let result = [0, 1]
  if (num === 0) {
    return [0]
  }
  for (let i = 2; i <= num; i++) {
    console.log('current list',result);
    result.push(result[i-2] + result[i-1]);
    console.log('added list', result);
    console.log('\n\n');
  }
  return result
};

fibonacci(5);


function getElementsUpTo(array, n) {
  return array.slice(0, n);
}

console.log(getElementsUpTo([1,2,3,4], 2))