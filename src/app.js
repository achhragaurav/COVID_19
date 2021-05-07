import * as screenDataShower from "./screenDataShower.js";
import { calenderFunc } from "./calender.js";
import { sendHTTP } from "./sendHTTPNew.js";

console.log("Hello World");

// setInterval(sendHTTPRequest, 100000);
window.onload = screenDataShower.screenDataShower("all");
window.onload = calenderFunc();

// Random Color function

const mapClickAPIDataGenerated = () => {
  const path = document.querySelectorAll("path");
  path.forEach((country) => {
    console.log();
    country.addEventListener("click", (e) => {
      console.log(country.id);
      screenDataShower.screenDataShower(country.className);
      screenDataShower.countryFlagShower(country.id);
    });
  });
};

mapClickAPIDataGenerated();

export const allCountryDataArray = [];

const allCountryData = () => {
  sendHTTP()
    .then((res) => {
      return res.response;
    })
    .then((res) => {
      allCountryDataArray.push(...res);
    });
};
window.onload = allCountryData();
export const dataSearcher = (country) => {
  for (const countryData of allCountryDataArray) {
    if (countryData.country === country) {
      return countryData;
    }
  }
};
