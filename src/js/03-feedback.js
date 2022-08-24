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
  e.target.reset();
  delete data.message;
  delete data.email;
  localStorage.removeItem(STORAGE_KEY);
}

function populateMessageOutput() {
  const savedMsg = localStorage.getItem(STORAGE_KEY);
  if(savedMsg === null) return 
  const newData = JSON.parse(savedMsg);
  console.log(savedMsg);
  if (newData.email === undefined) {
    console.log("reset");
    refs.form.elements.email.value = ""
    // return
  }
  refs.form.elements.email.value = newData.email;

  if (newData.message === undefined) {
    console.log("reset");
    refs.form.elements.message.value = ""
    return
  }
  console.log(newData.message);
  refs.form.elements.message.value = newData.message;
 
}
