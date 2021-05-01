import * as screenDataShower from "./screenDataShower.js";
import { calenderFunc } from "./calender.js";

// setInterval(sendHTTPRequest, 100000);
window.onload = screenDataShower.screenDataShower("Global");
window.onload = calenderFunc();

// Random Color function

const mapClickAPIDataGenerated = () => {
  const path = document.querySelectorAll("path");
  path.forEach((country) => {
    country.addEventListener("click", (e) => {
      console.log(country.id);
      screenDataShower.screenDataShower(country.id);
      screenDataShower.countryFlagShower(country.id);
    });
  });
};
mapClickAPIDataGenerated();
