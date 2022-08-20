import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form';
let data = {};
const refs = {
  form: document.querySelector('.feedback-form'),
  message: document.querySelector('textarea[name="message"]'),
  email: document.querySelector('input[name="email"]'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));
populateMessageOutput();

function onInput(e) {
  data[e.target.name] = e.target.value;
  const inputJson = JSON.stringify(data);
  localStorage.setItem(STORAGE_KEY, inputJson);
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  e.target.reset();
  delete data.message;
  delete data.email;
  localStorage.removeItem(STORAGE_KEY);
}

function populateMessageOutput() {
  const savedMsg = localStorage.getItem(STORAGE_KEY);

  if (savedMsg) {
    const newData = JSON.parse(savedMsg);
    console.log(newData);
    console.log(newData.email);

    refs.form.elements.email.value = newData.email;
    refs.form.elements.message.value = newData.message;
  }
}

// const STORAGE_KEY = 'feedback-form-state';
// const STORAGE_VALUE = {};
// const refs = {
//   form: document.querySelector('.feedback-form'),
//   message: document.querySelector('textarea[name="message"]'),
//   email: document.querySelector('input[name="email"]'),
// };

// refs.form.addEventListener('input', throttle(onInput, 500));
// // refs.message.addEventListener('input', );

// populateMessageOutput();

// function onInput(e) {
//   console.log(e.target.name);
//   console.log(e.target.value);
//   STORAGE_VALUE[e.target.name] = e.target.value;
//   console.log(STORAGE_VALUE);
//   const inputJson = JSON.stringify(STORAGE_VALUE);
//   console.log(inputJson);
//   //   localStorage.setItem(STORAGE_KEY, message);
// }

// function onFormSubmit(e) {
//   //   e.preventDefault();
//   //   console.log(localStorage.getItem(STORAGE_KEY));
//   //   refs.message = localStorage.getItem(STORAGE_KEY);
//   //   JSON.parse(localStorage.getItem(STORAGE_KEY))
//   //   e.currentTarget.reset();
//   //   delete data.message;
//   //   delete data.email;
//   // localStorage.removeItem(STORAGE_KEY);
// }

// function populateMessageOutput() {
//   const savedMsg = localStorage.getItem(STORAGE_KEY);

//   if (savedMsg) {
//     refs.message.value = savedMsg;
//     //     const newData = JSON.parse(savedMsg);
//     //     STORAGE_VALUE = newData;

//     //     refs.form.elements.email.value = savedMsg.email ?? '';
//   }
// }

// localStorage.setItem('ui-theme', 'light');
// localStorage.setItem('sidebar', 'expanded');
// localStorage.setItem('notification-level', 'mute');

// const settings = {
//   theme: 'dark',
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem('settings', JSON.stringify(settings));

// const theme = localStorage.getItem('settings')
// console.log(theme);
// const parsedSettings = JSON.parse(theme);
// console.log(parsedSettings);
// console.log(parsedSettings.options);
// console.log(parsedSettings.theme);
