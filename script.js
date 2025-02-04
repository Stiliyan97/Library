

// my book constructor and array where I will store books

const myLibrary = [];

const idCollection = [];

function Book (title, author, pages, id) {
    this.title = title;
    this.author = author;
    this.pages = pages
    this.id = id;
}

const bookId = myLibrary.length + 1;


// I am adding event listner to my add book button

const addBookBtn = document.getElementById("add-book-btn");
addBookBtn.addEventListener("click", addBookToLibrary)

console.log(addBookBtn);

//This function adds book to the array

function addBookToLibrary(e) {
    e.preventDefault();

    const bookTitle = document.getElementById("book-title").value;
    const bookAuthor = document.getElementById("book-author").value;
    const bookPages = parseInt(document.getElementById("book-pages").value);
    const bookId = 0;

    if (idCollection.length === 0) {
        bookId = 1;
        idCollection.push(bookId);
    } else {
        bookId = idCollection[length - 1] + 1;
        idCollection.push(bookId);
    }

    

    const newBook = new Book(bookTitle, bookAuthor, bookPages, bookId)

    myLibrary.push(newBook);
    console.log(myLibrary);
}