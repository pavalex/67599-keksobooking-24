const getData = (url, onSuccess, onFail) => {
  fetch(url)
    .then (((response) => {
      if (response.ok) {
        return response.json();
      }
      onFail('Не удалось загрузить данные об объектах');
    }))
    .then((items) => {
      onSuccess(items);
    })
    .catch(() => {
      onFail('Не удалось загрузить данные об объектах');
    });
};

const sendData = (url, onSuccess, onFail, body) => {
  fetch(
    url,
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if (response.ok) {
        return onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {
  getData,
  sendData
};
