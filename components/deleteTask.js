export function deleteTask (event, taskBody, taskStub) {
  if (event.target.dataset.action === 'remove') {
    const parentElement = event.target.closest('.todo_list-item')
    parentElement.remove()
  }

  if (taskBody.children.length === 1) {
    taskStub.classList.remove('todo_body_text--none');
  }
}