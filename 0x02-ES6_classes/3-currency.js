class Currency {
    constructor(code, name) {
        this._code = code;
        this._name = name;
    }
    set code(code) {
    if (typeof code !== 'number') {
      throw new TypeError('code must be a number');
    }
    this._code = code;
  }

  get code() {
    return this._code;
  }
  set name(name) {
    if (typeof name !== 'string') {
        throw new TypeError('name must be a string');
    }
    this._name = name;
  }
  displayFullCurrency() {
    return `${this._code} (${this._name})`;
  }
}