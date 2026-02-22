export function mostFrequentElement(nums: number[]): number | null {
  if (nums.length === 0) return null;

  const freq = new Map<number, number>();
  let bestValue = nums[0];
  let bestCount = 0;

  for (const num of nums) {
    const count = (freq.get(num) ?? 0) + 1;
    freq.set(num, count);

    if (count > bestCount) {
      bestCount = count;
      bestValue = num;
    }
  }

  return bestValue;
}