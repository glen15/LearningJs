'use strict';
console.log("hello world");

// 함수는 기능의 단위
// 함수는 작은 기능의 단위
// 함수의 선언과 호출
// 같은 기능을 하는 함수를 선언식, 표현식, 화살표 함수로 표현
// 함수는 호출 후 반드시 돌아온다 return


function nineNine(num) {
    for (let backNum = 1; backNum < 10; backNum++) {
        console.log(num * backNum);
    }
}

nineNine(5);

