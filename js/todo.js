const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
// const todoInput = todoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newToDoObject) {
  const li = document.createElement("li");
  li.id = newToDoObject.id;
  const span = document.createElement("span");
  span.innerText = newToDoObject.text;
  const button = document.createElement("button");
  button.innerText = "DONE";

  li.appendChild(span);
  li.appendChild(button);

  button.addEventListener("click", (event) => {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => {
      return toDo.id !== parseInt(li.id);
    });
    saveToDos();
  });

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObject = {
    text: newToDo,
    id: Date.now(),
  };

  toDos.push(newToDoObject);
  paintToDo(newToDoObject);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parseToDos = JSON.parse(savedToDos);
  toDos = parseToDos;
  parseToDos.forEach(paintToDo);
}
