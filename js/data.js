const url = 'https://27.javascript.pages.academy/kekstagram-simple/data';

export const createDescriptions = async () => await fetch(url)
  .then((response) => response.json())
  .catch(() => []);
