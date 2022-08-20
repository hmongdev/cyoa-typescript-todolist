import confetti from 'canvas-confetti';
import jQuery from 'jquery';
import { v4 as uuidv4 } from 'uuid';

//* 2b. create type Task to be reused for addListItem
//this declares the type to Task
type Task = {
    id: string;
    title: string;
    completed: boolean;
    createdAt: Date;
};

//* 1. declaring our variables
const list = document.querySelector<HTMLUListElement>('#list');
const form = document.querySelector<HTMLFormElement>('#new-task-form') || null;
const input = document.querySelector<HTMLInputElement>('#new-task-title');
// this will be an array of our tasks defined with Task type
const tasks: Task[] = loadTasks();
//render each task onto the page
tasks.forEach(addListItem);

//* 2. on form submit
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(`Bingo!`);

    //* 2a. edge case: if input is empty or null, return
    //if input exists, give me the value else return `undefined`
    if (input?.value == '' || input?.value == null) return;

    //* 2c. create task
    //task: Task declares this object as a Task object
    const newTask: Task = {
        id: uuidv4(),
        title: input.value,
        completed: false,
        createdAt: new Date(),
    };

    //* 2f. add to Task[]
    tasks.push(newTask);
    //whenever we add a task, save it in local storage
    saveTasks();
    // tasks.push(true); this will throw an error bc TS knows to expect Task types
    //* 2d. add newTask to the DOM
    addListItem(newTask);
    //* 2e. clear input
    input.value = '';
});

//* 3. define addListItem function
function addListItem(task: Task) {
    //* 3a. create items that will be HTMLelements
    //typescript recognizes whatever we place into createElement('HTMLelement')
    const item = document.createElement('li');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    //* 3b. define checkbox behavior
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
        task.completed = checkbox.checked;
        console.log(tasks);
        //when we check the task as completed, save it in local storage
        saveTasks();
    });
    //* 3c. append values to DOM
    label.append(checkbox, task.title);
    item.append(label);
    list?.append(item);

    //confetti animation
    confetti.create(document.querySelector('#canvas') as HTMLCanvasElement, {
        resize: true,
        useWorker: true,
    })({ particleCount: 200, spread: 200 });
}

//* 4. used for local storage of tasks
function saveTasks() {
    //this is similar to saving inside a reducer
    //localStorage is your reducer obj
    //setItem is the dispatch
    //'TASKS' is the action
    //JSON.stringify(tasks) is what you wanna do with the tasks
    localStorage.setItem('TASKS', JSON.stringify(tasks));
}

//* this is showing all the items on the screen
function loadTasks(): Task[] {
    //getItem returns string | null values only
    const taskJSON = localStorage.getItem('TASKS');
    if (taskJSON == null) return [];
    //.parse returns an of tasks
    return JSON.parse(taskJSON);
}
