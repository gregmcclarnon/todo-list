import { createToDoItem, getToDoList } from './todo';
import { renderToDoList } from './dom';

// Hardcoded example tasks
const tasks = [
  createToDoItem('Buy groceries', '2025-01-08', 'high'),
  createToDoItem('Study JavaScript', '2025-01-09', 'medium'),
  createToDoItem('Take a walk', '2025-01-10', 'low'),
];

// Render tasks to the DOM
renderToDoList(tasks);
