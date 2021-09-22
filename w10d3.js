/* 
Given to alumni by Riot games in 2021.
*/

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining i count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {
    result= {};
    for (let i=0; i<s.length; i++) {
        if (!result.hasOwnProperty(s[i]) && isNaN(s[i])) {
            let numberList= "";
            for (let j= i + 1; j<s.length; j++) {
                if (isNaN(s[j])) {
                    break
                }
                else if (!isNaN(s[j])) {
                    numberList+= (s[j]);
                }
            }
            numbers= parseInt(numberList);
            result[s[i]]= numbers;
        }
        if (result.hasOwnProperty(s[i])) {
            let numberList2= "";
            for (let j= i + 1; j<s.length; j++) {
                if (isNaN(s[j])) {
                    break
                }
                else if (!isNaN(s[j])) {
                    numberList2+= (s[j]);
                }
            }
            numbers2= parseInt(numberList2);
            result[s[i]]= numbers2 + numbers;
        }
    }
    return result;
}

console.log(rehash(str1));

// /* 
// Given a string, find the length of the longest substring without repeating characters.
// */

// const str1 = "abcabcbb";
// const expected1 = 3;
// // Explanation: The answer is "abc", with the length of 3.

// const str2 = "bbbbb";
// const expected2 = 1;
// // Explanation: The answer is "b", with the length of 1.

// const str3 = "pwwkew";
// const expected3 = 3;
// /* Explanation: The answer is "wke", with the length of 3. 
//   Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

// const str4 = "dvadf";
// const expected4 = 4;
// // Explanation: "vadf"

// /**
//  * Determines the length of the longest substring in the given str.
//  * @param {string} str
//  * @returns {number} Length of the longest substring from the given str.
//  * - Time: O(?).
//  * - Space: O(?).
//  */
// function lengthOfLongestSubString(str) {}