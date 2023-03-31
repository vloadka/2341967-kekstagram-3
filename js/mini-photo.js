const template = document.querySelector('#picture').content;
const picture = template.querySelector('.picture');
const pictures = document.querySelector('.pictures');

const drawMinisPhoto = (photos) => {
  const fragment = document.createDocumentFragment();

  for (const photo of photos) {
    const newPicture = picture.cloneNode(true);
    const image = newPicture.querySelector('.picture__img');
    const comments = newPicture.querySelector('.picture__comments');
    const likes = newPicture.querySelector('.picture__likes');
    image.src = photo.url;
    comments.textContent = photo.comments;
    likes.textContent = photo.likes;
    fragment.appendChild(newPicture);
   }
   pictures.append(fragment);
}
export {drawMinisPhoto};
