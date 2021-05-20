/*
Code challenge:

Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers.

Return the maximum product you can get.
*/

var integerBreak = function(n) {
    if(n < 3){return 1}
    if(n == 3){return 2}
    let parts = []
    

    while(n !== 0){
        if(n > 4){
            parts.push(3)
            n = n - 3
        }else{
            parts.push(n)
            n = 0
        }
    }
    return parts.reduce((a,b) => a * b, 1)
};

