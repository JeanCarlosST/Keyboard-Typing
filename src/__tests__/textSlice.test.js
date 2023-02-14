import { describe, expect, it } from 'vitest'
import textReducer, { setTargetText, addCharacter, removeLastCharacter, selectTargetText } from "../store/textSlice";

describe("setTargetText action", () => {
    it('should set target text', () => { 
        const state = {
            index: 0,
            target: "",
            portions: []
        }

        const expected = {
            index: 0,
            target: "The sky is blue",
            portions: [
                {
                    text: "The sky is blue",
                    status: "uncompleted"
                }
            ]
        }

        const result = textReducer(state, setTargetText("The sky is blue"));

        expect(result).toEqual(expected);
    });

    it('should reset target text', () => { 
        const state = {
            index: 1,
            target: "The sky is blue",
            portions: [
                {
                    text: "T",
                    status: "correct"
                },
                {
                    text: "he sky is blue",
                    status: "uncompleted"
                }
            ]
        }

        const expected = {
            index: 0,
            target: "The grass is green",
            portions: [
                {
                    text: "The grass is green",
                    status: "uncompleted"
                }
            ]
        }

        const result = textReducer(state, setTargetText("The grass is green"));

        expect(result).toEqual(expected);
    });
});

describe('addCharacter action', () => { 
    it("should add the first correct character", () => {
        const state = {
            index: 0,
            target: "The sky is blue",
            portions: [
                {
                    text: "The sky is blue",
                    status: "uncompleted"
                }
            ]
        }

        const expected = {
            index: 1,
            target: "The sky is blue",
            portions: [
                {
                    text: "T",
                    target: "T",
                    status: "correct"
                },
                {
                    text: "he sky is blue",
                    status: "uncompleted"
                }
            ]
        }

        const result = textReducer(state, addCharacter("T"));
        
        expect(result).toEqual(expected);
    });

    it("should add the first incorrect character", () => {
        const state = {
            index: 0,
            target: "The sky is blue",
            portions: [
                {
                    text: "The sky is blue",
                    status: "uncompleted"
                }
            ]
        }

        const expected = {
            index: 1,
            target: "The sky is blue",
            portions: [
                {
                    text: "r",
                    target: "T",
                    status: "incorrect"
                },
                {
                    text: "he sky is blue",
                    status: "uncompleted"
                }
            ]
        }

        const result = textReducer(state, addCharacter("r"));

        expect(result).toEqual(expected);
    });

    it("should add a first incorrect character", () => {
        const state = {
            index: 0,
            target: "The sky is blue",
            portions: [
                {
                    text: "The sky is blue",
                    status: "uncompleted"
                }
            ]
        }

        const expected = {
            index: 1,
            target: "The sky is blue",
            portions: [
                {
                    text: "r",
                    target: "T",
                    status: "incorrect"
                },
                {
                    text: "he sky is blue",
                    status: "uncompleted"
                }
            ]
        }

        const result = textReducer(state, addCharacter("r"));

        expect(result).toEqual(expected);
    });

    it("should add an incorrect character after correct", () => {
        const state = {
            index: 1,
            target: "The sky is blue",
            portions: [
                {
                    text: "T",
                    target: "T",
                    status: "correct"
                },
                {
                    text: "he sky is blue",
                    status: "uncompleted"
                }
            ]
        }

        const expected = {
            index: 2,
            target: "The sky is blue",
            portions: [
                {
                    text: "T",
                    target: "T",
                    status: "correct"
                },
                {
                    text: "g",
                    target: "h",
                    status: "incorrect"
                },
                {
                    text: "e sky is blue",
                    status: "uncompleted"
                }
            ]
        }

        const result = textReducer(state, addCharacter("g"));

        expect(result).toEqual(expected);
    });

    it("should add a correct character after correct", () => {
        const state = {
            index: 1,
            target: "The sky is blue",
            portions: [
                {
                    text: "T",
                    target: "T",
                    status: "correct"
                },
                {
                    text: "he sky is blue",
                    status: "uncompleted"
                }
            ]
        }

        const expected = {
            index: 2,
            target: "The sky is blue",
            portions: [
                {
                    text: "Th",
                    target: "Th",
                    status: "correct"
                },
                {
                    text: "e sky is blue",
                    status: "uncompleted"
                }
            ]
        }

        const result = textReducer(state, addCharacter("h"));

        expect(result).toEqual(expected);
    });

    it("should add an incorrect character after incorrect", () => {
        const state = {
            index: 1,
            target: "The sky is blue",
            portions: [
                {
                    text: "R",
                    target: "T",
                    status: "incorrect"
                },
                {
                    text: "he sky is blue",
                    status: "uncompleted"
                }
            ]
        }

        const expected = {
            index: 2,
            target: "The sky is blue",
            portions: [
                {
                    text: "Rg",
                    target: "Th",
                    status: "incorrect"
                },
                {
                    text: "e sky is blue",
                    status: "uncompleted"
                }
            ]
        }

        const result = textReducer(state, addCharacter("g"));

        expect(result).toEqual(expected);
    });
    
    it("should add a correct character after incorrect", () => {
        const state = {
            index: 1,
            target: "The sky is blue",
            portions: [
                {
                    text: "R",
                    target: "T",
                    status: "incorrect"
                },
                {
                    text: "he sky is blue",
                    status: "uncompleted"
                }
            ]
        }

        const expected = {
            index: 2,
            target: "The sky is blue",
            portions: [
                {
                    text: "R",
                    target: "T",
                    status: "incorrect"
                },
                {
                    text: "h",
                    target: "h",
                    status: "correct"
                },
                {
                    text: "e sky is blue",
                    status: "uncompleted"
                }
            ]
        }

        const result = textReducer(state, addCharacter("h"));

        expect(result).toEqual(expected);
    });

    it("should add an incorrect character after many correct", () => {
        const state = {
            index: 5,
            target: "The sky is blue",
            portions: [
                {
                    text: "The s",
                    target: "The s",
                    status: "correct"
                },
                {
                    text: "ky is blue",
                    status: "uncompleted"
                }
            ]
        }

        const expected = {
            index: 6,
            target: "The sky is blue",
            portions: [
                {
                    text: "The s",
                    target: "The s",
                    status: "correct"
                },
                {
                    text: "j",
                    target: "k",
                    status: "incorrect"
                },
                {
                    text: "y is blue",
                    status: "uncompleted"
                }
            ]
        }

        const result = textReducer(state, addCharacter("j"));

        expect(result).toEqual(expected);
    });

    it("should add a correct character after many portions", () => {
        const state = {
            index: 5,
            target: "The sky is blue",
            portions: [
                {
                    text: "T",
                    target: "T",
                    status: "correct"
                },
                {
                    text: "H",
                    target: "h",
                    status: "incorrect"
                },
                {
                    text: "e ",
                    target: "e ",
                    status: "correct"
                },
                {
                    text: "a",
                    target: "s",
                    status: "incorrect"
                },
                {
                    text: "ky is blue",
                    status: "uncompleted"
                }
            ]
        }

        const expected = {
            index: 6,
            target: "The sky is blue",
            portions: [
                {
                    text: "T",
                    target: "T",
                    status: "correct"
                },
                {
                    text: "H",
                    target: "h",
                    status: "incorrect"
                },
                {
                    text: "e ",
                    target: "e ",
                    status: "correct"
                },
                {
                    text: "a",
                    target: "s",
                    status: "incorrect"
                },
                {
                    text: "k",
                    target: "k",
                    status: "correct"
                },
                {
                    text: "y is blue",
                    status: "uncompleted"
                }
            ]
        }

        const result = textReducer(state, addCharacter("k"));

        expect(result).toEqual(expected);
    });

    it("should add a incorrect character after many portions", () => {
        const state = {
            index: 5,
            target: "The sky is blue",
            portions: [
                {
                    text: "T",
                    target: "T",
                    status: "correct"
                },
                {
                    text: "H",
                    target: "h",
                    status: "incorrect"
                },
                {
                    text: "e ",
                    target: "e ",
                    status: "correct"
                },
                {
                    text: "a",
                    target: "s",
                    status: "incorrect"
                },
                {
                    text: "ky is blue",
                    status: "uncompleted"
                }
            ]
        }

        const expected = {
            index: 6,
            target: "The sky is blue",
            portions: [
                {
                    text: "T",
                    target: "T",
                    status: "correct"
                },
                {
                    text: "H",
                    target: "h",
                    status: "incorrect"
                },
                {
                    text: "e ",
                    target: "e ",
                    status: "correct"
                },
                {
                    text: "aj",
                    target: "sk",
                    status: "incorrect"
                },
                {
                    text: "y is blue",
                    status: "uncompleted"
                }
            ]
        }

        const result = textReducer(state, addCharacter("j"));

        expect(result).toEqual(expected);
    });
});

