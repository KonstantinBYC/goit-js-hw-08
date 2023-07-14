import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailInput = formEl.elements.email;
const messageInput = formEl.elements.message;
const submitButton = document.querySelector('button');

const savedFB = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedFB) {
  emailInput.value = savedFB.email;
  messageInput.value = savedFB.message;
  submitButton.disabled = !(emailInput.value && messageInput.value);
}

const inputState = formEl.addEventListener(
  'input',
  throttle(() => {
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify({
        email: emailInput.value,
        message: messageInput.value,
      })
    );
    submitButton.disabled = !(emailInput.value && messageInput.value);
  }, 500)
);

formEl.addEventListener('submit', e => {
  e.preventDefault();
  console.log({
    email: emailInput.value,
    message: messageInput.value,
  });

  formEl.reset();
  localStorage.removeItem('feedback-form-state');
  submitButton.disabled = true;
});

// let formData = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};

// function outputToFormData() {
//   const savedMessage = localStorage.getItem('feedback-form-state');
//   const parsedMsg = JSON.parse(savedMessage);
//   if (savedMessage) {
//     formInput.value = parsedMsg.email;
//     textarea.value = parsedMsg.message;
//   }
// }

// formEl.addEventListener('submit', onFormSubmit);

// reloadPage();

// function storageFormData(e) {
//   formData[e.target.name] = e.target.value.trim();
//   localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
// }

// function onFormSubmit(e) {
//   e.preventDefault();
//   console.log(formData);
//   const currentEmail = e.target.elements.email.value;
//   if (currentEmail === '' || textAreaEl.value === '') {
//     return alert('Fill all the forms');
//   }
//   e.currentTrget.reset();
//   localStorage.removeItem(LOCAL_KEY);
//   formData = {};
// }

// function reloadPage() {
//   if (formData) {
//     let { email, message } = formEl.elements;
//     email.value = formData.email || '';
//     message.value = formData.message || '';
//   }
// }
