export const creater = (countryCode) => {
  return `https://flagcdn.com/48x36/${countryCode}.png`;
};
export const sideListFlagGenerator = () => {
  const flagDiv = document.querySelectorAll(".flag");
  const flags = document.querySelectorAll(".countries li h1");
  flagDiv.forEach((flag) => {
    const img = document.createElement("img");
    // https://flagpedia.net/download/api
    img.src = `https://flagcdn.com/32x24/${flag.nextElementSibling.id}.png`;
    flag.append(img);
  });
};
