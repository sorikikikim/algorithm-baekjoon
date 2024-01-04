// function solution(n, lost, reserve) {
//     let sum = n - lost.length;
//     const result = new Set();
//     for (let i = 0; i < lost.length; i++) {
//         for (let j = 0; j < reserve.length; j++) {
//             if (lost[i] + 1 === reserve[j] || lost[i] - 1 === reserve[j]) {
//                 result.add(lost[i])
//             }
//             if (lost.length > reserve.length && lost[i] + 1 === reserve[j] && lost[i + 1] - 1 === reserve[j]) {
//                 result.delete(lost[i])
//             }
//         }
//     }
//     return sum + [...result].length;
// }

// function solution(n, lost, reserve) {
//     let answer = 0;
//     let lost_filter;
//     let reserve_filter;

//     lost_filter = lost.filter(e => !reserve.includes(e)).sort((a, b)=> a-b)
//     reserve_filter = reserve.filter(e => !lost.includes(e)).sort((a, b)=> a-b)

//     for(let i=0; i<lost_filter.length; i++) {
//         for(let j=0; j<reserve_filter.length; j++) {
//             if(lost_filter[i]-1 == reserve_filter[j] || lost_filter[i]+1 == reserve_filter[j]) {
//                 lost_filter.shift();
//             }
//         }
//     }

//     // 5)
//     answer = n - lost_filter.length;

//     return answer;
// }

function solution(n, lost, reserve) {
    let answer = 0;
    let lost_filter = [];
    let reserve_filter = [];
    
    lost_filter = lost.filter(el => !reserve.includes(el)).sort((a, b) => a - b);
    reserve_filter = reserve.filter(el => !lost.includes(el)).sort((a, b) => a - b);

    for (let i = 0; i < lost_filter.length; i++) {
        for (let j = 0; j < reserve_filter.length; j++) {
            if (lost_filter[i] - 1 === reserve_filter[j] || lost_filter[i] + 1 === reserve_filter[j]) {
                lost_filter.shift()
            }
        }
    }
    
    answer = n - lost_filter.length;
    return answer
}