import { casesDataFetcher } from "./casesDataFetcher.js";
import { countryCodeFromCountryName } from "./countryCodeFromCountryName.js";
import { creater } from "./flags.js";

export const screenDataShower = async (country) => {
  const dataStorage = [];
  const globalInfected = document.querySelector(".infected h2");
  const globalActive = document.querySelector(".active h2");
  const globalDeaths = document.querySelector(".deaths h2");
  const globalRecovered = document.querySelector(".recovered h2");

  const _casesDataFetcher = new casesDataFetcher(country);
  const data = await _casesDataFetcher.fetch();

  globalInfected.textContent = `${data.cases}`;
  globalActive.textContent = data.cases - data.recovered - data.deaths;
  globalDeaths.textContent = data.deaths;
  globalRecovered.textContent = data.recovered;
};
export const countryFlagShower = async (country) => {
  const flagGen = document.querySelector(".flagGen");
  const flagi = document.querySelector(".flagGen i");
  const flagImg = document.querySelector(".flagGen img");

  const flagCountry = document.querySelector(".countries p");
  const countriesName = document.querySelector(".countries h2");
  const getCountryCode = await countryCodeFromCountryName(country);
  const flagLink = creater(getCountryCode);
  const createFlagImage = document.createElement("img");
  createFlagImage.src = flagLink;
  // if (condition) {
  // }
  flagCountry.textContent = "Country";
  countriesName.textContent = country;
  if (flagi) {
    flagGen.append(createFlagImage);
    flagGen.removeChild(flagi);
  } else if (flagImg) {
    flagImg.src = flagLink;
  }
};
