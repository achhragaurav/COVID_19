export const countryCodeFromCountryName = (country) => {
  return fetch(
    `https://restcountries.eu/rest/v2/name/${
      country === "Russia" ? "Russian Federation" : country
    }?fullText=true`,
    {
      method: "GET",
    }
  )
    .then((data) => {
      const datarec = data.json();
      return datarec;
    })
    .then((datarec) => {
      return datarec[0].alpha2Code;
    });
};
