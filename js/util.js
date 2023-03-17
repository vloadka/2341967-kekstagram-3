//источник - Получить функции от Кекса
//https://up.htmlacademy.ru/univer-js1/3/tasks/6
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
getRandomPositiveInteger(0,10);

const lengthStringСheck = (string, maxLength) => string.length <= maxLength;
lengthStringСheck('123',4);

export{getRandomPositiveInteger, lengthStringСheck};