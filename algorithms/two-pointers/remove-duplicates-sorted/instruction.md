# Remove Duplicates (Sorted Input)

You are given a sorted array of integers.

Remove duplicates in-place so that each element appears only once.

Return the number of unique elements.

Constraints:

• Do not allocate another array for the result.
• Modify the input array directly.
• Think carefully about performance.
• The input may be empty.

## Reasoning

### Problem

We are given a list of "sorted" numbers. in this list the element can appear more than once.

we should remove the duplicate and return the number of unique elements so the size of the list without duplicate.

### Approach

If the input is empty return 0 since there is no unique element.

we can simply itterate on the array and check if the current index is the same as the previous. if it is the case the element is duplicated

The first input element will always be unique, we can start to check only the second and writte unique element only from index 1.

then we return the length of the filteredArray.
