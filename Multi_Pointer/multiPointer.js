/**
 * Creating pointers or values that correspond to an index or position and move towards the beginning, 
 * end or middle based on a certain condition 
 * 
 * Very efficient for solving problems with minimal space complexity as well
 * 
 * 이 해결 방법은 선형적 구조에서 (string, array, double linked list) 한 쌍의 값이나 특정 조건을 충족시키는 무언가를 찾을 경우에 효과적이다.
 */

/**
 * Write a function called zeroSum which accepts a sorted array of intergers. The function find the first pair where the sum is 0. 
 * Return an array that includes both values that sum to zero or undefined if a pair does not exist.
 */

/**
 * Naive Solution 
 * 
 * time complexity: O(n^2)
 * space complexity: O(n)
 */

function zeroSumNaive(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

/**
 * Refactor
 * 
 * time complexity: O(n)
 * space complexity: O(1)
 */

function zeroSum(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        const sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}



const result1 = zeroSum([-3, -2, -1, 0, 1, 2, 3]);
const result2 = zeroSum([-2, 0, 1, 3]);
const result3 = zeroSum([1, 2, 3]);

console.log(result1);
console.log(result2);
console.log(result3);
