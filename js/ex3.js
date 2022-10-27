const data = {
  name: "Nolann",
  countries: [
    {
      name: "France",
      year: 2000,
    },
    {
      name: "Espagne",
      year: 2002,
    },
    {
      name: "United Kingdom",
      year: 2012,
    },
    {
      name: "Canada/USA",
      year: 2022
    }
  ],
};

const postData = fetch("https://thejsway-server.herokuapp.com/api/countries",
{
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.text())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));