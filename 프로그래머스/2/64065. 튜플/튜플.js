const solution = s => {
    let arr = s.slice(2, s.length-2).replaceAll('},{', '/').split('/').sort((a, b) => a.length - b.length);
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split(',');
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = parseInt(arr[i][j]);
        }
        newArr.push(arr[i]);
    }
    newArr = newArr.flat();
    let set = new Set(newArr);
    return ([...set]);
}