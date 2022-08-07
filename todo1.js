const TodoForm = document.querySelector("#todo_form");
const TodoInput = TodoForm.querySelector("#todo_input");
const TodoList = document.querySelector("#todo_List");

let todos = [];

function HandleofTodo(event){
    event.preventDefault();
    const input = TodoInput.value;
    const inputObj = {
        text:input,
        id:Date.now()
    }
    todos.push(inputObj);
    TodoInput.value = "";
    paintList(inputObj)
    saveTodoList();
}

function paintList(inputObj){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.id = inputObj.id;
    span.innerText = inputObj.text;
    const button = document.createElement("button");
    button.innerText = ("X")
    li.appendChild(span);
    li.appendChild(button);
    TodoList.appendChild(li);

    button.addEventListener("click", deleteTodos)
}

function deleteTodos(event){
    const deleteOne = (event.target.parentElement);
    deleteOne.remove();
    todos = todos.filter( de=> de.id !== parseInt(deleteOne.id));
    saveTodoList();

}

function saveTodoList(){
    localStorage.setItem("Todo",JSON.stringify(todos));
}


TodoForm.addEventListener("submit", HandleofTodo);

let ValueOfLocalStorage = localStorage.getItem("Todo");

if (ValueOfLocalStorage !== null) {
    const ConvertoPhrase = JSON.parse(ValueOfLocalStorage);

    todos = ConvertoPhrase;
    todos.forEach(paintList);
}