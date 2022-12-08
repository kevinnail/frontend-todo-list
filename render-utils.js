import { toggleComplete } from './fetch-utils.js';

export function renderTodos(todo) {
    const li = document.createElement('li');
    li.id = todo.id;

    const p = document.createElement('p');
    p.textContent = `Task: ${todo.task}`;
    const p2 = document.createElement('p');
    if (todo.completed) {
        p2.textContent = 'Doneskies';
        li.classList.add('completed');
    } else {
        p2.textContent = 'Not completed';
        li.classList.remove('completed');
    }

    li.addEventListener('click', async () => {
        // console.log('todo id: ', todo.id);

        li.classList.toggle('completed');

        if (p2.textContent === 'Doneskies') {
            p2.textContent = 'Not Completed';
            // fetch 'complete = false
            await toggleComplete('false', todo.id);
        } else {
            p2.textContent = 'Doneskies';
            // fetch 'complete = true
            await toggleComplete('true', todo.id);
        }
    });

    li.append(p, p2);
    return li;
}
