import { updateSliderValue } from './slider.js';
const scaleControlSmallerButton = document.querySelector('.scale__control--smaller');
const scaleControlBiggerButton = document.querySelector('.scale__control--bigger');

const imgUploadPreview = document.querySelector('.img-upload__preview');
const scaleControlValue = document.querySelector('.scale__control--value');
imgUploadPreview.classList.add('effects__preview--none');

export function setScaleForImg(scale) {
  scaleControlValue.value = `${scale}%`;
  imgUploadPreview.style.transform = `scale(${scale / 100})`;
}

const makeSmaller = () => {
  let prev = scaleControlValue.value;
  prev = +prev.substr(0, prev.length - 1);

  if (prev > 25) {
    prev -= 25;
  }
  setScaleForImg(prev);
};

const makeBigger = () => {
  let prev = scaleControlValue.value;
  prev = +prev.substr(0, prev.length - 1);

  if (prev < 100) {
    prev += 25;
  }
  setScaleForImg(prev);
};
//effects

const effectsButtonsArray = document.querySelectorAll('.effects__radio');

export const addEffect = (effect) => {
  const classes = Array.from(imgUploadPreview.classList);

  const classesToDelete = classes.filter((x) =>
    x.startsWith('effects__preview--')
  );
  classesToDelete.forEach((x) => imgUploadPreview.classList.remove(x));

  const className = `effects__preview--${effect}`;
  imgUploadPreview.classList.add(className);

  updateSliderValue(80);
};

export function addEffectListeners() {
  scaleControlSmallerButton.addEventListener('click', makeSmaller);
  scaleControlBiggerButton.addEventListener('click', makeBigger);
  for (const button of effectsButtonsArray) {
    button.addEventListener('click', () => addEffect(button.value));
  }
}
