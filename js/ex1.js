/* Tutorial 4
   Example 1 JavaScript code
*/
fetch(
  "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json"
)
  .then(response => response.json()) // Access and return response's text content
  .then(text => {
    const paintings = document.getElementById("paintings");
    paintings.innerHTML = `<tr><th>Name</th><th>Year</th><th>Artist</th></tr>`
    for (let element in text) {
      paintings.innerHTML += ` <tr><td>${text[element].name} </td><td>${text[element].year} </td><td>${text[element].artist} </td></tr>`
    }
  
  }).catch((error) => {
    console.log(error);
  });

  