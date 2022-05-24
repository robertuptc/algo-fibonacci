const fibonacci = (num) => {
    let fibonacciArr = [0, 1,];
    
    if (num === 0) {
        return 0
    } else if (num === 1) {
        return 1
    } else {
        for(let i = 2; i <= num; i++) {
            fibonacciArr.push(fibonacciArr[i-1] + (fibonacciArr[i-2]))    } fibonacciArr
    } return fibonacciArr[num]  
}

module.exports = {fibonacci}
