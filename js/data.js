import {getRandomPositiveInteger} from './util.js';

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

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createDescription = () => ({
  id: idNumber++ ,
  url: `photos/${urlNumber++}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(15,200),
  comments: getRandomPositiveInteger(0, 200)
});

const arrayOfDescription = () =>  Array.from({length: DESCRIPTIONS_COUNT}, createDescription);
//arrayOfDescription();

export {arrayOfDescription};
