// import { checkHighestCases } from "./checkHighestCases.js";
import * as screenDataShower from "./screenDataShower.js";
import { calenderFunc } from "./calender.js";
import { sendHTTP } from "./sendHTTPNew.js";
import { highestCasesDisplayer } from "./highestCasesDisplayer.js";
import { casesUpdatedDate } from "./calender.js";

export const allCountryDataArray = [];
export const arrayOfHighestCases = [];
export const filteredCountriesArray = [];
export const previousDateArray = [];

export const loadingModal = (openOrClose, calender) => {
  let modal;
  if (calender === "calender") {
    modal = document.querySelector(".calender-loading-modal");
  } else {
    modal = document.querySelector(".loading-modal");
  }
  openOrClose === true
    ? (modal.style.display = "flex")
    : (modal.style.display = "none");
};

export const allCountryData = async () => {
  loadingModal(true);

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
      loadingModal(false);
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
const a = [1, 2, 3];
for (const aa of a) {
  if (aa === 2) {
    console.log(aa);
  }
}
const previousDateDataGenerator = (country) => {
  for (let index = 0; index < previousDateArray.length; index++) {
    const element = previousDateArray[index];
    if (element.parameters.country === country.baseVal) {
      return element.parameters.country;
    }
  }
  loadingModal(true, "calender");
  sendHTTP(country.baseVal || country, true).then((res) => {
    previousDateArray.push(res);
    console.log("Hello");
    console.log(previousDateArray);
    loadingModal(false, "calender");
    casesUpdatedDate(res);
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
