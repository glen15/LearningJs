'use strict';

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

