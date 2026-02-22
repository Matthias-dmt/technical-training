export function mostFrequentElement(nums: number[]): number | null {
    if(nums.length === 0) return null;

    const reducesArray = nums.reduce((acc: Record<number, number>, num: number) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});

    let mostFrequentKey: number = 0;
    let maxFrequency: number = 0;

    for (const [key, num] of Object.entries(reducesArray)) {
        if (num > maxFrequency) {
            maxFrequency = num;
            mostFrequentKey = Number(key);
        }
    }

    return mostFrequentKey;
};
