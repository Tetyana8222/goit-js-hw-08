import throttle from 'lodash.throttle';

const formRef = document.querySelector('form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
//об'єкт для збережено значень з форми
let formData = {};
populateForm();

formRef.addEventListener('submit', onFormsubmit);
formRef.addEventListener('input', throttle(onFormInput, 500));
// //делегування при складній формі заповнення
// // formRef.addEventListener('input', evt => {
// //   formData[evt.target.name] = evt.target.value;
// //   console.log(formData);
// // });

function onFormsubmit(evt) {
  evt.preventDefault();
  // очищаємо форму після відправки
  evt.currentTarget.reset();
  //видаляємо дані з ЛС після відправки
  localStorage.removeItem(LOCALSTORAGE_KEY);
  console.log(formData);
  formData = {};
}

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  // const inputValue = JSON.stringify(formData);
  localStorage.setItem(LOCALSTORAGE_KEY, formData);
  // console.log(formData);
}

// //функція для заповнення форми збереженими даними з ЛС (наразі є проблема не зберігаються дані)
function populateForm() {
  const localStorageData = localStorage.getItem(LOCALSTORAGE_KEY);
  const savedMessage = JSON.parse(localStorageData);
  if (savedMessage) {
    formRef.elements.message.value = savedMessage.message;
    formData.message = savedMessage.message;
    formRef.elements.email.value = savedMessage.email;
    formData.email = savedMessage.email;
  }
}

// // function populateForm() {
// //   const savedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
// //   if (savedData) {
// //     formData = savedData;
// //   }
// // }
