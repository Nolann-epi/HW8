function callApi(user) {
  fetch(
    `https://api.github.com/users/${user}`
  )
    .then(response => response.json()) // Access and return response's text content
    .then(response => {
      console.log(response)
      const name = document.getElementById("name");
      const blog = document.getElementById("blog");
      const date = document.getElementById("date");
      const pic = document.getElementById("pic");
      blog.innerHTML = `<td>${response.blog}</td>`
      name.innerHTML = `<td>${response.name}</td>`
      date.innerHTML = `<td>${response.created_at}</td>`
      pic.innerHTML = `<img src="${response.avatar_url}"/>`
    }).catch((error) => {
      console.log(error);
    });
}

const tables = document.getElementById("tables");
const btn = document.getElementById("btn");
const user = document.getElementById("user_input")

btn.addEventListener("click", function() {
  const user = document.getElementById("user_input")
  callApi(user.value);
});
