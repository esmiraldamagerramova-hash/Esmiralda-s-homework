function book(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
}
book.prototype.getDetails = function() {
    return `${this.title} by ${this.author}, Genre: ${this.genre}`;
};
function ebook(title, author, genre, fileSize) {
    book.call(this, title, author, genre);
    this.fileSize = fileSize;
}

ebook.prototype = Object.create(book.prototype);
ebook.prototype.constructor = ebook;

ebook.prototype.download = function() {
    return `${this.title} is downloading...`;
};

function printedBook(title, author, genre, pages) {
    book.call(this, title, author, genre);
    this.pages = pages;
}

printedBook.prototype = Object.create(book.prototype);
printedBook.prototype.constructor = printedBook;

printedBook.prototype.read = function() {
    return `${this.title} is being read...`;
};

function library(name) {
    this.name = name;
    this.books = [];
}

library.prototype.addBook = function(book) {
    this.books.push(book);
};

library.prototype.listBooks = function() {
    this.books.forEach(book => console.log(book.getDetails()));
};

const lib = new library("Central Library");

const book1 = new ebook("JS Basics", "Ilkin", "Programming", "5MB");
const book2 = new printedBook("CSS Guide", "Ilkin", "Design", 300);

lib.addBook(book1);
lib.addBook(book2);

lib.listBooks();

console.log(book1.download()); 
console.log(book2.read()); 
