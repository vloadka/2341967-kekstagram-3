const uploadFileButton = document.querySelector('.img-upload__input');
const uploadCancelButton = document.querySelector('.img-upload__cancel');

const handlerOpen = () => {
  const overlayElement = document.querySelector('.img-upload__overlay');
  overlayElement.classList.remove('hidden');
  document.body.classList.add('modal_open');
};

const handlerClose = () => {
  const overlayElement = document.querySelector('.img-upload__overlay');
  overlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 27) {
    handlerClose();
  }
});

uploadFileButton.addEventListener('change', handlerOpen);
uploadCancelButton.addEventListener('click', handlerClose);

