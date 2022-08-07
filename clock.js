const clock = document.querySelector("#clock");



function clockV(){
    let clocks = new Date();
    const hh = String(clocks.getHours()).padStart(2,"0");
    const mm = String(clocks.getMinutes()).padStart(2,"0");
    const ss = String(clocks.getSeconds()).padStart(2,"0");
    clock.innerText =`${hh}:${mm}:${ss}`;

}

clockV();
setInterval(clockV,1000);