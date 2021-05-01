export const countryCodeFromCountryName = (country) => {
  return fetch(
    `https://restcountries.eu/rest/v2/name/${country}?fullText=true`,
    {
      method: "GET",
    }
  )
    .then((data) => {
      const datarec = data.json();
      return datarec;
    })
    .then((datarec) => {
      console.log(country);
      console.log(datarec);
      return datarec[0].alpha2Code.toLowerCase();
    });
};
