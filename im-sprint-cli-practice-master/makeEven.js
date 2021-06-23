// range 없이 만든 함수

// ✓ 배열을 리턴해야 합니다
// ✓ 10을 입력받은 경우, [2, 4, 6, 8, 10]을 리턴해야 합니다
// ✓ 20을 입력받은 경우, [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]을 리턴해야 합니다
// ✓ 100을 입력받은 경우, [2, 4, 6, 8, ..., 96, 98, 100]을 리턴해야 합니다
// ✓ npm run start 스크립트를 통해 index.js 파일을 실행해야 합니다


function makeEven(num) {
    result = []
    for (let i = 2; i <= num; i = i+2) {
        result.push(i);
    }
    return result;
}

console.log(makeEven(10));
console.log(makeEven(20));
console.log(makeEven(100));


