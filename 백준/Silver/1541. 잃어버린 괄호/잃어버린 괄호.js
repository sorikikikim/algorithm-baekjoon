const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("-");
let arr = [];
let result = 0;
for (let i = 0; i < input.length; i++) {
    arr.push(input[i].split('+').map(Number))
}
if (arr[0] == 0) {
	result += -arr[1];
}
else {
	result += arr[0].reduce((a, c) => a + c)
}

for (let i = 1; i < arr.length; i++) {
	let sum = 0;
	for (let j = 0; j < arr[i].length; j++) {
		sum += arr[i][j];
	}
	result -= sum;
}

console.log(result)