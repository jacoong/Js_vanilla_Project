const toDOForm = document.getElementById("to_Do_Form");
const toDOInput = toDOForm.querySelector("#to_Do_input");
const todoList = document.getElementById('todo_list');

const TODOSKEY = "toDoVal";
const DONEKEY = "DoneToDo"
let  toDos = []
let  DonetoDos = []

function SavetoDo(){
 localStorage.setItem(TODOSKEY,JSON.stringify(toDos));
 localStorage.setItem(DONEKEY,JSON.stringify(DonetoDos));
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
    label.id = toDoValueOjb.id;
    const checkb = document.createElement("input");
    checkb.setAttribute('type','checkbox');
    const X = document.createElement("span");
    X.classList.add("Xmark")
    X.innerText ="✕"
    const span = document.createElement("span");
    span.classList.add("checkmark");
    const text = document.createElement("text")
    text.innerText = toDoValueOjb.text;


    checkb.addEventListener("mouseup",cancel);
    checkb.addEventListener("click",test);
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
    console.log(li);
    li.classList.toggle("cancel");
    if (li.classList.contains("cancel")){
        
        DonetoDos.push({text:li.innerText,id:(li.id)});
        SavetoDo();
        console.log("통과됨");
        
    }

    if (!li.classList.contains("cancel")){
        DonetoDos= DonetoDos.filter(Donetodo => parseInt(Donetodo.id) !== parseInt(li.id));
        SavetoDo();
    }

}

function test(){
    li.classList.toggle("cancel");
}

function PaintCheckList(item){
    item.id = parseInt(item.id);
    const FoundTodoList = document.getElementById(`${item.id}`);
    const Label = FoundTodoList.firstChild;
    const checkmark = Label.querySelector(".checkmark");
    checkmark.click();
    console.log("aa");
  
    

}


function DeteleList(event){
    const li = (event.target.parentElement);
    console.log(li);
    li.remove();
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
    SavetoDo();
    console.log(toDos);
}


const saveTodo =  localStorage.getItem(TODOSKEY);
const savedoneTodo =  localStorage.getItem(DONEKEY);

if (saveTodo !== null){
    const paraSavetodo = JSON.parse(saveTodo);
    toDos = paraSavetodo;
    paraSavetodo.forEach((item) => PaintList(item)   
    );
    const parasavedoneTodo = JSON.parse(savedoneTodo);
    DonetoDos = parasavedoneTodo;
    parasavedoneTodo.forEach((item) => PaintCheckList(item)   
    );
}




toDOForm.addEventListener("submit",HandletoDoForm)