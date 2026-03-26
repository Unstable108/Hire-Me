/**
 * @param {number[]} nums
 * @return {number[]}
 */
function merge(nums, st, end, mid) {
  let temp = [];
  let i = st,
    j = mid + 1;
  while (i <= mid && j <= end) {
    if (nums[i] < nums[j]) {
      temp.push(nums[i]);
      i++;
    } else {
      temp.push(nums[j]);
      j++;
    }
  }
  while (i <= mid) {
    temp.push(nums[i]);
    i++;
  }
  while (j <= end) {
    temp.push(nums[j]);
    j++;
  }
  for (let i = 0; i < temp.length; i++) {
    nums[i + st] = temp[i];
  }
}

function mergeSort(nums, i, j) {
  if (i < j) {
    let mid = Math.floor(i + (j - i) / 2);
    mergeSort(nums, i, mid);
    mergeSort(nums, mid + 1, j);
    merge(nums, i, j, mid);
  }
}
var sortArray = function (nums) {
  mergeSort(nums, 0, nums.length - 1);
  return nums;
};
