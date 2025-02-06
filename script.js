

// my book constructor and array where I will store books

const myLibrary = [];

const idCollection = [];

function Book (title, author, pages, id, status) {
    this.title = title;
    this.author = author;
    this.pages = pages
    this.id = id;
    this.status = status;
}

const bookId = myLibrary.length + 1;

//This function adds book to the array

function addBookToArray() {
    const bookTitle = document.getElementById("book-title").value;
    const bookAuthor = document.getElementById("book-author").value;
    const bookPages = parseInt(document.getElementById("book-pages").value);
    const bookStatus = "Not Read";
    let bookId = 0;

    if (idCollection.length === 0) {
    bookId = 1;
    idCollection.push(bookId);
    } else {
    bookId = idCollection.length + 1;
    idCollection.push(bookId);
    }



    const newBook = new Book(bookTitle, bookAuthor, bookPages, bookId, bookStatus)

    myLibrary.push(newBook);

    document.getElementById("book-title").value = "";
    document.getElementById("book-author").value = "";
    document.getElementById("book-pages").value = "";
}

// I am adding event listner to my add book button

const addBookBtn = document.getElementById("add-book-btn");
addBookBtn.addEventListener("click", addBookToLibrary)

console.log(addBookBtn);

// This function runs the addBookToArray by clicking on button
 
function addBookToLibrary(e) {
    e.preventDefault();
    
    addBookToArray();
    
    console.log(myLibrary);
}

// This func checks if book exist in array already

function checkBooksDisplayStatus(arrayBookId) {
    const bookId = arrayBookId;
    let bookCards = Array.from(document.querySelectorAll(".book-id"));
    let isBookDisplayed = false;

    bookCards.forEach(li => {
        const liText = li.textContent;
        const currentLiBookID = parseInt(liText.slice(liText.length - 1));
        console.log(currentLiBookID);
        console.log(bookId);
        if (bookId === currentLiBookID) {
            isBookDisplayed = true;
        }
    });

    return isBookDisplayed;
}

function changeBookStatus(e) {
    e.preventDefault();

    const statusPara = e.target.parentElement.previousSibling;
    const statusParaText = statusPara.textContent;
    if (statusParaText === "Not read"){
        e.target.parentElement.previousSibling.textContent = "In progress";
        statusPara.classList.replace("not-read", "in-progress");
    } else if (statusParaText === "In progress") {
        e.target.parentElement.previousSibling.textContent = "read";
        statusPara.classList.replace("in-progress", "read");
    } else {
        e.target.parentElement.previousSibling.textContent = "Not read";
        statusPara.classList.replace("read", "not-read");
    }
    
}


// This function adds the new book to the display

function addBooksToDisplay() {

    const bookDisplay = document.querySelector(".book-display");

    
    
    myLibrary.forEach(book => {

        if(checkBooksDisplayStatus(book.id)){
            return;
        }
        // creates the book-card div and adds the class
        const bookCardDiv = document.createElement("div");
        bookCardDiv.classList.add("book-card");

        //creates the img and appends it to the book-card div
        const bookIconImg = document.createElement("img");
        bookIconImg.src = "./images/book.svg";
        bookIconImg.alt = "Book Icon";
        bookCardDiv.appendChild(bookIconImg);

        //creates the ul and appends it to the book-card div
        const bookDetailsUl = document.createElement("ul");
        for (let i = 1; i <= 4; i++){
            const bookDetailsLi = document.createElement("li");
            switch (i) {
                case 1:
                    bookDetailsLi.textContent = `Title: ${book.title}`;
                    break;
                case 2:
                    bookDetailsLi.textContent = `Author: ${book.author}`;
                    break;
                case 3:
                    bookDetailsLi.textContent = `Pages: ${book.pages}`;
                    break;
                case 4:
                    bookDetailsLi.textContent = `ID: ${book.id}`;
                    bookDetailsLi.classList.add("book-id");
                    break;
                default:
                    break;
            }
            bookDetailsUl.appendChild(bookDetailsLi)           
        }
        bookCardDiv.appendChild(bookDetailsUl);
        
        //create the para and appends it to the book-card div
        const displayStatusPara = document.createElement("p");
        displayStatusPara.textContent = "Not read";
        displayStatusPara.classList.add("status-display");
        displayStatusPara.classList.add("not-read");
        bookCardDiv.appendChild(displayStatusPara);

        //creates the div and appends it to the book-card div
        const btnsDiv = document.createElement("div");
        btnsDiv.classList.add("book-card-btns");
        const statusBtn = document.createElement("button");
        statusBtn.textContent = "Status";
        statusBtn.addEventListener("click", changeBookStatus);
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        btnsDiv.appendChild(statusBtn);
        btnsDiv.appendChild(deleteBtn);
        bookCardDiv.appendChild(btnsDiv);

        bookDisplay.appendChild(bookCardDiv);
    });
}

//This is the display button with eventlistener

const displayBookbtn = document.getElementById("display-book-btn");
displayBookbtn.addEventListener("click", displayBookToLibrary)

// This function runs the addBooksToDisplay by clicking on button

function displayBookToLibrary (e) {
    e.preventDefault();
    addBooksToDisplay();
}

