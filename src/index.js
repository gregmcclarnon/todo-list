import { createToDoItem } from './todo';
import { renderToDoList } from './dom';

const tasks =[]; // Initialise an empty task list

document.getElementById('task-form').addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the form from refreshing the page

  // Get form values

  const title = document.getElementById('task-title').value;
  const dueDate = document.getElementById('task-date').value;
  const priority = document.getElementById('task-priority').value;

  // Create the new task

  const newTask = createToDoItem(title, dueDate, priority);
  tasks.push(newTask); // Add it to the task list

  // Render the task list

  renderToDoList(tasks);

  // Clear the form
  e.target.reset();



});