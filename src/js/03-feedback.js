import throttle from 'lodash.throttle';
const form = document.querySelector('#feedback-form');
const inputRef = document.querySelector('input');
const LOCALSTORAGE_KEY = 'feedback-form-state';

localStorage.setItem('feedback-form-state', JSON.stringif({ email, message }));
