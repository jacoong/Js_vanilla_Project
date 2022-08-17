const clock = document.querySelector("#clock");
const date = document.querySelector("#date");
const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTH= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];



function clockV(){
    let clocks = new Date();
    const literalDayOfWeek = WEEK_DAYS[clocks.getDay()];
    const literalMONTH = MONTH[clocks.getMonth()];
    const dd = String(clocks.getDate());
    const hh = String(clocks.getHours()).padStart(2,"0");
    const mm = String(clocks.getMinutes()).padStart(2,"0");
    const ss = String(clocks.getSeconds()).padStart(2,"0");
    clock.innerText =`${hh}:${mm}`;
    date.innerText = `${literalDayOfWeek}, ${literalMONTH} ${dd}`
    ;

}

clockV();
setInterval(clockV,1000);