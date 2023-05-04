import noUiSlider from '../nouisliderNEW/dist/nouislider.mjs';
const slider = document.querySelector('.effect-level__slider');
const imgUploadPreview = document.querySelector('.img-upload__preview');

const createSlider = () => {
  noUiSlider.create(slider, {
    start: [80],
    range: {
      min: [0],
      max: [100],
    },
  });

  slider.noUiSlider.on('update', () => {
    const value = slider.noUiSlider.get();
    updateEffect(value);
  });
};

export function updateSliderValue(value) {
  slider.noUiSlider.set(value);
}

function updateEffect(value) {
  let effectName = Array.from(imgUploadPreview.classList).find((el) =>
    el.startsWith('effects__preview--')
  );
  effectName = effectName.slice(18);
  switch (effectName) {
    case 'none':
      imgUploadPreview.style.filter = 'none';
      break;
    case 'chrome':
      imgUploadPreview.style.filter = `grayscale(${(value / 100).toFixed(1)})`;
      break;
    case 'sepia':
      imgUploadPreview.style.filter = `sepia(${(value / 100).toFixed(1)})`;
      break;
    case 'marvin':
      imgUploadPreview.style.filter = `invert(${Math.round(value)}%)`;
      break;
    case 'phobos':
      imgUploadPreview.style.filter = `blur(${((value / 100) * 3).toFixed(
        1
      )}px)`;
      break;
    case 'heat':
      imgUploadPreview.style.filter = `brightness(${
        1 + +((value / 100) * 2).toFixed(1)
      })`;

      break;
  }
}

export {createSlider};
