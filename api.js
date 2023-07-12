let input = document.getElementById('input'); 
let display = document.getElementById('display');
// let main = document.querySelector('main');
function searchBook() {
    event.preventDefault()
    let api = `https://www.googleapis.com/books/v1/volumes?q=${input.value}`;
    fetch(api)
    .then((response) =>  response.json())
    .then((data) =>{ 
        display.innerHTML = ""
        let item = data.items;
        item.map((book) => {
            let books = document.createElement("div");
            let boo =  `
       <div class="books">
        <img src="${book.volumeInfo.imageLinks.thumbnail}">
        <p class="">${book.volumeInfo.title}</p>
        <a href="${book.volumeInfo.infoLink}" target="_blank">Know More</a>
        <a href="${book.volumeInfo.previewLink}" target="_blank">Read Book</a>
        </div> 
       `
       books.innerHTML = boo;
       display.appendChild(books);
        })
    })
    .catch((err) => alert('error'));
    input.value = "";   
}