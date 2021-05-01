export const countryCap = ([firstChar, ...rest]) =>
  `${firstChar.toUpperCase()}${rest.join("")}`;
