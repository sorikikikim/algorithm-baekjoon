const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]);
// let arr = input[1].split(' ').map(el => Number(el))
let arr = input[1].split(' ').sort((a, b) => Number(a) - Number(b));
let sum = 0;
let current = 0;
for (let i = 0; i < num; i++) {
    current += Number(arr[i]);
    sum += current;
}
console.log(sum)