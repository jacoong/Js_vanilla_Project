const toDOForm = document.getElementById("to_Do_Form");
const toDOInput = toDOForm.querySelector("#to_Do_input");
const todoList = document.getElementById('todo_list');

const TODOSKEY = "toDoVal";
let  toDos = []

function SavetoDo(){
 localStorage.setItem(TODOSKEY,JSON.stringify(toDos));
}


function HandletoDoForm(event){
    event.preventDefault();
    const toDoValue = toDOInput.value;
    const toDoValueOjb = {
        text:toDoValue,
        id:Date.now()
    }
    toDos.push(toDoValueOjb);
    toDOInput.value = "";
    SavetoDo();
    PaintList(toDoValueOjb);
}

function PaintList(toDoValueOjb){
    const li= document.createElement("li");
    li.id = toDoValueOjb.id
    const label= document.createElement("label");
    label.classList.add("container");
    const checkb = document.createElement("input");
    checkb.setAttribute('type','checkbox');
    const X = document.createElement("span");
    X.classList.add("Xmark")
    X.innerText ="✕"
    const span = document.createElement("span");
    span.classList.add("checkmark");
    const text = document.createElement("text")
    text.innerText = toDoValueOjb.text;


    checkb.addEventListener("click",cancel);
    X.addEventListener("click",DeteleList);

    label.appendChild(checkb);
    label.appendChild(span);
    label.appendChild(text);
    li.appendChild(label);
    li.appendChild(X);
    
    todoList.appendChild(li);
}


function cancel(event){
    const li = (event.target.parentElement);
    li.classList.toggle("cancel");
}



function DeteleList(event){
    const li = (event.target.parentElement);
    li.classList.add("delete");
    li.remove();
    console.log(li.id);
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
    SavetoDo();
    console.log(toDos);
}


const saveTodo =  localStorage.getItem(TODOSKEY);

if (saveTodo !== null){
    const paraSavetodo = JSON.parse(saveTodo);
    toDos = paraSavetodo;
    paraSavetodo.forEach((item) => PaintList(item)
    );

}



toDOForm.addEventListener("submit",HandletoDoForm)