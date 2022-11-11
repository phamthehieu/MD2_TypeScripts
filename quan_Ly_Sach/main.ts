import {Librarian} from "./Librarian";
import {Book} from "./Book";
import {Newspaper} from "./Newspaper";
import {Magazine} from "./Magazine";
import {BookManager} from "./Book";
import {NewspaperManager} from "./Newspaper";
import {MagazineManager} from "./Magazine";

// let book1 = new Book(1,"a",1,"a","a",1)
// let book2 = new Book(12,"a2",12,"a1","a2",12)
// let book3 = new Book(123,"a23",123,"a2","a3",123)
//
// BookManager.add(book1)
// BookManager.add(book2)
// BookManager.add(book3)
// BookManager.deleteBook(1)
// BookManager.display()
// BookManager.searchBook("a")

let newspaper1 = new Newspaper(1,"a",1,"a1",1)
let newspaper2 = new Newspaper(12,"a2",12,"a2",12)
let newspaper3 = new Newspaper(123,"a23",123,"a3",123)

NewspaperManager.add(newspaper1)
NewspaperManager.add(newspaper2)
NewspaperManager.add(newspaper3)
// NewspaperManager.display()
// NewspaperManager.deleteNewspaper(1)
// NewspaperManager.display()
NewspaperManager.searchNewspaper("a2")

// let magazine1 = new Magazine(1,"a1",1,"a1",1)
// let magazine2 = new Magazine(12,"a2",12,"a2",12)
// let magazine3 = new Magazine(123,"a3",123,"a3",123)
//
// MagazineManager.add(magazine1)
// MagazineManager.add(magazine2)
// MagazineManager.add(magazine3)
// MagazineManager.display()
// MagazineManager.deleteMagazine(1)
// MagazineManager.display()
// MagazineManager.searchMagazine("a2")







