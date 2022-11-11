import {Librarian} from "./Librarian";
import {Newspaper} from "./Newspaper";

export class Magazine extends Librarian {
    private _issueNumber: number;
    private _releaseDate: number;


    constructor(documentCode: number, publishingCompany: string, release: number, name: string, issueNumber: number) {
        super(documentCode, publishingCompany, release, name);
        this._issueNumber = issueNumber;
    }

    getIssueNumber(): number {
        return this._issueNumber;
    }

    setIssueNumber(value: number) {
        this._issueNumber = value;
    }

    getReleaseDate(): number {
        return this._releaseDate;
    }

    setReleaseDate(value: number) {
        this._releaseDate = value;
    }
}


export class MagazineManager {
    static listMagazine: Magazine[] = [];

    static add(magazine: Magazine): void {
        MagazineManager.listMagazine.push(magazine)
    }

    static display(): void {
        for (const magazine of MagazineManager.listMagazine) {
            console.table(magazine)
        }
    }

    static deleteMagazine(documentCode: number): void {
        for (let i = 0; i < MagazineManager.listMagazine.length; i++) {
            if (MagazineManager.listMagazine.length === 1) {
                MagazineManager.listMagazine.splice(i, 1);
            }
        }
    }
    static searchMagazine(name: string) {
        for (let i =0 ;i < MagazineManager.listMagazine.length;i++) {
            if (MagazineManager.listMagazine[i].getName() === name) {
                console.table(MagazineManager.listMagazine[i])
            }
        }
    }
}