const solution = n => {
    return n.toString().split('').map(el => Number(el)).reduce((a, c) => a + c, 0)
}