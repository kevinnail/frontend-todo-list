export function renderTodos(todo) {
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = `Task: ${todo.task}`;
    const p2 = document.createElement('p');
    if (todo.completed) {
        p2.textContent = 'You have successfully finished this task.';
    } else {
        p2.textContent = 'You have NOT finished this task.';
    }

    li.append(p, p2);
    return li;
}
