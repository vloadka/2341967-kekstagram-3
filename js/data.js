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

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createDescription = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(15,200),
  comments: getRandomPositiveInteger(0, 200)
});

const createDescriptions =  () =>  Array.from({length: DESCRIPTIONS_COUNT}, (_ ,index) => createDescription(index+1));
//arrayOfDescription();

export {createDescriptions};
