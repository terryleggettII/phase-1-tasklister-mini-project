document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const taskList = document.getElementById('list');

  form.addEventListener('submit', function(event) {
      event.preventDefault();

      const taskDescription = taskInput.value;
      if (taskDescription) {
          const listItem = document.createElement('li');
          listItem.textContent = taskDescription;

          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'X';
          listItem.appendChild(deleteButton);

          deleteButton.addEventListener('click', function() {
              listItem.remove(); 
          });

          taskList.appendChild(listItem);

          taskInput.value = ''; 
      }
  });
});