const bookDetailsUrl = "http://localhost:3000/books/";

function fetchBookDetailsById(id) {
  const url = bookDetailsUrl + id;
  
  fetch(url)
    .then(response => response.json())
    .then(book => {
      console.log(book); // replace with your code to display book details
    })
    .catch(error => console.error(error));
}

// Example usage
const searchButton = document.getElementById("searchButton");
const bookIdInput = document.getElementById("bookIdInput");

searchButton.addEventListener("click", () => {
  const bookId = bookIdInput.value;
  fetchBookDetailsById(bookId);
});
