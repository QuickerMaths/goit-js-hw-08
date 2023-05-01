import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

let data = {
  email: '',
  message: '',
};

if (localStorage.getItem('feedback-form-state')) {
  data = JSON.parse(localStorage.getItem('feedback-form-state'));
  formEl.email.value = data.email;
  formEl.message.value = data.message;
}

const getData = e => {
  data[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

formEl.addEventListener('submit', e => {
  e.preventDefault();

  localStorage.clear();
  formEl.reset();
});

formEl.addEventListener('input', throttle(getData, 500));
