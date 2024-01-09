const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
let result = 1;
let flag = false;

// 문제 : A -> B = 2를 곱한다, 1을 수의 가장 오른쪽에 추가한다
// 문제 해결 아이디어 : B -> A
// 1) 값이 2로 나누어 떨어지는 경우 -> 2로 나눈다
// 2) 그렇지 않고 일의 자릿수가 1인 경우 -> 10으로 나눈다
// 3) 위의 경우가 모두 해당하지 않는 경우 -> 종료한다

while (a <= b) {
    if (a == b) {
        flag = true;
        break;
    }
    if (b % 2 == 0) b = parseInt(b / 2);
    else if (b % 10 == 1) b = parseInt(b / 10);
    else break;
    result++;
}
if (flag) console.log(result);
else console.log(-1);


