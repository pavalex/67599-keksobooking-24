const ERROR_TIME = 3000;

const showError = (message) => {
  const errorContainer = document.createElement('div');
  errorContainer.style.display = 'block';
  errorContainer.style.backgroundColor = '#6e0815';
  errorContainer.style.position = 'absolute';
  errorContainer.style.left = '0';
  errorContainer.style.top = '0';
  errorContainer.style.right = '0';
  errorContainer.style.padding = '10px';
  errorContainer.style.fontSize = '30px';
  errorContainer.style.fontWeight = 'bold';
  errorContainer.style.color = 'white';
  errorContainer.style.textAlign = 'center';
  errorContainer.textContent = message;
  document.body.appendChild(errorContainer);

  setTimeout(() => {
    errorContainer.remove();
  }, ERROR_TIME);

  return errorContainer;
};

export {showError};
