/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { deleteById, fetchTodos, getUser } from './fetch-utils.js';
import { renderTodos } from './render-utils.js';

/* Get DOM Elements */
const todoList = document.getElementById('todo-list');
const emailLogin = document.getElementById('email-login');
/* State */

/* Events */

window.addEventListener('load', async () => {
    let user = await getUser();

    emailLogin.innerHTML = `You are logged in with: <br/><span class="email">${user.email}</span>`;
});

/* Display Functions */
async function displayTodos() {
    const todos = await fetchTodos();

    for (const todoEl of todos) {
        const btn = document.createElement('p');
        btn.textContent = 'Delete';
        btn.classList.add('delete-button');
        btn.addEventListener('click', async () => {
            const x = confirm('ARE YOU SURE YOU WANT TO DELETE YOUR TO DO?');
            if (x) {
                await deleteById(todoEl.id);
                todoList.innerHTML = '';
                await displayTodos();
            }
        });

        todoList.append(btn);
        let li = renderTodos(todoEl);
        todoList.append(li);
    }
}

displayTodos();
