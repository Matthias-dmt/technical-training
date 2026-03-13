import { describe, it, expect } from "vitest";
import { longuestSubStringNoDuplicate, fixedSliddingWindow, haveDuplicate, isAnnagram, mergeTwoSortedArray } from "./solution"

describe("algo training sliddind window & longuest substring no duplicate", () => {
    it("longuest substring no duplicate", () => {
        // expect(longuestSubStringNoDuplicate("abcabcbb")).toBe(3)
        // expect(longuestSubStringNoDuplicate("bbbb")).toBe(1)
        expect(longuestSubStringNoDuplicate("pwwkew")).toBe(3)
    })

    it("fixed slidding window", () => {
        // expect(longuestSubStringNoDuplicate("abcabcbb")).toBe(3)
        // expect(longuestSubStringNoDuplicate("bbbb")).toBe(1)
        const response = fixedSliddingWindow([2,1,5,1,3,2], 3)
        expect(response).toBe(9)
    })

    it("have duplicated", () => {
        const response = haveDuplicate([2,1,5,1,3,2])
        const response2 = haveDuplicate([2,1,5,3])
        expect(response).toBe(true)
        expect(response2).toBe(false)
    })

    it("Is annagram", () => {
        const response = isAnnagram("anagram", "nagaram")
        const response2 = isAnnagram("rat", "car")
        expect(response).toBe(true)
        expect(response2).toBe(false)
    })

    it("merge sorted array", () => {
        const response = mergeTwoSortedArray([1,3,5], [2,3,4,6,7])
        expect(response).toStrictEqual([1,2,3,3,4,5,6,7])
    })
})