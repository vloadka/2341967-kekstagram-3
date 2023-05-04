import { setScaleForImg, addEffect } from './effects.js';
const uploadFileButton = document.querySelector('.img-upload__input');
const uploadCancelButton = document.querySelector('.img-upload__cancel');
const formElement = document.querySelector('.img-upload__form');
const textHashtags = formElement.querySelector('.text__hashtags');
const textDescription = formElement.querySelector('.text__description');
const uploadFile = formElement.querySelector('#upload-file');
const uploadButton = document.querySelector('#upload-submit');
const scaleControlValue = document.querySelector('.scale__control--value');
const overlayElement = document.querySelector('.img-upload__overlay');

const handlerOpen = () => {
  overlayElement.classList.remove('hidden');
  document.body.classList.add('modal_open');
  setScaleForImg(100);
};

const handlerClose = () => {
  overlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  clearForm();
};

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 27) {
    handlerClose();
  }
});

// ! 3

function clearForm() {
  addEffect('none');
  scaleControlValue.value = '100%';
  textHashtags.value = '';
  textDescription.value = '';
  uploadFile.value = null;
}

const openTemplate = (className) => {
  const closeTemplate = () => {
    document.querySelector(`.${  className}`).remove();
  };
  const template = document
    .querySelector(`#${  className}`)
    .content.cloneNode(true);
  const button = template.querySelector(`.${className}__button`);
  const overlay = template.querySelector(`.${  className}`);
  const card = template.querySelector(`.${className}__inner`);
  document.body.append(template);

  card.addEventListener('click', (e) => e.stopPropagation());
  overlay.addEventListener('click', closeTemplate);
  button.addEventListener('click', closeTemplate);
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
      closeTemplate();
    }
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  uploadButton.disabled = true;

  const formData = new FormData(formElement);

  fetch('https://27.javascript.pages.academy/kekstagram-simple', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        handlerClose();
        clearForm();
        openTemplate('success');
      } else {
        handlerClose();
        openTemplate('error');
      }
    })
    .then(() => (uploadButton.disabled = false));
};

export const addFormListeners = () => {
  uploadFileButton.addEventListener('change', handlerOpen);
  uploadCancelButton.addEventListener('click', handlerClose);
  formElement.addEventListener('submit', handleSubmit);
};
