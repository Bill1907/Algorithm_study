/**
 * 빈도 문제가 나온다? => 그러면 객체를 이용해 빈도를 수집한다.
 * 예를들어 애너그램 문제.
 */

/**
 * 예시 1. 
 * write a function called same, which accepts two arrays. 
 * The function should return true if every value in the array has it's correspoding value squared in the second array.
 * The frequency of values must be the same .
 */

function same (arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    
    const obj1 = {}
    const obj2 = {}

    arr1.forEach(el => {
        obj1[el] = (obj1[el] || 0) + 1;
    });

    arr2.forEach(el => {
        obj2[el] = (obj2[el] || 0) + 1;
    });

    // 두 객체를 비교
    for (const key in obj1) {
        if(!(key**2 in obj2)) return false;
        if(obj2[key**2] !== obj1[key]) return false;
    }

    return true;
}

const result1 = same([1, 2, 3], [4, 1, 9]); // true;
const result2 = same([1, 2, 3], [1, 9]); // false;
const result3 = same([1, 2, 1], [4, 4, 1]); // false;

console.log(result1);
console.log(result2);
console.log(result3);