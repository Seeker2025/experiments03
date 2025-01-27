
const STORAGE_KEY = 'feedback-msg'

const refs = {
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form textarea'),
};

populateTextarea();

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

function onFormSubmit(event) {
    event.preventDefault();
    console.log('Hi!');
    event.target.reset();
    ////remove 'feedback-msg' from localStorage
    localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(event) {
    const message = event.target.value;
    console.log(message);
    localStorage.setItem(STORAGE_KEY, message);
}

function populateTextarea() {
    const saveMessage = localStorage.getItem(STORAGE_KEY);
    if (saveMessage) {
        console.log(saveMessage);
        refs.textarea.value = saveMessage;
    }
    
}