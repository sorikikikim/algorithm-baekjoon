let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// input[0] => n, k
let n = Number(input[0].split(' ')[0])
let k = Number(input[0].split(' ')[1])

// input[1~n] => 동전 단위
let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]))
}

let count = 0;
for (let i = n - 1; i >= 0; i--) {
    count += parseInt(k / arr[i]);
    k %= arr[i];
}

console.log(count)



