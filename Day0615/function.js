'use strict';
console.log("hello world");

// 함수는 기능의 단위
// 함수는 작은 기능의 단위
// 함수의 선언과 호출
// 같은 기능을 하는 함수를 선언식, 표현식, 화살표 함수로 표현
// 함수는 호출 후 반드시 돌아온다 return
// 입력과 출력간의 매핑(mapping) -> ?? what is the mapping


// 구구단함수
function nineNine(num) {
    for (let backNum = 1; backNum < 10; backNum++) {
        console.log(num * backNum);
    }
}
nineNine(5);
console.log(nineNine(2));

// 함수 선언식 : 바로 function 으로 함수 선언
// 함수 표현식 : 일단 변수명 할당 후 안에 익명의 함수 넣기
// 화살표 함수

const cal = (first, second) => {first + second}; // undefined
const cal2 = (first, second) => first + second; // 정상작동, return 만 있는 함수면 {} 없이해야 작동
console.log(cal(1,2)); // undefined
console.log(cal2(3,4)); // 7


// 매개변수 parameter : 함수를 선언할 때 변수로 넣어 놓는 자리 이름  
// 전달인자 argument : 호출할 때 parameter 자리에 넣을 요소

// 사각형 넓이 구하기 함수

function square(x, y) {
    let area = x*y;
    return area;
};

const square2 = function(x,y) {
    let area = x*y;
    return area;
};

const square3 = (x,y) => {
    let area = x*y;
    return area;
};

const square4 = (x,y) => x*y;

console.log(square(3,4));
console.log(square2(3,4));
console.log(square3(3,4));
console.log(square4(3,4));