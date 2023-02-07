/**
 *  Sliding Window
 * This pattern involves creating a window which can either be an array or number from one position to another
 * Depending on a certain condition, the window either increses or closes (and a new window is created)
 * Very useful for keeping track of a subset of data in an array/string etc. 
 */

/**
 * An example 
 * Write a function called maxSubarraySum which accepts an array of integers and a number called `n`. 
 * The function should calculate the maximum sum of `n` consecutive elements in the array.
 */


/**
 * Naive Solution
 * O(n^2)
 */
function NmaxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }

    let max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for (let j = 0; j < num; j++) {
            temp = temp + arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

/**
 * Refactor 
 * O(n)
 * 여기에서 중요한 컨셉은 창문이 이동하는데 맨앞에 있는건 빠지고 맨뒤에 있는 것은 더해준다는 개념!!
 */
function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (num > arr.length) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]; // !important
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
}


const result = maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

console.log(result);
