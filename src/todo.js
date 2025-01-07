function createToDoItem(title, dueDate, priority) {
    return { title, dueDate, priority };
  }
  export { createToDoItem };

  function saveTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Convert tasks to a string
  }
  export { saveTasksToLocalStorage };
  
  function loadTasksFromLocalStorage() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : []; // Convert string back to array
  }
  export { loadTasksFromLocalStorage };
  