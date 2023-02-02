/**
 * Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
 */

function validAnagram(str1, str2) {
    // 두개의 문자열의 길이가 같은지 확인
    if(str1.length !== str2.length) {
        return false;
    }
    // 첫번째 문자열을 객체에 쌓는다.
    let lookup = {};
    for(const el of str1) {
      lookup[el] ? lookup[el]++ : lookup[el] = 1;
    }

    for(let i = 0; i < str2.length; i++) {
      const letter = str2[i];
      if(!lookup[letter]) { // 없으면 false 반환
        return false;
      } else { // 있으면 한개씩 빼준다.
        lookup[letter]--;
      }
    }
    return true;
}



const result1 = validAnagram('', '') // true
const result2 = validAnagram('aaz', 'zza') // false
const result3 = validAnagram('anagram', 'nagaram') // true
const result4 = validAnagram("rat","car") // false) // false
const result5 = validAnagram('awesome', 'awesom') // false
const result6 = validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
const result7 = validAnagram('qwerty', 'qeywrt') // true
const result8 = validAnagram('texttwisttime', 'timetwisttext') // true

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);
console.log(result8);