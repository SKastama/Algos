# /* 
#   Stable sort.
#   Visualization:
#   https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
#   Time Complexity
#     - Best case: O(n log(n)) linearithmic.
#     - Average case: O(n log(n)) linearithmic.
#     - Worst case: O(n log(n)) linearithmic.
#   Space: O(n) linear
#   steps:
#     1. create a merge function to merge two already sorted arrays into a single
#         sorted array.
#       - you do NOT need to work in place, ok to use a new array
#     2. create mergeSort function to sort the provided array
#       - split the array in half and recursively merge the halves using the
#           previously created merge function.
#       - splitting of arrays stops when array can no longer be split.
#       - an array of 1 item is by definition sorted, so two arrays of 1 item
#           can therefore be merged into a sorted array.
# */

# // merge
sortedA1 = [];
sortedB1 = [];
expectedMerge1 = [];

sortedA2 = [5];
sortedB2 = [2];
expectedMerge2 = [2, 5];

sortedA3 = [3];
sortedB3 = [2, 3, 4, 7];
expectedMerge3 = [2, 3, 3, 4, 7];

sortedA4 = [1, 2, 4, 5, 6, 9];
sortedB4 = [3, 7, 8, 10];
expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

# /**
#  * Efficiently merges two already sorted arrays into a new sorted array.
#  * Do not mutate the given arrays.
#  * - Time: O(?).
#  * - Space: O(?).
#  * @param {Array<number>} left
#  * @param {Array<number>} right
#  * @returns {Array<number>} A new sorted array containing all the elements of
#  *    both given halves.
#  */
# No nest loops, no pop or push, 2 functions
def merge(left, right):
    expected= []
    expected.append(left)
    print(expected)
merge(sortedA1, sortedB1)

# // mergeSort
# numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]
# numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
# expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# /**
#  * Creates a new sorted array based on the given nums being recursively split
#  * and merged.
#  * Best: O(n log(n)) linearithmic.
#  * Avg: O(n log(n)) linearithmic.
#  * Worst: O(n log(n)) linearithmic.
#  * @param {Array<number>} nums
#  * @returns {Array<number>} A New sorted array.
#  */
# def mergeSort(nums):