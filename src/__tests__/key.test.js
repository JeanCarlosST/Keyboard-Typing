import { describe, expect, it } from 'vitest';
import Keys from "../data/Keys";

describe('currentValue method', () => { 
    it("should return capitalized value when caps lock is enable", () => {
        const key = Keys.find(k => k.code === "KeyA");
        const isShiftDown = false;
        const isCapsLockEnable = true;

        const expected = "A";

        const result = key.currentValue(isShiftDown, isCapsLockEnable);

        expect(result).toEqual(expected);
    });

    it("should return capitalized value when shift is down", () => {
        const key = Keys.find(k => k.code === "KeyA");
        const isShiftDown = true;
        const isCapsLockEnable = false;

        const expected = "A";

        const result = key.currentValue(isShiftDown, isCapsLockEnable);

        expect(result).toEqual(expected);
    });

    it("should return norml value when caps lock is enable and shift is down", () => {
        const key = Keys.find(k => k.code === "KeyA");
        const isShiftDown = true;
        const isCapsLockEnable = true;

        const expected = "a";

        const result = key.currentValue(isShiftDown, isCapsLockEnable);

        expect(result).toEqual(expected);
    });

    it("should return empty string when is a modifier", () => {
        const key = Keys.find(k => k.code === "ShiftLeft");

        const expected = "";

        const result = key.currentValue();

        expect(result).toEqual(expected);
    });

    it("should return normal value", () => {
        const key = Keys.find(k => k.code === "KeyA");

        const expected = "a";

        const result = key.currentValue();

        expect(result).toEqual(expected);
    });

    it("should return alt value when shift is down", () => {
        const key = Keys.find(k => k.code === "Equal");
        const isShiftDown = true;
        const expected = "+";

        const result = key.currentValue(isShiftDown);

        expect(result).toEqual(expected);
    });
});