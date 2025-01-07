import { createToDoItem, loadTasksFromLocalStorage, saveTasksToLocalStorage } from './todo';
import { renderToDoList } from './dom';
import './style.css';

// Load saved tasks from local storage and render them
const tasks = loadTasksFromLocalStorage(); // Loads tasks on app start
console.log('Initial tasks loaded:', tasks); // Debug: Log loaded tasks

renderToDoList(tasks); // Render tasks when the app loads

// Add event listener for form submission
document.getElementById('task-form').addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the form from refreshing the page

  // Get form values
  const title = document.getElementById('task-title').value;
  const dueDate = document.getElementById('task-date').value;
  const priority = document.getElementById('task-priority').value;

  // Create the new task
  const newTask = createToDoItem(title, dueDate, priority);
  tasks.push(newTask); // Add it to the task list

  console.log('New task added:', newTask); // Debug: Log the new task
  console.log('Updated tasks:', tasks); // Debug: Log the updated task list

  saveTasksToLocalStorage(tasks); // Save updated tasks to local storage
  console.log('Tasks saved to local storage.'); // Debug: Confirm save operation

  // Render the task list
  renderToDoList(tasks);

  // Clear the form
  e.target.reset();
});
