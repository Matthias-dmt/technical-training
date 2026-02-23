import { describe, it, expect } from 'vitest';
import { bestSolutionGroupByParity as groupByParity } from './solution';

describe('groubByParity', () => {
    it('should return null if empty input list', () => {
        expect(groupByParity([])).toBe(null)
    })

    it('should return 2 keys (even, odd) sorted by parity', () => {
        const result = groupByParity([-2, -6, -3, 2, 5, -7, -9, 24])

        expect(result?.even).toStrictEqual([-2, -6, 2, 24])
        expect(result?.odd).toStrictEqual([-3, 5, -7, -9])
    })
})