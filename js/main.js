//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

//We copied this to be on page load so this way everytime we refresh it will NOT remove the book on the DOM
document.querySelector("h2").innerText = localStorage.getItem("books");

function getFetch() {
  const choice = document.querySelector("input").value;
  console.log(choice);
  const url = `https://openlibrary.org/isbn/${choice}.json`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data.title);
      //When we get localStorage.getItem('books') if there was nothing in localStorage we would get null, so what we said is HEY if its falsey !localStorage we need to put something into localStorage.
      if (!localStorage.getItem("books")) {
        localStorage.setItem("books", data.title);
      } else {
        let books = localStorage.getItem("books") + " ; " + data.title;
        localStorage.setItem("books", books);
      }
      //put title into localStorage, setting the value into localStorage. So here we get what is in actual localStorage from the page load, THEN add/ concactinate the new book/ data.title. The + ' ; ' is just adding that inbetween the name of books. This is being stored to books variable
      // let books = localStorage.getItem("books") + " ; " + data.title;
      //getting the value out of localStorage
      // localStorage.setItem("books", books);
      //and then adding it to the dom here
      document.querySelector("h2").innerText = localStorage.getItem("books");
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
