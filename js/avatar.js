const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const SIZE_PHOTO = '70px';
const AVATAR_DEFAULT = 'img/muffin-grey.svg';

const avatarChooser = document.querySelector('.ad-form__field .ad-form-header__input');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const photoChooser = document.querySelector('.ad-form__upload .ad-form__input');
const photoPreview = document.querySelector('.ad-form__photo');

avatarChooser.addEventListener('change', () => {
  const avatar = avatarChooser.files[0];
  const avatarName = avatar.name.toLowerCase();

  const matches = FILE_TYPES.some((item) => avatarName.endsWith(item));

  if (matches) {
    avatarPreview.src = URL.createObjectURL(avatar);
  }
});

const imgTag = document.createElement('img');

photoChooser.addEventListener('change', () => {
  const photo = photoChooser.files[0];
  const photoName = photo.name.toLowerCase();

  const matches = FILE_TYPES.some((item) => photoName.endsWith(item));

  if (matches) {
    imgTag.style.width = SIZE_PHOTO;
    imgTag.style.height = SIZE_PHOTO;
    imgTag.src = URL.createObjectURL(photo);
    photoPreview.appendChild(imgTag);
  }
});

const clearAvatar = () => avatarPreview.src = AVATAR_DEFAULT;

const clearPhoto = () => imgTag.remove();

export {
  clearAvatar,
  clearPhoto
};
