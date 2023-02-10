export const Modifiers = {
    None: "none",
    Tab: "Tab",
    CapsLock: "CapsLock",
    Shift: "Shift",
    Backspace: "Backspace",
    Enter: "Enter"
};

export class Key {
    constructor(isAlpha = true, firstChar = "", secondChar = "", isModifier = false, modifier = Modifiers.None) {
        this._firstChar = firstChar;
        this._secondChar = secondChar;
        this._isAlpha = isAlpha;
        this._isModifier = isModifier;
        this._modifier = modifier
    }

    static alpha(firstChar, secondChar = "") {
        const key = new Key(true, firstChar, secondChar, false, Modifiers.None);
        return key;
    }

    static modifier(modifier) {
        const key = new Key(false, "", "", true, modifier);
        return key;
    }

    get isAlpha() {
        return this._isAlpha;
    }

    get isModifier() {
        return this._isModifier;
    }

    get firstChar() {
        return this._firstChar;
    }

    get secondChar() {
        return this._secondChar;
    }

    get modifier() {
        return this._modifier;
    }
}