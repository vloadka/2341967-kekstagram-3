import {createDescriptions} from './data.js';
import { drawMinisPhoto } from './mini-photo.js';

const descriptions = createDescriptions();
console.log(descriptions);
drawMinisPhoto(descriptions);
console.log(descriptions.length);

