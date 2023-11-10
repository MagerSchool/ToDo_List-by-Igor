import './style.css'
import {renderTask, addTask, deleteTask, doneTask} from './components/index.js'

const inputTask = document.querySelector('#todo_task_new');
const taskBody = document.querySelector('#todo_body');
const form = document.querySelector('#form');
const taskStub = document.querySelector('#stub')


form.addEventListener('submit', (event) => addTask(event, inputTask, taskBody))
taskBody.addEventListener('click', (event) => deleteTask(event, taskBody));
taskBody.addEventListener('click', doneTask);
renderTask(taskBody, taskStub);



