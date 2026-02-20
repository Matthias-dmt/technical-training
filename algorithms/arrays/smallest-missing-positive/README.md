# Smallest Missing Positive

## Problem

Given an array of integers, return the smallest missing positive integer.

## Clarifications

- Only positive integers matter
- Array may contain duplicates
- Array may contain negatives and zero

## Edge Cases

- Empty array
- All negatives
- Continuous sequence starting at 1
- Single element
- Large array
- Duplicates

## Approach

- if no value in array return 1
- sort the array by asc
- filter for only > 0
- initial smallestPositifValueMissing to 1
- go throught sorted array and return first positif missing

===
Best approach

This approach uses the array itself as a hash map by placing each number in its correct index (i.e., placing the value x at index x - 1).
