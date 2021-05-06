// import { sendHTTPRequest } from "./sendHTTPRequest.js";
import { sendHTTP } from "./sendHTTPNew.js";

export class casesDataFetcher {
  constructor(countryName) {
    this.countryName = countryName;
  }

  fetch = () => {
    return new Promise((res, rej) => {
      sendHTTP(this.countryName)
        .then((response) => {
          return response.response[0];
        })
        .then((data) => {
          console.log(data);
          this.country = data.country;
          this.cases = data.cases.total;
          this.recovered = data.cases.recovered;
          this.deaths = data.deaths.total;
          res(this);
        });
    });
  };
}
