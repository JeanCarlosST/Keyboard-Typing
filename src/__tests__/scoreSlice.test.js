import { describe, expect, it } from 'vitest';
import scoreReducer, { addCurrentSpeed } from "../store/scoreSlice";

describe('addScore action', () => { 
    it("should insert new score in position", () => {
        const state = {
            currentSpeed: 420,
            highScores: [567, 453, 346, 121]
        };

        const expected = {
            currentSpeed: 420,
            highScores: [567, 453, 420, 346, 121]
        };

        const result = scoreReducer(state, addCurrentSpeed());

        expect(result).toEqual(expected);
    });

    it("should insert first score", () => {
        const state = {
            currentSpeed: 420,
            highScores: []
        };

        const expected = {
            currentSpeed: 420,
            highScores: [420]
        };;

        const result = scoreReducer(state, addCurrentSpeed());

        expect(result).toEqual(expected);
    });
    
    it("should insert new score at the end", () => {
        const state = {
            currentSpeed: 90,
            highScores: [567, 453, 346, 121]
        };

        const expected = {
            currentSpeed: 90,
            highScores: [567, 453, 346, 121, 90]
        };

        const result = scoreReducer(state, addCurrentSpeed());

        expect(result).toEqual(expected);
    });
    
    it("should insert new score at the start", () => {
        const state = {
            currentSpeed: 605,
            highScores: [567, 453, 346, 121]
        };

        const expected = {
            currentSpeed: 605,
            highScores: [605, 567, 453, 346, 121]
        };

        const result = scoreReducer(state, addCurrentSpeed());

        expect(result).toEqual(expected);
    });
});