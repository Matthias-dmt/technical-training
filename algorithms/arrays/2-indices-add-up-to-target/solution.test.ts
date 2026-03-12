import { describe, it, expect } from "vitest";
import { indicesAddUpToTarget } from "./solution"

describe('indicesAddUpToTarget', () => {
    it('should return null if nums array empty', () => {
        expect(indicesAddUpToTarget([], 7)).toBe(null)
    })

    it('should return 2 indices which add up === to target', () => {
        const response = indicesAddUpToTarget([2, 7, 11, 15], 9)
        expect(response).toStrictEqual([0, 1])
        expect(indicesAddUpToTarget([3,2,4], 6)).toStrictEqual([1, 2])
    })
    
})