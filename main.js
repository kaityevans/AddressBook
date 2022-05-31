console.clear();

const list = document.querySelector("#list");
fetch("https://randomuser.me/api/?results20")
  .then((response) => response.json())
  .then((data) => {
    let fetchedData = data.results;
  }
console.log(fetchedData)