/**
 * From a Chipotle interview.
 * encodeStr algo was also given in this interview (aaabbcdd => a3b2cd2).
 *
 * It ain't much, but it's honest work. A worker who measures water level
 * fluctuations in a river is asked to find the largest fluctuation in water
 * levels during a day, but only for rises in water levels.
 */

const riverLevels1 = [15, 17, 30];
const expected1 = 15; // 30 - 15 = 15

const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
const expected2 = 20; // 25 - 5 = 20

const riverLevels3 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
const expected3 = 11; // 12 - 1 = 11

const riverLevels4 = [1, 5];
const expected4 = 4;

const riverLevels5 = [5, 1];
const expected5 = -1;

const riverLevels6 = [9, 7, 7, 7];
const expected6 = -1;

const riverLevels7 = [42];
const expected7 = -1;

// /**
//  * It ain't much, but it's honest work. A worker who measures water level
//  * fluctuations in a river is asked to find the largest fluctuation in water
//  * levels during a day, but only for rises in water levels.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<number>} waterLevels Non-empty .
//  * @returns {number} The max water-level rise amount or -1 if none.
//  */
// function measureWaterLevels(waterLevels) {
//     let maxDif= 0;
//     for (let i = 0; i < waterLevels.length; i++) {
//         for (let j = i + 1; j < waterLevels.length; j++) {
//             if (waterLevels[j] > waterLevels[i]) {
//                 if (maxDif < (waterLevels[j] - waterLevels[i])){
//                     maxDif= waterLevels[j] - waterLevels[i];
//                 }
//             }
//         }
//     }
//     if (maxDif === 0){
//         return -1;
//     }
//     return maxDif;
// }
// console.log(measureWaterLevels(riverLevels1));
// console.log(measureWaterLevels(riverLevels2));
// console.log(measureWaterLevels(riverLevels3));
// console.log(measureWaterLevels(riverLevels4));
// console.log(measureWaterLevels(riverLevels5));
// console.log(measureWaterLevels(riverLevels6));
// console.log(measureWaterLevels(riverLevels7));

function measureWaterLevels(waterLevels) { 
    let globalSum = 0;
    let localSum = 0;

    for (let i=1; i<waterLevels.length; i++) {
        localSum += waterLevels[i] - waterLevels[i-1]
        if (localSum > globalSum) {
            globalSum = localSum;
        }
    }
    return globalSum;
}

console.log(measureWaterLevels(riverLevels1));

/*
Given two arrays of ints
return the symmetric differences, (aka disjunctive union)
- these are the elements which are in either of the sets and not their intersection (the union without the intersection)
    think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
- i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)
Venn Diagram Visualization:
- https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
*/

// const test1NumsA = [1, 2];
// const test1NumsB = [2, 1];
// const expected1 = [];
// // Explanation: 1 and 2 are in both arrays so are excluded

// const test2NumsA = [1, 2, 3];
// const test2NumsB = [4, 5, 6];
// const expected2 = [1, 2, 3, 4, 5, 6];
// // Explanation: neither array has shared values, so all are included

// const test3NumsA = [4, 1, 2, 3, 4];
// const test3NumsB = [1, 2, 3, 5, 5, 2];
// const expected3 = [4, 5];
// /* 
// Explanation: 1, 2, and 3 are shared so are excluded
// 4 and 5 are included because they exist only in 1 array,
// but have duplicates, so only one copy of each is kept.
// */

// /**
//  * Produces the symmetric differences, aka disjunctive union of two sets.
//  * Venn Diagram Visualization:
//  * @see https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param  {Array<number>} numsA
//  * @param  {Array<number>} numsB
//  *    Both given sets are multisets in any order (contain dupes).
//  * @returns {Array<number>} The union of the given sets but excluding the shared
//  *    values (union without intersection).
//  *    i.e., if the element is in one array and NOT the other, it should be
//  *    included in the return.
//  */
// function symmetricDifferences(numsA, numsB) {
//     const setA= new Set(numsA);
//     const setB= new Set(numsB);

// }

// Interview Algo given to alumni Oct 2019

/* 
// You are given a list of integers. Find all the consecutive sets of 
// integers that adds up to the sum passed in as one of the inputs.
// */

// const nums1 = [2, 5, 3, 6, 7, 23, 12];
// const sum1 = 16;
// const expected1 = [
// [2, 5, 3, 6],
// [3, 6, 7],
// ];

// // Bonus:
// const nums2 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
// const sum2 = 16;
// const expected2 = [
// [2, 5, 3, 6],
// [3, 6, 7],
// [3, 6, 7, 0],
// [3, 6, 7, 0, 0],
// ];

// // Bonus:
// const nums3 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
// const sum3 = -16;
// const expected3 = [
// [-2, -5, -3, -6],
// [-3, -6, -7],
// [-3, -6, -7, -0],
// [-3, -6, -7, -0, -0],
// ];

// /**
//  * Finds all the sets of consecutive numbers that sum to the given target sum.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<number>} nums Unordered nums.
//  * @param {number} targetSum
//  * @returns {Array<Array<number>>} 2d array where each nested array is a set of
//  *    consecutive numbers that add up to the given targetSum. Consecutive in
//  *    this context means the numbers whose indexes are one after the other
//  *    only.
//  */
// function findConsqSums(nums, targetSum) {}