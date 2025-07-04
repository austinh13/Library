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
    
    
}

function submitClicked(){
    const grid = document.getElementById("grid");
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");
    const prompt = document.getElementById("prompt");
    prompt.classList.toggle("active");  

    addBookToLibrary(title.value,author.value,pages.value,false);

    while (grid.firstChild){
        grid.removeChild(grid.lastChild);
    }

    title.value = "";
    author.value = "";
    pages.value = "";

    for(let i = 0; i < myLibrary.length;i++){
        const tile = document.createElement("div");
        tile.classList.add("tile");

        const title = document.createElement("h1");
        title.innerHTML = myLibrary[i].name;

        const author = document.createElement("p");
        author.innerHTML = "By: " + myLibrary[i].author;

        const pages = document.createElement("p");
        pages.innerHTML = "Pages: " + myLibrary[i].pages;

        tile.appendChild(title);
        tile.appendChild(author);
        tile.appendChild(pages);

        grid.appendChild(tile);
    }

}