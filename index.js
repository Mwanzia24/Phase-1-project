const bookListUrl = "http://localhost:3000/books/";

function fetchBooks(query) {
  const url = bookListUrl + "?q=" + query;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const books = data.books;
      populateTable(books);
    })
    .catch(error => console.error(error));
}

function populateTable(books) {
  const bookTableBody = document.getElementById("bookTableBody");
  bookTableBody.innerHTML = "";
  
  for (let book of books) {
    const row = document.createElement("tr");
    
    const titleCell = document.createElement("td");
    titleCell.innerText = book.title;
    row.appendChild(titleCell);
    
    const authorCell = document.createElement("td");
    authorCell.innerText = book.author;
    row.appendChild(authorCell);
    
    const isbnCell = document.createElement("td");
    isbnCell.innerText = book.isbn;
    row.appendChild(isbnCell);
    
    const actionsCell = document.createElement("td");
    const borrowButton = document.createElement("button");
    borrowButton.innerText = "Borrow";
    actionsCell.appendChild(borrowButton);
    row.appendChild(actionsCell);
    
    bookTableBody.appendChild(row);
  }
}

const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  const query = searchInput.value;
  fetchBooks(query);
});
