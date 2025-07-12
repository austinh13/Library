const myLibrary = [];
const field1 = document.getElementById("title");
const field2 = document.getElementById("author");
const field3 = document.getElementById("pages");

field1.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Stops form submission
    }
  });

  field2.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Stops form submission
    }
  });

  field3.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Stops form submission
    }
  });



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
    const read = document.getElementById("check");

    prompt.classList.toggle("active");  

    addBookToLibrary(title.value,author.value,pages.value,read.checked);

    while (grid.firstChild){
        grid.removeChild(grid.lastChild);
    }

    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;

    for(let i = 0; i < myLibrary.length;i++){
        const tile = document.createElement("div");
        tile.classList.add("tile");

        const title = document.createElement("h1");
        title.innerHTML = myLibrary[i].name;

        const author = document.createElement("p");
        author.innerHTML = "By: " + myLibrary[i].author;

        const pages = document.createElement("p");
        pages.innerHTML = "Pages: " + myLibrary[i].pages;

        const check = document.createElement("input");
        check.type = "checkbox";
        check.classList.add("check");

        if(myLibrary[i].read){
            tile.style.backgroundColor = "rgba(0, 255, 0, 0.3)";
            check.checked = true;
        }
        else{
            tile.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
        }
        tile.appendChild(title);
        tile.appendChild(author);
        tile.appendChild(pages);
        tile.appendChild(check);

        grid.appendChild(tile);
    }

}