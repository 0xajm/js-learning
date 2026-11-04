/**
 * Problem: 2635. Apply Transform Over Each Element in Array (Easy)
 * Link: https://leetcode.com/problems/apply-transform-over-each-element-in-array/
 *
 * Description: Given an integer array `arr` and a mapping function `fn`,
 * return anew array with a transformation applied to each element such
 * that `returnedArray[i] = fn(arr[i], i)`, solved without using the
 * built-in `Array.map` method.
 *
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let returnedArray = [];
  for (let i = 0; i < arr.length; i++) {
    returnedArray[i] = fn(arr[i], i);
  }
  return returnedArray;
};
