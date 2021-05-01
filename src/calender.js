export const calenderFunc = () => {
  const datesUL = document.querySelector(".dates ul");
  const datesLeft = document.getElementById("left");
  const datesRight = document.getElementById("right");
  let counter = 0;
  const date = new Date();
  const day = date.getDate();
  let year = date.getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const monthDiv = document.querySelector(".month-div");
  const yearDiv = document.querySelector(".year-div");
  let displayMonth = currentMonth;
  let currentInViewUL = datesUL.displayMonth;

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
  console.log(displayMonthName);
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
    }
    if (beafter) {
      datesUL.insertBefore(monthUL, datesUL.firstChild);
    } else {
      datesUL.appendChild(monthUL);
    }
  };
  renderCal("", displayMonthName, year);

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
      datesUL.querySelectorAll("ul").forEach((ul) => {
        ul.style.width = "0%";
      });
      if (displayMonth === 1) {
        console.log(displayMonth);
        displayMonth = 12;
        year--;
      } else {
        displayMonth--;
      }

      displayMonthName = monthNames[displayMonth - 1];
      renderCal("", displayMonthName, year, true);
      console.log(displayMonthName, year);
      monthDiv.textContent = displayMonthName;
      yearDiv.textContent = year;

      paddingAdder();
      datesUL.firstChild.style.width = "100%";
      console.log(datesUL.firstChild);
      datesUL.querySelector("ul li:last-child").scrollIntoView();
    } else if (rightOrLeft === "right") {
      if (displayMonth === 12) {
        console.log(displayMonth);
        displayMonth = 1;
        year++;
        console.log(displayMonth, year);
      } else {
        displayMonth++;
        console.log(displayMonth, year);
      }
      displayMonthName = monthNames[displayMonth - 1];
      renderCal("", displayMonthName, year);
      console.log(displayMonthName, year);
      monthDiv.textContent = displayMonthName;
      yearDiv.textContent = year;
    }
  };

  datesLeft.addEventListener("click", () => {
    counter--;
    let target = datesUL.querySelector(`.${displayMonthName}`);
    if ((target.scrollLeft === 0 && counter === -1) || counter % 5 === 0) {
      monthAndYearAdder("left");
    } else {
      target.scrollBy({
        left: -335,
        behavior: "smooth",
      });
    }
  });
  //Test
  // datesUL.querySelector("ul").addEventListener("scroll", (e) => {
  //   console.log(e);
  //   console.log(datesUL.querySelector("ul").scrollLeft);
  // });
  //Test
  datesRight.addEventListener("click", () => {
    counter++;
    let target = datesUL.querySelector(`.${displayMonthName}`);
    console.log(counter);
    if (target.scrollLeft >= 1200 && counter % 5 === 0) {
      console.log("hello");
      monthAndYearAdder("right");
      paddingAdder();
      target.querySelector("li").scrollIntoView();
    } else {
      console.log("work");
      console.log(target);
      target.scrollBy({
        left: 335,
        behavior: "smooth",
      });
    }
  });
};
