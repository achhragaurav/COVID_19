import { casesDataFetcher } from "./casesDataFetcher.js";
import { creater } from "./flags.js";
import { dataSearcher } from "./app.js";

export const screenDataShower = async (country, passedData) => {
  const globalInfected = document.querySelector(".infected h2");
  const globalActive = document.querySelector(".active h2");
  const globalDeaths = document.querySelector(".deaths h2");
  const globalRecovered = document.querySelector(".recovered h2");
  const countriesName = document.querySelector(".countries h2");
  const addedCasesInfected = document.querySelector(".msc:first-of-type h5");
  const addedCasesActive = document.querySelector(".msc:nth-of-type(2) h5");
  const addedCasesDeath = document.querySelector(".msc:nth-of-type(3) h5");

  if (country === "all") {
    const _casesDataFetcher = new casesDataFetcher(country);
    const data = await _casesDataFetcher.fetch();
    console.log(data);
    globalInfected.textContent = `${data.cases}`;
    globalActive.textContent = data.cases - data.recovered - data.deaths;
    globalDeaths.textContent = data.deaths;
    globalRecovered.textContent = data.recovered;
    addedCasesInfected.textContent = data.newCases;
    addedCasesActive.textContent = data.newCases;
    addedCasesDeath.textContent = data.newDeaths;
  } else if (country === "" && passedData) {
    globalInfected.textContent = `${passedData.cases.total}`;
    globalActive.textContent = passedData.cases.active;
    globalDeaths.textContent = passedData.deaths.total;
    globalRecovered.textContent = passedData.cases.recovered;
    addedCasesInfected.textContent = passedData.cases.new;
    addedCasesActive.textContent = passedData.cases.new;
    addedCasesDeath.textContent = passedData.deaths.new;
  } else {
    const dataa = await dataSearcher(country.baseVal);
    console.log(dataa);
    globalInfected.textContent = `${dataa.cases.total}`;
    globalActive.textContent = dataa.cases.active;
    globalDeaths.textContent = dataa.deaths.total;
    globalRecovered.textContent = dataa.cases.recovered;
    countriesName.textContent = country.baseVal;
    addedCasesInfected.textContent = dataa.cases.new;
    addedCasesActive.textContent = dataa.cases.new;
    addedCasesDeath.textContent = dataa.deaths.new;
  }
};
export const countryFlagShower = async (country) => {
  const flagGen = document.querySelector(".flagGen");
  const flagi = document.querySelector(".flagGen i");
  const flagImg = document.querySelector(".flagGen img");

  const flagCountry = document.querySelector(".countries p");
  const getCountryCode = country.toLowerCase();
  const flagLink = creater(getCountryCode);
  const createFlagImage = document.createElement("img");
  createFlagImage.src = flagLink;
  // if (condition) {
  // }
  flagCountry.textContent = "Country";
  console.log(country);
  if (flagi) {
    flagGen.append(createFlagImage);
    flagGen.removeChild(flagi);
  } else if (flagImg) {
    flagImg.src = flagLink;
  }
};
