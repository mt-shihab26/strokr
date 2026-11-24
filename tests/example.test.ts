import { describe, expect, test } from "vite-plus/test";

const wordsPerMinute = (characters: number, seconds: number) => {
    if (seconds <= 0) {
        throw new Error("seconds must be greater than 0");
    }

    return characters / 5 / (seconds / 60);
};

describe("wordsPerMinute", () => {
    test("counts five characters as one word", () => {
        expect(wordsPerMinute(250, 60)).toBe(50);
    });

    test("scales to a full minute", () => {
        expect(wordsPerMinute(125, 30)).toBe(50);
    });

    test("rejects a zero duration", () => {
        expect(() => wordsPerMinute(100, 0)).toThrow("seconds must be greater than 0");
    });
});
