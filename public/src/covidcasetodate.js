fetch(
  "https://covid-193.p.rapidapi.com/country=https://covid-193.p.rapidapi.com/history?country=china&amp;day=2020-03-21",
  {
    method: "GET",
    headers: {
      "x-rapidapi-key": "3b0f2e00ebmsh95246403d9540c9p1506d4jsn3c44ce26f745",
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
    },
  }
)
  .then((response) => {})
  .catch((err) => {
    console.error(err);
  });
