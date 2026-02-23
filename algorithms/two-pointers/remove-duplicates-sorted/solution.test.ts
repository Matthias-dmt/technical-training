import { describe, it, expect } from 'vitest'
import { removeDuplicatedSorted } from './solution'

describe('removeDuplicatedSorted', () => {
    it('should return 0 if empty list', () => {
        expect(removeDuplicatedSorted([])).toBe(0)
    })

    it('list with negatif and positif number duplicate', () => {
        expect(removeDuplicatedSorted([-2, -2, 1, 1, 2, 2, 3])).toBe(4)
    })
})