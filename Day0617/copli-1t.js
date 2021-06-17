function listPrimes(num) {
  let result = '2';

  if (num === 2) {
    return result;
  }
  

  for (let i = 3; i <= num; i += 2) {
    let trueFalse = true
    let divisionNum = parseInt(Math.sqrt(i));
    for (let j = 3; j <= divisionNum; j += 2) {
      if (i % j === 0) {
        trueFalse = false;
      }
    }

    if (trueFalse) {
      result = result + '-' + i
    }
  }

  return result;
}

console.log(listPrimes(2));