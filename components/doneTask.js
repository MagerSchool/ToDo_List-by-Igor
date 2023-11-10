export function doneTask (event) {
  if (event.target.dataset.action === 'done') {
    const parentElement = event.target.closest('.todo_list-item');
    parentElement.classList.toggle('todo_list-item--done');

    const numberOfDoneTasksEl = document.querySelector('#done_task');
    numberOfDoneTasksEl.innerHTML = document.querySelectorAll('.todo_list-item--done').length;
  }
}
