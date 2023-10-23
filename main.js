import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <div class="todo_header">
        <div class="todo_title">
            <span class="todo_title_text">To Do List</span>
        </div>
        <div class="todo_info">
            <div class="todo_info_item">
                <span class="todo_info_text">Number of tasks:</span>
                <span class="todo_info_number" id="sum_task"></span>
            </div>
            <div class="todo_info_item">
                <span class="todo_info_text">Completed tasks:</span>
                <span class="todo_info_number" id="done_task"></span>
            </div>
        </div>
    </div>
    <div class="todo_body">
        <div class="todo_form">
            <ul class="todo_list" id="todo_list"></ul>
        </div>
        <div class="todo_input">
            <input required class="todo_task_new" id="todo_task_new" placeholder="Add new task">
        </div>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
