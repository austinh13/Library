const myLibrary = [];

function Book(bookName,authorName,numPages,userRead) {
    const book = new Object();
    book.name = bookName;
    book.author = authorName;
    book.pages = numPages;
    book.read = userRead;
    return book;
}

function addBookToLibrary(bookName,authorName,numPages,userRead){
    myLibrary.push(Book(bookName,authorName,numPages,userRead));
}