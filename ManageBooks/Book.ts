export class Book {
    _ID: string;
    private _name: string;

    constructor(ID: string, name: string) {

        this._ID = ID;

        this._name = name;

    }

    getID(): string {
        return this._ID;
    }

    setID(value: string) {
        this._ID = value;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }
}