import { countryCodeFromCountryName } from "./countryCodeFromCountryName.js";
import { screenDataShower } from "./screenDataShower.js";
import { countryFlagShower } from "./screenDataShower.js";

// setInterval(sendHTTPRequest, 100000);
window.onload = screenDataShower("Global");
// Random Color function

const mapClickAPIDataGenerated = () => {
  const path = document.querySelectorAll("path");
  path.forEach((country) => {
    country.addEventListener("click", (e) => {
      console.log(country.id);
      screenDataShower(country.id);
      countryFlagShower(country.id);
    });
  });
};
mapClickAPIDataGenerated();
const newFunc = () => {
  console.log("Hell");
};
newFunc();
