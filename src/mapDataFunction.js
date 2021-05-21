import { calenderFunc } from "./calender.js";
import { drawChart } from "./graph.js";

export const mapDataFunction = (data) => {
  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthNameOne = monthNames[month - 1];
  let monthNameTwo = monthNames[month - 2];
  let monthNameThree = monthNames[month - 3];
  let monthNameFour = monthNames[month - 4];

  const monthArray = [
    monthNameOne,
    monthNameTwo,
    monthNameThree,
    monthNameFour,
  ];

  const assembledDate = `${year}-${
    month.toString().length === 1 ? "0" + month.toString() : month
  }-${date.toString().length === 1 ? "0" + date.toString() : date}`;
  const assembledDateTwo = `${year}-${
    month.toString().length === 1 ? "0" + (month - 1).toString() : month
  }-${date.toString().length === 1 ? "0" + date.toString() : date}`;
  const assembledDateThree = `${year}-${
    month.toString().length === 1 ? "0" + (month - 2).toString() : month
  }-${date.toString().length === 1 ? "0" + date.toString() : date}`;
  const assembledDateFour = `${year}-${
    month.toString().length === 1 ? "0" + (month - 3).toString() : month
  }-${date.toString().length === 1 ? "0" + date.toString() : date}`;

  console.log(assembledDate);

  const ArrayOfCasesForMap = [];
  let monthOneData;
  let monthTwoData;
  let monthThreeData;
  let monthFourData;

  for (let index = 0; index < data.response.length; index++) {
    const element = data.response[index];
    if (element.day === assembledDate) {
      monthOneData = element.cases.total;
      console.log(element.cases.total);
      break;
    }
  }
  for (let index = 0; index < data.response.length; index++) {
    const element = data.response[index];
    if (element.day === assembledDateTwo) {
      monthTwoData = element.cases.total;
      console.log(element.cases.total);
      break;
    }
  }
  for (let index = 0; index < data.response.length; index++) {
    const element = data.response[index];
    if (element.day === assembledDateThree) {
      monthThreeData = element.cases.total;
      console.log(element.cases.total);
      break;
    }
  }
  for (let index = 0; index < data.response.length; index++) {
    const element = data.response[index];
    if (element.day === assembledDateFour) {
      monthFourData = element.cases.total;
      console.log(element.cases.total);
      break;
    }
  }
  ArrayOfCasesForMap.push(monthOneData);
  ArrayOfCasesForMap.push(monthTwoData);
  ArrayOfCasesForMap.push(monthThreeData);
  ArrayOfCasesForMap.push(monthFourData);
  console.log(ArrayOfCasesForMap);
  drawChart(ArrayOfCasesForMap, monthArray);
  return ArrayOfCasesForMap;
};

//  else if (element.day === assembledDateTwo) {
//   monthTwoData = element.cases.total;
//   console.log(element.cases.total);
// } else if (element.day === assembledDateThree) {
//   monthTwoData = element.cases.total;
//   console.log(element.cases.total);
// } else if (element.day === assembledDateFour) {
//   monthTwoData = element.cases.total;
//   console.log(element.cases.total);
// }
