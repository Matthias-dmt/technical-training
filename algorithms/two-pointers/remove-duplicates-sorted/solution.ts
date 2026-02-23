export function removeDuplicatedSorted(input: number[]): number {
    if (input.length === 0) return 0;

    let writtingIndex = 1;

    for(let readingIndex = 1; readingIndex < input.length; readingIndex++) {
        // compare current index with previous one
        if(input[readingIndex] !== input[readingIndex - 1]) {
            // if different, number is unique. write it
            input[writtingIndex] = input[readingIndex];
            writtingIndex++;
        }
    }

    return writtingIndex
}