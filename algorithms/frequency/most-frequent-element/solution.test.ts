import { describe, it, expect } from 'vitest';
import { mostFrequentElement } from './solution';

describe('mostFrequentElement', () => {
    it('should return the most frequent element in the array', () => {
        expect(mostFrequentElement([1, 2, 3, 2, 4])).toBe(2);
    });

    it('it should return 0 if the array is empty', () => {
        expect(mostFrequentElement([])).toBe(null);
    });

    it('negatif values included in the list', () => {
        expect(mostFrequentElement([-1, -1, -2, -3, -2, -1])).toBe(-1);
    })
})