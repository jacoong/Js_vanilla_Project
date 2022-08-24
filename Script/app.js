const loginForm = document.querySelector("#welcomePage_form");
const loginInput = document.querySelector("#welcomePage_form input");
const Welcome = document.querySelector("#welcomeBanners");
const greeting = document.querySelector("#greetingg");
const Login = document.querySelector('#loginBt button');
const LogOut = document.querySelector("#log_outt");
const weather = document.querySelector("#weather");
const clockDiv = document.querySelector("#clock_div");
const to_Do_Form = document.querySelector("#to_Do_Form");
const todo_list = document.querySelector("#todo_list");
const footer = document.querySelector("#footerArea");
const music = document.querySelector("#music");
const googleForm = document.querySelector("#searchForm");


const HIDDEN = "hidden";
const USERNAME = "username";

window.onload = function() {
    document.querySelector(".searchInput").focus();
  };


function SubmitForm(event){ 
    event.preventDefault();
    const username = loginInput.value;
    Welcome.classList.add(HIDDEN);
    loginForm.classList.add(HIDDEN);
    localStorage.setItem(USERNAME,username)
    clockDiv.classList.remove(HIDDEN);
    weather.classList.remove(HIDDEN);
    to_Do_Form.classList.remove(HIDDEN);
    todo_list.classList.remove(HIDDEN);
    footer.classList.remove(HIDDEN);
    LogOut.classList.remove(HIDDEN);
    music.classList.remove(HIDDEN);
    googleForm.classList.remove(HIDDEN);
    
    greetingToUser(username)

}
  
function greetingToUser(username){
    const digital =new Date()
    const hours=digital.getHours()

    if(hours>6 & hours<=11){
        greeting.innerText = `Goodmoring, ${username}!`
    }else if(hours>11 & hours<=13){
        greeting.innerText = `Have a nice lunchtime, ${username}.`
    }else if (hours>13 & hours<=18){
        greeting.innerText = `Good afternoon, ${username}.`
    }else if (hours>18 & hours<=20){
        greeting.innerText = `Good evening, Have a nice Dinner ${username}.`
    }else if (hours>20 & hours<=24){
        greeting.innerText = `Good night, ${username}.`
    }else if (hours>0 & hours<=6){
        greeting.innerText = `Time to sleep, ${username}!`
    }

    greeting.classList.remove(HIDDEN);

}

const uservalue = localStorage.getItem(USERNAME);

if  (uservalue === null){
    loginForm.classList.remove(HIDDEN);


}else{
    greetingToUser(uservalue);
    Welcome.classList.add(HIDDEN);
    loginForm.classList.add(HIDDEN);
    clockDiv.classList.remove(HIDDEN);
    weather.classList.remove(HIDDEN);
    to_Do_Form.classList.remove(HIDDEN);
    todo_list.classList.remove(HIDDEN);
    footer.classList.remove(HIDDEN);
    LogOut.classList.remove(HIDDEN);
    greeting.classList.remove(HIDDEN);
    music.classList.remove(HIDDEN);
    googleForm.classList.remove(HIDDEN);


}

function initial(){
    localStorage.removeItem(USERNAME);
    location.reload();
}

function changeText() {
    Login.innerText ="Click here!";
}

function backText(){
    Login.innerText ="log-in";
}


Login.addEventListener("mouseenter",changeText);
Login.addEventListener("mouseleave",backText);
LogOut.addEventListener("click",initial);
loginForm.addEventListener("submit", SubmitForm);