export const Modifiers = {
    None: "none",
    Tab: "Tab",
    CapsLock: "CapsLock",
    LeftShift: "LeftShift",
    RightShift: "RightShift",
    Backspace: "Backspace",
    Enter: "Enter"
};

export class Key {
    constructor(code, isAlpha = true, value = "", altValue = "", isModifier = false, modifier = Modifiers.None) {
        this._code = code;
        this._value = value;
        this._altValue = altValue;
        this._isAlpha = isAlpha;
        this._isCharacter = /[a-z]/.test(value);
        this._isModifier = isModifier;
        this._modifier = modifier
    }

    static alpha(code, value, altValue = "") {
        const key = new Key(code, true, value, altValue, false, Modifiers.None);
        return key;
    }

    static modifier(modifier) {
        const key = new Key(modifier, false, "", "", true, modifier);
        return key;
    }

    get code() {
        return this._code;
    }

    get isAlpha() {
        return this._isAlpha;
    }

    get isCharacter() {
        return this._isCharacter;
    }

    get isModifier() {
        return this._isModifier;
    }

    get value() {
        return this._value;
    }

    get altValue() {
        return this._altValue;
    }

    get modifier() {
        return this._modifier;
    }
}