console.clear();

const list = document.querySelector("#list");
fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((data) => {
    let fetchedData = data.results;