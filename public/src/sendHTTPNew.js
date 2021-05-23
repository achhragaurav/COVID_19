"https://covid-193.p.rapidapi.com/history?country=all";
export const sendHTTP = (country, history) => {
  return fetch(
    `https://covid-193.p.rapidapi.com/${history ? "history" : "statistics"}${
      country ? `?country=${country}` : ""
    }`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "3b0f2e00ebmsh95246403d9540c9p1506d4jsn3c44ce26f745",
      },
    }
  )
    .then((response) => {
      const newResponse = response.json().then((jsonResponse) => jsonResponse);
      return newResponse;
    })

    .catch((err) => {
      console.error(err);
    });
};

// Testing

const data = sendHTTP("all")
  .then((data) => {
    console.log(data.response);
    return data.response;
  })
  .then((data) => {
    for (const iterator of data) {
      if (iterator.country === "India") {
        console.log(iterator.cases.total);
      }
    }
  });
