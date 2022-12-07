/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { fetchBlogs } from './fetch-utils.js';
import { renderTodos } from './render-utils.js';

/* Get DOM Elements */
const todoList = document.getElementById('todo-list');
/* State */

/* Events */

/* Display Functions */
async function displayTodos() {
    const todos = await fetchBlogs();

    for (const todoEl of todos) {
        let li = renderTodos(todoEl);
        todoList.append(li);
    }
}

displayTodos();
