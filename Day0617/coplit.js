function makeMarginalString(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    console.log('i 는 ' + i);
    for (let j = 0; j <= i; j++) {
      console.log('j 는 ' + j);
      console.log('str[j] = ' + str[j]);
      result = result + str[j];
      console.log(' result = ' + result);
    }
  }

  return result;
}

makeMarginalString('abcd');



// let output = makeMarginalString('abc');
// console.log(output); // --> 'aababc'