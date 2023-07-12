import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const LOCAL_KEY = formEl.addEventListener(
  'input',
  throttle(storageFormData, 500)
);

let formData = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};

function outputToFormData() {
  const savedMessage = localStorage.getItem('feedback-form-state');
  const parsedMsg = JSON.parse(savedMessage);
  if (savedMessage) {
    formInput.value = parsedMsg.email;
    textarea.value = parsedMsg.message;
  }
}

formEl.addEventListener('submit', onFormSubmit);

reloadPage();

function storageFormData(e) {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}
function onFormSubmit(e) {
  e.preventDefault();
  console.log(formData);
  const currentEmail = e.target.elements.email.value;
  if (currentEmail === '' || textAreaEl.value === '') {
    return alert('Fill all the forms');
  }
  e.currentTrget.reset();
  localStorage.removeItem(LOCAL_KEY);
  formData = {};
}

function reloadPage() {
  if (formData) {
    let { email, message } = formEl.elements;
    email.value = formData.email || '';
    message.value = formData.message || '';
  }
}
