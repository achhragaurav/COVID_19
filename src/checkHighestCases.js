import { allCountryData, filteredCountriesArray } from "./app.js";
import { allCountryDataArray } from "./app.js";
import { arrayOfHighestCases } from "./app.js";

export const highestCasesData = async () => {
  return allCountryData().then((res) => {
    const arrayofHigh = filteredCountriesArray.sort((a, b) => {
      if (a.cases.total < b.cases.total) {
        return 1;
      } else if (a.cases.total > b.cases.total) {
        return -1;
      } else {
        return 0;
      }
    });
    console.log(arrayofHigh);
    const slicedArray = arrayofHigh.slice(1, 7);
    for (let index = 0; index < slicedArray.length; index++) {
      arrayOfHighestCases.push(slicedArray[index]);
      console.log(index);
    }

    console.log(arrayOfHighestCases);
    return arrayOfHighestCases;
  });

  // });
};
