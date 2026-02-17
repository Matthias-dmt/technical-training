# Smallest Missing Positive

## Problem Statement

Given an array `nums` of integers, return the smallest positive integer (> 0) that does not appear in the array.

The array may contain:

- Negative numbers
- Zero
- Duplicates
- Unsorted values

You must handle all edge cases correctly.

---

## Examples

Input:  
`[1, 3, 6, 4, 1, 2]`  
Output:  
`5`

Input:  
`[1, 2, 3]`  
Output:  
`4`

Input:  
`[-1, -3]`  
Output:  
`1`

Input:  
`[2]`  
Output:  
`1`

---

## Constraints

- `0 ≤ nums.length ≤ 100,000`
- `-1,000,000 ≤ nums[i] ≤ 1,000,000`
- The solution should aim for:
  - Time complexity: O(n)
  - Space complexity: O(n) (acceptable for this implementation)

---

## Clarifications

- Only strictly positive integers (> 0) are relevant.
- The array may contain duplicates.
- The array is not guaranteed to be sorted.
- If all positive integers from `1` to `k` are present, return `k + 1`.

---

## Edge Cases to Consider

- Empty array
- Array with only negative numbers
- Array with only zero
- Array with duplicates
- Array starting from number > 1
- Continuous sequence starting at 1
- Single element array

---

## Expected Function Signature

```ts
export function smallestMissingPositive(nums: number[]): number;
