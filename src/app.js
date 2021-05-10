// import { checkHighestCases } from "./checkHighestCases.js";
import * as screenDataShower from "./screenDataShower.js";
import { calenderFunc } from "./calender.js";
import { sendHTTP } from "./sendHTTPNew.js";
import { highestCasesDisplayer } from "./highestCasesDisplayer.js";

export const allCountryDataArray = [];
export const arrayOfHighestCases = [];
export const filteredCountriesArray = [];
export const previousDateArray = [];

export const allCountryData = async () => {
  return sendHTTP()
    .then((res) => {
      return res.response;
    })
    .then((res) => {
      allCountryDataArray.push(...res);
      for (let index = 0; index < res.length; index++) {
        if (res[index].continent === res[index].country) {
          continue;
        } else {
          filteredCountriesArray.push(res[index]);
        }
      }
      return allCountryDataArray;
    });

  // Highest Cases
};
console.log("Hello World");

// setInterval(sendHTTPRequest, 100000);
window.onload = screenDataShower.screenDataShower("all");
window.onload = calenderFunc();

// Random Color function

const mapClickAPIDataGenerated = () => {
  const path = document.querySelectorAll("path");
  path.forEach((country) => {
    country.addEventListener("click", (e) => {
      screenDataShower.screenDataShower(country.className);
      screenDataShower.countryFlagShower(country.id);
      previousDateDataGenerator(country.className);
    });
  });
};

mapClickAPIDataGenerated();

export const dataSearcher = (country) => {
  for (const countryData of allCountryDataArray) {
    if (countryData.country === country) {
      return countryData;
    }
  }
};
highestCasesDisplayer();

// checkHighestCases();

// const highestCasesDisplayer = () => {
//   console.log(highestCasesData);
// };

// highestCasesDisplayer();

const previousDateDataGenerator = (country) => {
  console.log(country);
  sendHTTP(country.baseVal || country, true).then((res) => {
    previousDateArray.push(res);
    console.log(previousDateArray);
  });
};
previousDateDataGenerator("all");
export const previousDateDataSearcher = () => {
  const displayedCountry = document.querySelector(".countries h2");
  const country = `${
    displayedCountry.textContent === "237"
      ? "all"
      : displayedCountry.textContent
  }`;
  console.log(country);
  for (let index = 0; index < previousDateArray.length; index++) {
    console.log(previousDateArray[index], country);
    if (previousDateArray[index].parameters.country === country) {
      console.log("Hello");
      return previousDateArray[index];
    }
  }
};
