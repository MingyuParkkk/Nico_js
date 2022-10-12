const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos"; //to do s local storage

let toDos = []; // saved list to local storage

// it will return only which satisfies the condition in each element of the array
// function filterFn(toDo){
//   return toDo.id === 1
// }

function deleteToDo(event){
  //console.log(event.target.parentNode); // target shows html 
  //console.dir(event.target); // dir shows the properties around it -> find parentNode (=li number)
  //console.log(event.target.parentNode); // can see whole li which is selected
  const btn = event.target;
  const li = btn.parentNode; // li which will be deleted
  toDoList.removeChild(li); // search "delete child element mdn"
  // remove it from the list
  const cleanToDos = toDos.filter(function(toDo){
    return toDo.id !== parseInt(li.id); // change string to int
  }); // filter runs a function just like forEach and it creates an array
  toDos = cleanToDos; // for this, change toDos from 'const' to 'let'
  saveToDos();
}

// JSON : JavaScript Object Notation
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // JSON.stringify : make it to string for localstorage
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text : text,
    id : newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = ""; // clear the input window
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null){
    const parsedToDos = JSON.parse(loadedToDos); // js can understand localstorage string by JSON.parse
    parsedToDos.forEach(function(toDo){
      paintToDo(toDo.text);
    }) // runs a function on each one of the things of the array
  } 
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();