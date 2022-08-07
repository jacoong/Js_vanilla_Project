const apple = document.querySelector("a");

apple.innerText = "asdf";

function handler(){
    console.log("shit!");
}


apple.addEventListener("click", handler())