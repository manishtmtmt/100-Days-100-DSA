/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let start = 0;
  let longestWindow = 0;
  let zeroCount = 0;

  for (let i = 0; i < nums.length; i++) {
    zeroCount += nums[i] == 0;

    while (zeroCount > 1) {
      zeroCount -= nums[start] == 0;
      start++;
    }

    longestWindow = Math.max(longestWindow, i - start);
  }

  return longestWindow;
};
