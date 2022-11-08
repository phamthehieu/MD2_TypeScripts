"use strict";
exports.__esModule = true;
var Book_1 = require("./Book");
var book1 = new Book_1.Book("The Design of EveryDay Things", 'Don Norman', true);
var book2 = new Book_1.Book("The Most Human", "Brian Christian", true);
var books = [];
books.push(book1, book2);
for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var bookInfor = book.title + ' by ' + book.author;
    if (book.alreadyRead) {
        console.log(' you already read ' + bookInfor);
    }
    else {
        console.log('you still need to read ' + bookInfor);
    }
}