describe('removeLastCharacter action', () => { 
        
    it("should remove the first character", () => {
        const state = {
            index: 1,
            target: "The sky is blue",
            portions: [
                {
                    text: "T",
                    target: "T",
                    status: "correct"
                },
                {
                    text: "he sky is blue",
                    status: "uncompleted"
                }
            ]
        }

        const expected = {
            index: 0,
            target: "The sky is blue",
            portions: [
                {
                    text: "The sky is blue",
                    status: "uncompleted"
                }
            ]
        }

        const result = textReducer(state, removeLastCharacter());

        expect(result).toEqual(expected);
    });
    
    it("should remove the character from portion", () => {
        const state = {
            index: 3,
            target: "The sky is blue",
            portions: [
                {
                    text: "The",
                    target: "The",
                    status: "correct"
                },
                {
                    text: " sky is blue",
                    status: "uncompleted"
                }
            ]
        }

        const expected = {
            index: 2,
            target: "The sky is blue",
            portions: [
                {
                    text: "Th",
                    target: "Th",
                    status: "correct"
                },
                {
                    text: "e sky is blue",
                    status: "uncompleted"
                }
            ]
        }

        const result = textReducer(state, removeLastCharacter());

        expect(result).toEqual(expected);
    });
    
    it("should remove the character from portion and remove portion", () => {
        const state = {
            index: 3,
            target: "The sky is blue",
            portions: [
                {
                    text: "Th",
                    target: "Th",
                    status: "correct"
                },
                {
                    text: "w",
                    target: "e",
                    status: "incorrect"
                },
                {
                    text: " sky is blue",
                    status: "uncompleted"
                }
            ]
        }

        const expected = {
            index: 2,
            target: "The sky is blue",
            portions: [
                {
                    text: "Th",
                    target: "Th",
                    status: "correct"
                },
                {
                    text: "e sky is blue",
                    status: "uncompleted"
                }
            ]
        }

        const result = textReducer(state, removeLastCharacter());

        expect(result).toEqual(expected);
    });

    it("should not remove characters at the beginning", () => {
        const state = {
            index: 0,
            target: "The sky is blue",
            portions: [
                {
                    text: "The sky is blue",
                    status: "uncompleted"
                }
            ]
        }

        const expected = {
            index: 0,
            target: "The sky is blue",
            portions: [
                {
                    text: "The sky is blue",
                    status: "uncompleted"
                }
            ]
        }

        const result = textReducer(state, removeLastCharacter());

        expect(result).toEqual(expected);
    });
});

// describe('selectTargetText selector', () => { 
//     it("should get the target text", () => {
//         const state = {
//             index: 0,
//             target: "The sky is blue",
//             portions: [
//                 {
//                     text: "The sky is blue",
//                     status: "uncompleted"
//                 }
//             ]
//         }

//         const expected = "The sky is blue";

//         const result = reducer

//         expect(result).toEqual(expected);
//     });
// });