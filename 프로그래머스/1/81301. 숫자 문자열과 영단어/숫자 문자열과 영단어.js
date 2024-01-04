const solution = s => {
    const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    arr.forEach((num, idx) => s = s.replaceAll(num, idx))
    return parseInt(s);
}