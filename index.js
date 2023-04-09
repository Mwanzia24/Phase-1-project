const bookDetailsUrl = "http://localhost:3000/books/";

function fetchBookDetailsById(id) {
  const url = bookDetailsUrl + id;
  
  fetch(url)
    .then(response => response.json())
    .then(book => {
      console.log(book); 
    })
    .catch(error => console.error(error));
}


const searchButton = document.getElementById("searchButton");
const bookIdInput = document.getElementById("bookIdInput");

searchButton.addEventListener("click", () => {
  const bookId = bookIdInput.value;
  fetchBookDetailsById(bookId);
});
