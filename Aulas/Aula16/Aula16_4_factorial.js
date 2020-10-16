function factorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * factorial(n-1)
    }
}


function factorial_for(n) {
    let fat = 1
    for(let c = 1; c <= n; c++) {
        fat *= c
    }
    return fat
}


console.log(factorial(5))
console.log(factorial_for(5))
