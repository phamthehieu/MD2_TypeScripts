import {LibrarianManager} from "./Librarian";
import {Book} from "./Librarian";
import {Newspaper} from "./Librarian";
import {Magazine} from "./Librarian"


let book1 = new Book(1,"a",1,1,"a1",1)
// let book2 = new Book(2,"a2",2,"a2","a2",2)
// let book3 = new Book(3,"a23",3,"a3","a3",3)
let newspaper1 = new Newspaper(4,"a",1,4,1)
// let newspaper2 = new Newspaper(5,"a2",12,"a5",2)
// let newspaper3 = new Newspaper(6,"a23",123,"a6",3)
let magazine1 = new Magazine(7,"a",1,7,1,1)
// let magazine2 = new Magazine(8,"a",1,"a8",2,2)
// let magazine3 = new Magazine(9,"a2",3,"a9",3,3)

LibrarianManager.add(book1)
// LibrarianManager.add(book2)
// LibrarianManager.add(book3)
LibrarianManager.add(newspaper1)
// LibrarianManager.add(newspaper2)
// LibrarianManager.add(newspaper3)
LibrarianManager.add(magazine1)
// LibrarianManager.add(magazine2)
// LibrarianManager.add(magazine3)

LibrarianManager.display()
LibrarianManager.delete(1)
LibrarianManager.display()
LibrarianManager.search(7)





