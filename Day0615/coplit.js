'use strict';

// console.log(!undefined); // true
// console.log(undefined);  // undifined
// console.log(Boolean(undefined));  // undifined
console.log(!'hello');
console.log(Boolean('hello'));
console.log(Boolean(''));

function A(age) {
    let result;
    result = age > 18;
    return result;
}

console.log(A(19));

function isOldEnoughToDrink(age) {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}

console.log(isOldEnoughToDrink(40));
console.log(isOldEnoughToDrink(15));


//90~100은 A
//80~89는 B
//70~79는 C
//60~69는 D
//1의자리숫자가 0~2면 - 3~7이면 기호없음, 8~9이면 + 단 100점은 A+

function tenPlace(score) {
    let num = Math.floor(score/10);
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
function onePlace(score) {
    let num = ((score % 10) < 3) ? '-' : ((score % 10) < 8) ? '' : '+';
    return num;
}

function gradeSystem(score) {
    if (score === 100) {
        return console.log('A+');
    } else {
        let result = tenPlace(score) + onePlace(score);
        return console.log(result);
    }
}

gradeSystem(100);
gradeSystem(99);
gradeSystem(95);
gradeSystem(91);
gradeSystem(68);
gradeSystem(64);
gradeSystem(62);
gradeSystem(40);





