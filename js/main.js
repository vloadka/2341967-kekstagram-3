import { createDescriptions } from './data.js';
import { drawMinisPhoto } from './mini-photo.js';
import { addEffectListeners } from './effects.js';
import { addFormListeners } from './form.js';
import { createSlider } from './slider.js';

createDescriptions().then((data) => drawMinisPhoto(data));
createSlider();
addFormListeners();
addEffectListeners();
