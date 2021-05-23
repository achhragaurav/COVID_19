import { allCountryDataArray } from "./app.js";
import { dataSearcher } from "./app.js";
const modal = document.querySelector(".search-modal");
const btn = document.querySelector(".map-section-buttons button");
const closeBtn = document.querySelector(".closeModal button");
const searchBTN = document.querySelector(".searchCountryBtn button");
const searchBar = document.querySelector("#searchBar");
const openCloseModal = () => {
  modal.classList.toggle("search-modal-new");
};

export const searchBtnFunction = () => {
  openCloseModal();
};

closeBtn.addEventListener("click", () => {
  console.log("hello");
  modal.classList.remove("search-modal-new");
});
document.addEventListener("click", (e) => {
  console.log(modal.classList);
  console.log(e.target);
  if (
    e.target.closest(".search-modal-new") ||
    e.target.closest(".map-section-buttons button")
  )
    return;
  modal.classList.remove("search-modal-new");
});
console.log(closeBtn);

const modalSearchFunction = (e) => {
  if (modal.classList.contains("search-modal-new")) {
    const stringss = new RegExp(/^[a-zA-Z]+$/);
    setTimeout(() => {
      if (stringss.test(e.key)) {
        console.log(e.key);
        const regexCreator = new RegExp(`^${searchBar.value}`);
        console.log(searchBar.value);

        modal.querySelector("ul").innerHTML = "";
        allCountryDataArray.forEach((element) => {
          if (regexCreator.test(element.country)) {
            console.log(element);
            const li = document.createElement("li");
            const p = document.createElement("p");
            p.textContent = `${element.country}`;
            li.append(p);
            li.addEventListener("click", () => {
              console.log(element);
            });
            modal.querySelector("ul").append(li);
          }
        });
      }
    }, 10);
  }
};

searchBTN.addEventListener("click", modalSearchFunction);
window.addEventListener("keypress", modalSearchFunction);
