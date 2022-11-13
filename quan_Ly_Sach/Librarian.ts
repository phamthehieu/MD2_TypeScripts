
export class Librarian {
    private _documentCode: number;
    private _publishingCompany: string;
    private _release: number;
    private _name: number

    constructor(documentCode: number, publishingCompany: string, release: number, name: number) {
        this._documentCode = documentCode;
        this._publishingCompany = publishingCompany;
        this._release = release;
        this._name = name
    }

}

export class Newspaper extends Librarian {
    private _releaseDate: number;


    constructor(documentCode: number, publishingCompany: string, release: number, name: number, releaseDate: number) {
        super(documentCode, publishingCompany, release, name);
        this._releaseDate = releaseDate;
    }

}

export class Magazine extends Librarian {
    private _issueNumber: number;
    private _releaseDate: number;

    constructor(documentCode: number, publishingCompany: string, release: number, name: number, issueNumber: number,releaseDate: number) {
        super(documentCode, publishingCompany, release, name);
        this._issueNumber = issueNumber;
        this._releaseDate = releaseDate;
    }

}
export class Book extends Librarian {
    private _author: string;
    private _pageNumber: number;

    constructor(documentCode: number, publishingCompany: string, release: number, name: number, author: string, pageNumber: number) {
        super(documentCode, publishingCompany, release, name);
        this._author = author;
        this._pageNumber = pageNumber;
    }
}

export class LibrarianManager {
    static listLibrarian: any [] = [];
    constructor() {
    }

    static add(librarian: any): void {
        LibrarianManager.listLibrarian.push(librarian);
    }

    static display(): void {
            console.table(LibrarianManager.listLibrarian)
    }

    static delete(_documentCode: number) {
        for (let i = 0; i < LibrarianManager.listLibrarian.length;i++) {
            if (LibrarianManager.listLibrarian[i]._documentCode === _documentCode) {
                LibrarianManager.listLibrarian.splice(i,1)
            }
        }
        LibrarianManager.display()
    }

    static search(name: number) {
       for (let i = 0; i < LibrarianManager.listLibrarian.length; i++) {
           if (LibrarianManager.listLibrarian[i]._name === name) {
               console.table(LibrarianManager.listLibrarian[i])
           }
       }
    }
}
