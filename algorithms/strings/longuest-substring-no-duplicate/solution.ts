export function longuestSubStringNoDuplicate(s: string): number {
    if(!s.length) return 0;

    const subString = new Map<string, number>();
    let leftIndex: number = 0;
    let subStringLength = 1;

    for (let index = 0; index < s.length; index++) {
        const currentValue = s[index]

        if(subString.has(currentValue)) {
            leftIndex = Math.max(leftIndex, subString.get(currentValue)! + 1)
        }

        subString.set(currentValue, index)

        subStringLength = Math.max(subStringLength, (index - leftIndex) + 1)
    }

    return subStringLength
}

// nums = [2,1,5,1,3,2]
// k = 3

// [2,1,5] = 8
// [1,5,1] = 7
// [5,1,3] = 9
// [1,3,2] = 6

// output 9

// here we should implement slidding fixed window. the window should always have k element
// we make the sum each time the window
// and update answer if necessary

export function fixedSliddingWindow(nums: number[], k: number): number {
    if (!nums.length || k <= 0 || k > nums.length) return 0;

    let windowSum = 0

    for (let index = 0; index < k; index++) {
        windowSum += nums[index]
    }

    let maxSum = windowSum;

    for (let rightIndex = k; rightIndex < nums.length; rightIndex++) {
        windowSum = windowSum - nums[rightIndex - k] + nums[rightIndex]
       
        // update maxSum if necessary
        maxSum = Math.max(maxSum, windowSum)
        
    }

    return maxSum
}

// we can create a has map and for each element verify if it is already in the map
// if not pass to next one
// if yes break and return false

export function haveDuplicate(nums: number[]): boolean {
    if (!nums.length) return false;

    const seen = new Set<number>();

    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }

        seen.add(num);
    }

    return false;
}

// check if 2 strings are anagram
// if 1 <= s.length <= 50 000 -> return too bug
// t.length !== s.length -> return false
// create a hash map, loop string length.
// each itteration store value in hash map
// 2 hash map, one for each string

export function isAnnagram(s: string, t: string): boolean {
    if (1 > s.length || s.length > 50000
        || 1 > t.length || t.length > 50000
        || t.length !== s.length
    ) {
        return false
    }

    const hashMapS = new Map<string, number>()
    const hashMapT = new Map<string, number>()

    for (let index = 0; index < s.length; index++) {
        hashMapS.set(s[index], (hashMapS.get(s[index])! ?? 0) + 1)
        hashMapT.set(t[index], (hashMapT.get(t[index])! ?? 0) + 1)
    }

    for(const key of hashMapS.keys()) {
        const hashMapTValue = hashMapT.get(key)
        const hashMapSValue = hashMapS.get(key)

        if(hashMapTValue !== hashMapSValue)
            return false
    }

    return true
}

// 0 <= nums1.length, nums2.length <= 1000
// -10^9 <= nums1[i], nums2[i] <= 10^9
// Both arrays are already sorted

// since the array are sorted we can use 2 pointers index.
// check if array have min and max lenght
// array can have different length so we need 2 times the pointers index
// array can share same value

export function mergeTwoSortedArray(nums1: number[], nums2: number[]): number[] {
    if ((!nums1.length && !nums2.length) || nums1.length > 1000 || nums2.length > 1000) 
        throw new Error('parameter invalid')
    
    const mergedArray: number[] = []

    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer1 < nums1.length && pointer2 < nums2.length){
        if(nums1[pointer1] < nums2[pointer2]) {
            mergedArray.push(nums1[pointer1])
            pointer1++
        } else {
            mergedArray.push(nums2[pointer2])
            pointer2++
        }
    }

    while (pointer1 < nums1.length) {
        mergedArray.push(nums1[pointer1])
        pointer1++
    }

    while (pointer2 < nums2.length) {
        mergedArray.push(nums2[pointer2])
        pointer2++
    }

    return mergedArray;
}

export function isValidString(s: string): boolean {
    // create pairs
    const pairs: Record<string, string> = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    // map on the string
    // if chara is an opening add in stack
    // if closing check end of stack if matches pop
    const stack: string[] = []

    for(const chara of s) {
        if (chara in pairs) {
            stack.push(chara)
        } else {
            const lastChara = stack.pop()

            if(!lastChara || pairs[lastChara] === chara) {
                return false
            }
        } 
    }

    return stack.length === 0;
}

function numberAppearOnce(nums: number[]): number {
    // store the count of each chara
    const charaCount = new Map<number, number>()

    for (let index = 0; index < nums.length; index++) {
        charaCount.set(nums[index], (charaCount.get(nums[index]) ?? 0) + 1)
    }

    // loop on each count when the count is one return
    for(const [key, count] of charaCount) {
        if (count === 1) {
            return key
        }
    }
} 

function contiguousSubArraySizeK(nums: number[], k: number):  number {
    // we have to check all subarray of size K
    // we set the sum of k element for first array
    let maxSum: number = 0;
    for(let index = 0; index < k; index++) {
        maxSum += nums[index];
    }
    // we initiate left index
    let leftIndex: number = 0;
    let sum: number = maxSum;

    // we loop on num and start from k
    for (let index = k; index < nums.length; index++) {
        // each iteration we slide the window from one to the right
        // so sum = sum + (rightIndex - leftIndex)
        sum = sum + nums[index] - nums[leftIndex];
        leftIndex++;
        
        // if sum is bigger than max sum we set it
        maxSum = Math.max(maxSum, sum)
    }
    // return maxSum
    return maxSum
}