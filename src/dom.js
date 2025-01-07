import { saveTasksToLocalStorage } from './todo';

function renderToDoList(tasks) {
  const app = document.getElementById('app');

  // Clear any existing content
  app.innerHTML = '';

  // Create a list for tasks
  const ul = document.createElement('ul');

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = `${task.title} (Due: ${task.dueDate}, Priority: ${task.priority})`;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      tasks.splice(index, 1); // Remove the task from the array

      saveTasksToLocalStorage(tasks); // Save the updated tasks to local storage
      renderToDoList(tasks); // Re-render the updated list
    });

    li.appendChild(deleteButton); // Attach the button to the task
    ul.appendChild(li); // Attach the task to the list
  });

  app.appendChild(ul);
}

export { renderToDoList };
