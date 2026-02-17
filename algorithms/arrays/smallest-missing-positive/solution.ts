export function smallestMissingPositive(nums: number[]): number{
    if(nums.length === 0) return 1;

    const sortedArray = [...new Set(nums)].sort((a, b) => {
        return a - b;
    }).filter((x) => x > 0);

    let smallestMissing: number = 1;

    for(const [index, num] of sortedArray.entries()) {
        if(num !== index + 1) {
            smallestMissing = index + 1;
            break;
        } else if(index === sortedArray.length - 1) {
            smallestMissing = num + 1;
            break;
        }
    }

    return smallestMissing;
};
