import {Librarian} from "./Librarian";
import {Book} from "./Book";

export class Newspaper extends Librarian {
    private _releaseDate: number;


    constructor(documentCode: number, publishingCompany: string, release: number, name: string, releaseDate: number) {
        super(documentCode, publishingCompany, release, name);
        this._releaseDate = releaseDate;
    }

    getReleaseDate(): number {
        return this._releaseDate;
    }

    setReleaseDate(value: number) {
        this._releaseDate = value;
    }
}

export class NewspaperManager {
    static listNewspaper: Newspaper[] = [];

    static add(newspaper: Newspaper): void {
        NewspaperManager.listNewspaper.push(newspaper)
    }

    static display(): void {
        for (const newspaper of NewspaperManager.listNewspaper) {
            console.table(newspaper)
        }
    }

    static deleteNewspaper(documentCode: number): void {
        for (let i = 0; i < NewspaperManager.listNewspaper.length; i++) {
            if (NewspaperManager.listNewspaper.length === 1) {
                NewspaperManager.listNewspaper.splice(i, 1);
            }
        }
    }
    static searchNewspaper(name: string) {
        for (let i =0 ;i < NewspaperManager.listNewspaper.length;i++) {
            if (NewspaperManager.listNewspaper[i].getName() === name) {
                console.table(NewspaperManager.listNewspaper[i])
            }
        }
    }
}