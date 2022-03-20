const toDoform = document.getElementById("toDo-form");
const toDoInput = toDoform.querySelector("input");

const TODOS_KEY = "toDos";

let toDos = [];

toDoform.addEventListener("submit",handleToDoSubmit);

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value="";
  const newToDoObj = {
    text:newToDo,
    id:Date.now()
  }
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  span.addEventListener("click",checkingToDo);

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click",deleteToDo);
  
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function checkingToDo(event) {
  const span = event.path[0];
  span.classList.toggle("strikethrough");
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDoObj) => toDoObj.id !== parseInt(li.id));
  saveToDos();
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null ) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}