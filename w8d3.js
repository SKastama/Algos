const nums1 = [1, 2, 3, 4, 6, 7, 8, 10];
const expected1 = [
    { i: 4, n: 6 },
    { i: 7, n: 10 },
];

/**
 * Finds all the non-consecutive (out of order) numbers from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @typedef {Array<{i: number, n: number}>} NonConsecNums Array of objects.
 * @property {number} i The i of the non consecutive number.
 * @property {number} n The non consecutive number itself.
 * @returns {NonConsecNums}
 */
function allNonConsecutive(sortedNums) {
    nonConsective= [];
    for (let idx = 0; idx < sortedNums.length - 1; idx++) {
        const valueIdx= sortedNums[idx+1] - sortedNums[idx];
        if (valueIdx !== 1) {
            nonConsective.push({
                i: sortedNums[idx],
                n: sortedNums[idx+1]
            });
        }
    }
    return nonConsective;
}
console.log(allNonConsecutive(nums1));
/* 
Union Sorted Arrays
Efficiently combine two already-sorted multiset arrays
into a new sorted array containing the multiset union.
Unions by default will take the set of dupes
that has the highest occurrences from one array.
Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

// const numsA1 = [1, 2, 2, 2, 7];
// const numsB1 = [2, 2, 6, 6, 7];
// const expected1 = [1, 2, 2, 2, 6, 6, 7];

// const numsA2 = [1, 2, 2, 2, 7, 10, 15, 20];
// const numsB2 = [2, 2, 6, 6, 7];
// const expected2 = [1, 2, 2, 2, 6, 6, 7, 10, 15, 20];
// /* 
// Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
// because it occurs 3 times at most in ONE set
// */

// /**
//  * Combines two already sorted multiset arrays into an ordered multiset union
//  * Venn Diagram Visualization (top):
//  * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<number>} sortedA Both sets are sorted multisets
//  *    (contain dupes).
//  * @param {Array<number>} sortedB
//  * @returns {Array<number>} An ordered multiset union of the given sets.
//  *    The return should include dupes, but the amount of dupes for each int
//  *    should be based on the max amount that dupe appears from one set,
//  *    not the combined amount from both sets.
//  */
// function orderedMultisetUnion(sortedA, sortedB) {}
/* 
Given a square matrix (2d array) of integers
Calculate the absolute difference between the sums of its diagonals
- top left to bottom right diagonal
- top right to bottom left diagonal
*/

// const squareMatrix1 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [9, 8, 9],
// ];
// const expected1 = 2;
// /* 
//     left to right diagonal: 1 + 5 + 9 = 15
//     right to left diagonal: 3 + 5 + 9 = 17
//     absolute difference = 2
//   */

// const squareMatrix2 = [
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
// ];
// const expected2 = 0;
// /* 
//     left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
//     right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
//     absolute difference = 0
//   */

// /**
//    * Calculates the absolute diagonal difference of a square matrix.
//    * - Time: O(?).
//    * - Space: O(?).
//    * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
//    *    a square matrix (rows and columns).
//    * @returns {number} Represents the absolute difference between the top left to
//    *    bottom right diagonal and the top right to bottom left diagonal.
//    */
// function diagonalDifference(sqrMatrix) {
//     let sum1 = 0;
//     let sum2 = 0;
//     for (let i = 0; i < sqrMatrix.length; i++) {
//         sum1+= (sqrMatrix[i][i]);
//         sum2+= (sqrMatrix[i][sqrMatrix.length - 1 - i]);
//     }
//     if (sum1 > sum2) {
//         return sum1 - sum2;
//     }
//     else if (sum1 < sum2) {
//         return sum2 - sum1;
//     }
// }
// // console.log(diagonalDifference(squareMatrix1));
// // console.log(diagonalDifference(squareMatrix2));