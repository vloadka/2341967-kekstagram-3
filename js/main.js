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


const DESCRIPTIONS = [
  'Жизнь — это всего лишь серия крошечных чудес, поэтому обратите внимание на них',
  'Жизнь похожа на фотографию',
  'Котики',
  'Животные',
  'Люблю золотое яблоко',
  'hello!!!'
];

const DESCRIPTIONS_COUNT = 25;
let idNumber = 1;
let urlNumber = 1;

const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)]
};

const createDescription = () => {
return{
  id: idNumber++ ,
  url: `photos/${urlNumber++}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(15,200),
  comments: getRandomPositiveInteger(0, 200)
}};

const arrayOfDescription = Array.from({length: DESCRIPTIONS_COUNT}, createDescription);
console.log(arrayOfDescription);
