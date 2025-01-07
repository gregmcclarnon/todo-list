function renderToDoList(tasks) {
    const app = document.getElementById('app');
  
    // Clear any existing content
    app.innerHTML = '';
  
    // Create a list for tasks
    const ul = document.createElement('ul');
  
    tasks.forEach((task) => {
      const li = document.createElement('li');
      li.textContent = `${task.title} (Due: ${task.dueDate}, Priority: ${task.priority})`;
      ul.appendChild(li);
    });
  
    app.appendChild(ul);
  }
  export { renderToDoList };
  