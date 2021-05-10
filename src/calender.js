import { previousDateDataSearcher } from "./app.js";
import { screenDataShower } from "./screenDataShower.js";

export const calenderFunc = () => {
  const datesUL = document.querySelector(".dates ul");
  const datesLeft = document.getElementById("left");
  const datesRight = document.getElementById("right");
  const date = new Date();
  const todayDate = date.getDate();
  let year = date.getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const monthDiv = document.querySelector(".month-div");
  const yearDiv = document.querySelector(".year-div");
  let displayMonth = currentMonth;

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
  let dayss = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  let displayMonthName = monthNames[displayMonth - 1];
  monthDiv.textContent = displayMonthName;
  yearDiv.textContent = year;

  function getNumberOfDays(year, month) {
    let numDays = new Date(year, month, 0).getDate();
    return numDays;
  }

  let totalRenderedDaysDisplayMonth = getNumberOfDays(displayMonth, year);

  const renderCal = (date, month, year, beafter) => {
    const daysULLI = document.querySelectorAll(".days ul li");
    const datesUL = document.querySelector(".dates ul");

    for (const [i, days] of daysULLI.entries()) {
      days.id = i;
      console.log(i, days);
    }
    const monthUL = document.createElement("ul");
    monthUL.className = `${month}`;
    // render total dates in display month
    for (let index = 1; index < totalRenderedDaysDisplayMonth; index++) {
      const eachDate = document.createElement("li");
      const dayOfDate = document.createElement("span");
      let displayMonth1DateDay = new Date(
        `${month} ${index}, ${year} 23:15:30`
      ).getDay();

      eachDate.id = index;
      eachDate.textContent = index;
      eachDate.className = dayss[displayMonth1DateDay];
      dayOfDate.textContent = eachDate.className;
      eachDate.append(dayOfDate);
      monthUL.append(eachDate);
      eachDate.addEventListener("click", (e) => {
        let completeDate = `${year}-${
          displayMonth.toString().length === 2
            ? displayMonth
            : "0" + displayMonth
        }-${eachDate.id.length === 2 ? eachDate.id : "0" + eachDate.id}`;
        console.log(completeDate, eachDate.id.length);
        const previousDatesData = previousDateDataSearcher();
        console.log(previousDatesData);
        for (const iterator of previousDatesData.response) {
          if (iterator.day === completeDate) {
            screenDataShower("", iterator);
          }
        }
        todayDateHighLighter(eachDate);
        // console.log(previousDateDataDisplayer());
      });
    }
    if (beafter) {
      datesUL.insertBefore(monthUL, datesUL.firstChild);
    } else {
      datesUL.appendChild(monthUL);
    }
  };
  renderCal(todayDate, displayMonthName, year);

  const todayDateHighLighter = (liElem) => {
    const todayMonthUL = datesUL.firstElementChild;
    if (liElem) {
      const allLI = todayMonthUL.children;
      for (const li of allLI) {
        console.log(li);
        li.style.backgroundColor = "#282b2e";
        li.style.color = "white";
        li.style.borderRadius = "100%";
      }
      liElem.style.backgroundColor = "white";
      liElem.style.color = "black";
      liElem.style.borderRadius = "50%";
    } else if (todayMonthUL.className === monthNames[displayMonth - 1]) {
      const todayMonthDatesLI = todayMonthUL.querySelectorAll("li");
      todayMonthDatesLI.forEach((li) => {
        if (li.id === todayDate.toString()) {
          li.style.backgroundColor = "white";
          li.style.color = "black";
          li.style.borderRadius = "50%";
          li.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    }
  };

  const paddingAdder = () => {
    const datesLi = datesUL.querySelectorAll("ul li");

    datesLi.forEach((li) => {
      if (li.clientWidth === 9) {
        li.style.paddingLeft = "19.516px";
        li.style.paddingRight = "19.516px";
      } else if (li.clientWidth === 0) {
        li.style.paddingLeft = "24.02px";
        li.style.paddingRight = "24.02px";
      } else {
        li.style.paddingLeft = "15.01px";
        li.style.paddingRight = "15.01px";
      }
    });
  };
  paddingAdder();
  const monthAndYearAdder = (rightOrLeft) => {
    if (rightOrLeft === "left") {
      if (displayMonth === 1) {
        displayMonth = 12;
        year--;
      } else {
        displayMonth--;
      }

      displayMonthName = monthNames[displayMonth - 1];
      renderCal("", displayMonthName, year, true);
      monthDiv.textContent = displayMonthName;
      yearDiv.textContent = year;

      paddingAdder();
      datesUL.querySelector("ul li:last-child").scrollIntoView();
    } else if (rightOrLeft === "right") {
      if (displayMonth === 12) {
        console.log(displayMonth);
        displayMonth = 1;
        year++;
      } else {
        displayMonth++;
        console.log(displayMonth, year);
      }
      displayMonthName = monthNames[displayMonth - 1];
      renderCal("", displayMonthName, year);
      monthDiv.textContent = displayMonthName;
      yearDiv.textContent = year;
    }
  };

  datesLeft.addEventListener("click", () => {
    if (datesUL.querySelector("ul:first-of-type").scrollLeft === 0) {
      monthAndYearAdder("left");
      paddingAdder();
      datesUL
        .querySelector("ul:nth-of-type(2)")
        .querySelector("li")
        .scrollIntoView();
      datesUL.lastElementChild.remove();
    } else {
      datesUL.querySelector("ul").scrollBy({
        left: -335,
        behavior: "smooth",
      });
    }
  });

  datesRight.addEventListener("click", () => {
    if (datesUL.querySelector("ul:first-of-type").scrollLeft > 1100) {
      monthAndYearAdder("right");
      paddingAdder();
      datesUL
        .querySelector("ul:first-of-type")
        .querySelector("li")
        .scrollIntoView();
      datesUL.firstElementChild.remove();
    } else {
      datesUL.querySelector("ul").scrollBy({
        left: 335,
        behavior: "smooth",
      });
    }
  });
  todayDateHighLighter();
};
