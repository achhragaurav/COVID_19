const daysUL = document.querySelector(".days ul");
const datesUL = document.querySelector(".dates ul");
const datesLeft = document.getElementById("left");
const datesRight = document.getElementById("right");
let counter = 0;

const datesLi = datesUL.querySelectorAll("li");

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

datesLeft.addEventListener("click", () => {
  counter >= 0 ? null : (counter -= 170);

  datesUL.scrollBy({
    left: -335,
    behavior: "smooth",
  });
});
datesRight.addEventListener("click", () => {
  counter += 160;

  datesUL.scrollBy({
    left: 335,
    behavior: "smooth",
  });
});
