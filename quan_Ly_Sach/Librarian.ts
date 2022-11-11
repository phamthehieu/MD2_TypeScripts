export class Librarian {
    private _documentCode: number;
    private _publishingCompany: string;
    private _release: number;
    private _name: string

    constructor(documentCode: number, publishingCompany: string, release: number, name: string) {
        this._documentCode = documentCode;
        this._publishingCompany = publishingCompany;
        this._release = release;
        this._name = name
    }

    getDocumentCode(): number {
        return this._documentCode;
    }

    setDocumentCode(value: number) {
        this._documentCode = value;
    }

    getPublishingCompany(): string {
        return this._publishingCompany;
    }

    setPublishingCompany(value: string) {
        this._publishingCompany = value;
    }

    getRelease(): number {
        return this._release;
    }

    setRelease(value: number) {
        this._release = value;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }
}
