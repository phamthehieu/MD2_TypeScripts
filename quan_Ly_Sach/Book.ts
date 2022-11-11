import {Librarian} from "./Librarian";

export class Book extends Librarian {
    private _author: string;
    private _pageNumber: number;


    constructor(documentCode: number, publishingCompany: string, release: number, name: string, author: string, pageNumber: number) {
        super(documentCode, publishingCompany, release, name);
        this._author = author;
        this._pageNumber = pageNumber;
    }

    getAuthor(): string {
        return this._author;
    }

    setAuthor(value: string) {
        this._author = value;
    }

    getPageNumber(): number {
        return this._pageNumber;
    }

    setPageNumber(value: number) {
        this._pageNumber = value;
    }
}

export class BookManager {
    static listBook: Book[] = [];
    static add(book: Book):void {
        BookManager.listBook.push(book)
    }
    static display(): void {
        for (const book of BookManager.listBook) {
            console.table(book)
        }
    }
    static deleteBook(documentCode: number): void {
        for (let i =0 ;i < BookManager.listBook.length;i++) {
            if (BookManager.listBook.length === 1) {
                BookManager.listBook.splice(i,1);
            }
        }
    }
    static searchBook(name: string) {
        for (let i =0 ;i < BookManager.listBook.length;i++) {
            if (BookManager.listBook[i].getName() === name) {
                console.table(BookManager.listBook[i])
            }
        }
    }
}