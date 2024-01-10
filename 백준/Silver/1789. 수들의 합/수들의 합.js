const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
let num = Number(input);
let sum = 0;
let result = 0;
for (let i = 0; ; i++) {
    sum = sum + i;
    result = i;
		if (sum > num) {
			result--;
			break;
		}
}
console.log(result);
