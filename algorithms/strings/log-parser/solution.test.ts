import { describe, it, expect } from 'vitest'
import { logParser } from './solution'

describe('logParser', () => {
    it('should return null if empty input', () => {
        expect(logParser([])).toBe(null);
    }),

    it('should return object with userId as key and number of success event as value', () => {
        expect(logParser([
            "2024-01-01|user1|SUCCESS",
            "2024-01-01|user2|FAIL",
            "2024-01-01|user1|SUCCESS",
            "invalid-entry",
            "2024-01-01|user3|SUCCESS"
        ])).toStrictEqual({
            user1: 2,
            user3: 1
        })
    })
})