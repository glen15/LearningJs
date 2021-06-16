'use strict';

//0616//

const findTenPlace = score => {
    let num = Math.floor(score/10);
    if (num === 9) {
        return 'A';
    } else if (num === 8) {
        return 'B';
    } else if (num === 7) {
        return 'C';
    } else if (num === 6) {
        return 'D';
    } else ;{
        return 'F';
    }
};

const findOnePlace = score => {
    let remainder = score % 10
    let num = remainder < 3 ? '-':(remainder < 8) ? '':'+';
    return num;
}

const transPointToGrade = score => {
    if (score === 100) {
        return console.log('A+')
    } else {
        let result = findTenPlace(score) + findOnePlace(score);
        if (result.indexOf('F') === -1) { 
            return console.log(result);
        } else {
            return console.log('F');
        }
    }
}

transPointToGrade(100);
transPointToGrade(99);
transPointToGrade(95);
transPointToGrade(91);
transPointToGrade(68);
transPointToGrade(64);
transPointToGrade(62);
transPointToGrade(40);


let num1 = 1
let num2 = 2

console.log(num1 && num2 < 9);
console.log(((num1 || num2) % 2) === 0);




const findTenPlace1 = score => {
    let num = Math.floor(score / 10);
    if (num === 9) {
      return 'A';
    } else if (num === 8) {
      return 'B';
    } else if (num === 7) {
      return 'C';
    } else if (num === 6) {
      return 'D';
    } else {
      return 'F';
    }
  }
console.log(findTenPlace1(74));

const findOnePlace1 = score => {
    let num = (score % 10) < 3 ? '-':(score % 10) <8 ? '':'+';
    return num;
  }

console.log(findOnePlace1(74));

let side1 = 5
let side2 = 7
let side3 = 9

console.log(side1**2);
console.log(side1*side1);
console.log(Math.pow(side1,2));

function addOneSecond(hour, minute, second) {
    second = second + 1;
    if (second === 60) {
        second = 0;
        minute = minute + 1;
    }
    console.log(hour);
    console.log(minute);
    console.log(second);
    if (minute === 60) {
        minute = 0;
        hour = hour + 1;
    }
    console.log(hour);
    console.log(minute);
    console.log(second);
    
    if (hour === 24) {
        hour = 0;
    }
    return `1초 뒤에 ${hour}시 ${minute}분 ${second}초 입니다`
}

console.log(addOneSecond(1, 59, 59));
console.log(addOneSecond(23, 59, 59));


function isFalsy(anything) {
    const falsyList = [false, null, undefined, 0, NaN, '']
    console.log(falsyList.indexOf(anything));
    if (anything === NaN) {
        return true;
    } else if (falsyList.indexOf(anything) !== -1) {
      return true;
    } else {
      return false;
    }
  }

  


function takeLetters(num, str) {
    const newStr = str.slice(0,num);
    return newStr;
}
console.log(takeLetters(2, 'cordstate'));

