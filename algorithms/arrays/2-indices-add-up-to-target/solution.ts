export function indicesAddUpToTarget(nums: number[], target: number): number[] | null {
    if(!nums.length) return null;

    const hashMap = new Map<number, number>();

    for(let i = 0; i < nums.length; i++) {
        // if target = a + b
        // a = target - b
        const indexA = target - nums[i]

        if(hashMap.has(indexA)) {
            return [hashMap.get(indexA)!, i]
        }

        hashMap.set(nums[i], i)
    }

    return null
}