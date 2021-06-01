console.log("hello");

export const counterFunction = async (element) => {
  const target = await +element.getAttribute("data-target");
  const speed = 30;
  const counter = (element) => {
    const inc = target / speed;
    if (+element.textContent <= target) {
      element.textContent = Math.floor(+element.textContent + inc);
      console.log(element.textContent);
      setTimeout(() => {
        counter(element);
      }, 100);
    } else {
      element.textContent = target;
    }
  };
  counter(element);
};
