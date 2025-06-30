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

function addButtonClicked(){
    const prompt = document.getElementById("prompt");
    prompt.classList.toggle("active");  
    
    for(let i = 0; i < myLibrary.length;i++){
        console.log(myLibrary[i].name);
        console.log(myLibrary[i].author);
        console.log(myLibrary[i].pages);
    }
}

function submitClicked(){
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");

    addBookToLibrary(title.value,author.value,pages.value,false);

    title.value = "";
    author.value = "";
    pages.value = "";
}