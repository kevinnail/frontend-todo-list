/* Imports */
// this will check if we have a user and set signout link if it exists
import '../auth/user.js';
import { getUser, postToDo } from '../fetch-utils.js';

// DOM
const toDoForm = document.getElementById('todo-form');
const taskButton = toDoForm.querySelector('button');
const taskInput = toDoForm.querySelector('input');
const posted = toDoForm.querySelector('p');
const emailLogin = document.getElementById('email-login');
let user = null;

// Events

window.addEventListener('load', async () => {
    user = await getUser();

    emailLogin.innerHTML = `<p class="email-p-1">You are logged in with: <p><br/><span class="email">${user.email}</span>`;
});

toDoForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    taskButton.disabled = true;
    const formData = new FormData(toDoForm);
    let response = null;
    let error = null;
    const todo = formData.get('task-description');

    response = await postToDo(todo, user.id);
    if (error) {
        error = response.error;
        // eslint-disable-next-line no-console
        console.log('error in toDoForm submit event', error);
    } else {
        posted.textContent = response.message;
        taskInput.value = '';
        taskButton.disabled = false;
    }
});
