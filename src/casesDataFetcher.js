import { sendHTTPRequest } from "./sendHTTPRequest.js";

export class casesDataFetcher {
  constructor(countryName) {
    this.countryName = countryName;
  }

  fetch = () => {
    return new Promise((res, rej) => {
      sendHTTPRequest(this.countryName)
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          this.country = data.location;
          this.cases = data.confirmed;
          this.recovered = data.recovered;
          this.deaths = data.deaths;
          res(this);
        });
    });
  };
}
