const loginForm = document.querySelector("#sendRequest");
const loginInput = document.querySelector("#sendRequest input");
const greeting = document.querySelector("#greeting");



const HIDDEN = "hidden";
const USERNAME = "username";

function SubmitForm(event){ 
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN);
    localStorage.setItem(USERNAME,username)
    greetingToUser(username)

}
  
function greetingToUser(username){
    greeting.innerText = `hello ${username}`
    greeting.classList.remove(HIDDEN);
}

const uservalue = localStorage.getItem(USERNAME);

if  (uservalue === null){
    loginForm.classList.remove(HIDDEN);
    greeting.classList.add(HIDDEN);

}else{
    greetingToUser(uservalue);
    loginForm.classList.add(HIDDEN);
}



loginForm.addEventListener("submit", SubmitForm);