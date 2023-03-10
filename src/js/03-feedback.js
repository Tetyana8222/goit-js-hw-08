import throttle from 'lodash.throttle';

const formRef = document.querySelector('form');
const textareaRef = document.querySelector('textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';
//об'єкт для збережено значень з форми
const formData = {};

formRef.addEventListener('submit', onFormsubmit);
formRef.addEventListener('input', throttle(onFormInput, 500));
//делегування при складній формі заповнення
formRef.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value;
  console.log(formData);
});

// function populateForm();

function onFormsubmit(evt) {
  evt.preventDefault();
  // очищаємо форму після відправки
  evt.currentTarget.reset();
  //видаляємо дані з ЛС після відправки
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onFormInput(evt) {
  const inputValue = JSON.stringify(formData);
  localStorage.setItem(LOCALSTORAGE_KEY, inputValue);
  console.log(formData);
}

//функція для заповнення форми збереженими даними з ЛС (наразі є проблема не зберігаються дані)
function populateForm() {
  const localStorageData = localStorage.getItem(LOCALSTORAGE_KEY);
  const savedMessage = JSON.parse(localStorageData);
  if (savedMessage) {
    textareaRef.value = savedMessage;
    console.log(savedMessage);
  }
}
