export function doneTask (event) {
  if (event.target.dataset.action === 'done') {
    const parentElement = event.target.closest('#id');
    console.log(parentElement);
    const taskTitle = parentElement.querySelector('#id');
    taskTitle.classList.add('todo_list-item--done');
    console.log(taskTitle)
  }
}