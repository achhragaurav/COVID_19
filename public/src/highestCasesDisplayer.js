import { highestCasesData } from "./checkHighestCases.js";
import { allCountryData } from "./app.js";
import { creater } from "./flags.js";
import { countryCodeFromCountryName } from "./countryCodeFromCountryName.js";

export const highestCasesDisplayer = () => {
  return highestCasesData().then((data) => {
    const countriesUL = document.querySelector(".countriesUL");

    const infectedTableBtn = document.querySelector(
      ".cases-info-pannel button:first-of-type"
    );
    const infectedDeathBtn = document.querySelector(
      ".cases-info-pannel button:nth-of-type(2)"
    );
    const infectedRecoveredBtn = document.querySelector(
      ".cases-info-pannel button:last-of-type"
    );

    function dataSeter(info, caseOrDeath) {
      let index = 0;

      for (const each of countriesUL.children) {
        each.querySelector("h1").textContent = `${
          Object.entries(data)[index][1]["country"]
        }`;
        each.querySelector("p").textContent = `${
          Object.entries(data)[index][1]["cases"]["new"]
            ? Object.entries(data)[index][1]["cases"]["new"]
            : "NA"
        }`;
        each.querySelector("h3").textContent = `${
          Object.entries(data)[index][1][caseOrDeath][info]
            ? Object.entries(data)[index][1][caseOrDeath][info]
            : "NA"
        }`;

        // FLAG
        const flag = document.createElement("img");
        let flagCountryCode;
        countryCodeFromCountryName(Object.entries(data)[index][1]["country"])
          .then((data) => {
            flagCountryCode = data;
            return flagCountryCode;
          })
          .then((data) => {
            flag.src = creater(data.toLowerCase());
            each.querySelector(".flag img")
              ? []
              : each.querySelector(".flag").append(flag);
          });
        index++;
      }
    }
    dataSeter("total", "cases");
    infectedTableBtn.addEventListener("click", () => {
      dataSeter("total", "cases");
    });
    infectedDeathBtn.addEventListener("click", () => {
      dataSeter("total", "deaths");
    });
    infectedRecoveredBtn.addEventListener("click", () => {
      dataSeter("recovered", "cases");
    });
  });
};
