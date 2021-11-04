const successPopup = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorPopup = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const retryButton = errorPopup.querySelector('.error__button');

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';
const isEnterEvent = (evt) => evt.key === 'Enter';

successPopup.classList.add('hidden');
errorPopup.classList.add('hidden');
document.body.append(successPopup);
document.body.append(errorPopup);

const closeModal = (modal) => {
  modal.classList.add('hidden');
};

const onClick = (modal) => (evt) => {
  evt.preventDefault();
  closeModal(modal);
};

const onPopupKeydown = (modal) => (evt) => {
  if (isEscEvent(evt) || isEnterEvent(evt)) {
    evt.preventDefault();
    document.removeEventListener('keydown', onPopupKeydown(modal));
    modal.removeEventListener('click', onClick(modal));
    closeModal(modal);
  }
  if (modal === errorPopup) {
    retryButton.removeEventListener('click', onClick(errorPopup));
  }
};

const showModal = (modal) => {
  modal.classList.remove('hidden');
  document.addEventListener('keydown', onPopupKeydown(modal));
  modal.addEventListener('click', onClick(modal));
};

const showSuccessPopup = () => {
  showModal(successPopup);
};

const showErrorPopup = () => {
  showModal(errorPopup);
  retryButton.addEventListener('click', onClick(errorPopup));
};

export {showErrorPopup, showSuccessPopup};
