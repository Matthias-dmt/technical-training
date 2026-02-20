function firstMissingPositive(nums: number[]): number {
    const n = nums.length;
    let i = 0;

    // Place positive numbers in their correct positions (value x at index x - 1)
    while (i < n) {
        // Check if the number is positive and within the valid range [1, n]
        if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
            // Swap the current number with the number at its correct index
            [nums[i], nums[nums[i] - 1]] = [nums[nums[i] - 1], nums[i]];
        } else {
            // If the number is out of range, negative, zero, or already in place, move to the next index
            i++;
        }
    }

    // Iterate through the rearranged array to find the first missing positive integer
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    // If all numbers from 1 to n are present, the smallest missing positive is n + 1
    return n + 1;
}