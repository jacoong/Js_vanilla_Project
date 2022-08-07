const todoForm = document.querySelector("#todo_form");
const todoInput = todoForm.querySelector("#todo_input");
const todoUl = document.querySelector("#todo_ul");

let todos = [];

function TodoForm(event){
    event.preventDefault();
    const input = todoInput.value;
    todoInput.value = "";
    const inputObj = {
        text:input,
        id:Date.now()}
        todos.push(inputObj);
    SaveTodos(inputObj);
    paintTodo(inputObj);
}

function SaveTodos(){
    localStorage.setItem("todolist",JSON.stringify(todos));
}

function paintTodo(inputObj){
    const li = document.createElement("li");
    li.id = inputObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = inputObj.text;
    button.innerText = "x";
    li.appendChild(span);
    li.appendChild(button);
    todoUl.appendChild(li);

    todoUl.addEventListener("click", deleteTodo);
}

function deleteTodo(event){
    const removingOne = event.target.parentElement;
    removingOne.remove();
    todos = todos.filter(todo => todo.id !== parseInt(removingOne.id));
    console.log(todos);
    SaveTodos();
} 
   

todoForm.addEventListener("submit", TodoForm);

let ValueOfTodos = localStorage.getItem("todolist");

if (ValueOfTodos !== null){
    const ParseTodo = JSON.parse(ValueOfTodos);

    todos = ParseTodo;
    ParseTodo.forEach(paintTodo);

}