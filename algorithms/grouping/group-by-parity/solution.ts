export function groupByParity(input: number[]): { even: number[], odd: number[] } | null {
    const inputLenght = input.length
    if (!inputLenght) return null;

    const parity = new Map<string, number[]>();
    let i: number = 0;

    while(i < inputLenght) {
        // if the remainder of current input index is different then 0 set in odd
        const currentIndex = input[i];
        if (currentIndex % 2 !== 0) {
            parity.set('odd', [...parity.get('odd') ?? [], currentIndex])
        } else {
            parity.set('even', [...parity.get('even') ?? [], currentIndex])
        }
        i++;
    }
    
    return {
        even: parity.get('even') ?? [],
        odd: parity.get('odd') ?? []
    }
}

export function bestSolutionGroupByParity(input: number[]): { even: number[], odd: number[] } | null {
    if(!input.length) return null;

    const parity = {
        even: [] as number[],
        odd: [] as number[]
    }

    for (const number of input) {
        if(number % 2 !== 0)
            parity.odd.push(number)
        else
            parity.even.push(number)
    }

    return parity
}
