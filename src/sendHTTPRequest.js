import { countryCap } from "./capitalizingFunc.js";
// https://rapidapi.com/KishCom/api/covid-19-coronavirus-statistics/discussions
export const sendHTTPRequest = (country) => {
  const capitalisedCountry = countryCap(country);
  return fetch(
    `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=${capitalisedCountry}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "3b0f2e00ebmsh95246403d9540c9p1506d4jsn3c44ce26f745",
        "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
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
