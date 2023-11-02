export function setupIndex(element) {
  (function () {
    let tasks = {
            current: [{
                taskId: doId(),
                taskContent: "Таск 1",
                taskState: "current"
            }, {
                taskId: doId(),
                taskContent: "Таск 2",
                taskState: "current"
            }],
            done: [{
                taskId: doId(),
                taskContent: "Таск 3",
                taskState: "done"
            }],
            get allTasks() {
                return this.current.length + this.done.length;
            },
            get doneTasks() {
                return this.done.length;
            }
        },
        tasksList = document.getElementById("todo_list"),
        allTasks = document.getElementById("sum_task"),
        doneTasks = document.getElementById("done_task"),
        addNewTaskField = document.getElementById("todo_task_new");

    const fetchTask = async () => {
        try {
            const todos = await fetch('https://jsonplaceholder.typicode.com/todos');
            return await todos.json();
        } catch (error) {
            console.log(error);
        }
    }
    console.log(fetchTask())

    function InfoTask() {
        for (const item of tasks.current) {
            createItem(item);
        }
        for (const item of tasks.done) {
            createItem(item);
        }
        allTasks.innerHTML = tasks.allTasks;
        doneTasks.innerHTML = tasks.doneTasks;
    }

    function createItem(el) {
        let item = document.createElement('li'),
            remove = document.createElement('img'),
            text = document.createElement('span');
        remove.classList.add('todo_list-remove');
        remove.src = './public/trash.svg'
        remove.addEventListener('click', function () {
            removeTask(this);
        });
        text.classList.add('todo_list-text');
        text.addEventListener('click', function () {
            doneTask(this);
        });
        switch (el.taskState) {
            case 'done':
                item.classList.add('todo_list-item', 'todo_list-item--done');
                break;
            default:
                item.classList.add('todo_list-item');
        }
        item.id = el.taskId;
        text.innerHTML = el.taskContent;
        item.appendChild(text);
        item.appendChild(remove);
        tasksList.appendChild(item);
    }

    function doneTask(el) {
        let elem = el.parentNode,
            elemId = elem.id,
            elemState = elem.classList.contains('todo_list-item--done');

        const [itemsRemove, itemsAdd] = elemState ? [tasks.done, tasks.current] : [tasks.current, tasks.done];
        elem.classList.toggle('todo_list-item--done');
        for (const [index, item] of itemsRemove.entries()) {
            if (item.taskId !== elemId) continue;
            itemsAdd.push(item);
            itemsRemove.splice(index, 1);
        }
        doneTasks.innerHTML = tasks.doneTasks;
    }

    function removeTask(el) {
        let removeEl = el.parentNode,
            removeElId = removeEl.id,
            removeElState = removeEl.classList.contains('todo_list-item--done');

        removeEl.remove();
        const items = removeElState ? tasks.done : tasks.current;
        for (const [index, item] of items.entries()) {
            if (item.taskId !== removeElId) continue;
            items.splice(index, 1);
        }
        allTasks.innerHTML = tasks.allTasks;
        doneTasks.innerHTML = tasks.doneTasks;
    }

    function addTasks(str) {
        let elem = {
            taskId: doId(),
            taskContent: str,
            taskState: "current"
        };
        tasks.current.push(elem);
        createItem(elem);
        allTasks.innerHTML = tasks.allTasks;
    }

    function doId() {
        return Math.random().toString(36).substr(2, 16);
    }

    InfoTask();

    addNewTaskField.addEventListener('keyup',function (e) {
        if(e.keyCode === 13) {
            addTasks(this.value);
            this.value = "";
        }
    })

  })();
}
