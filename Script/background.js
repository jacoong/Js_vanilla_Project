const backgroundListDay =["1d.png","2d.png","3d.png","4d.png"];
const backgroundListNight =["1n.png","2n.png","3n.png","4n.png"];
const bgImage = document.createElement("style");

const digital =new Date()
const hours=digital.getHours()


if(hours>6 & hours<=18){
    const choseimageDay = Math.floor(Math.random()*backgroundListDay.length);
    const bg = (backgroundListDay[choseimageDay]);
    
    bgImage.innerText = `body {background-image: url("img/${bg}"); background-position: center; background-repeat: no-repeat; background-size: cover; }`;
    document.head.appendChild(bgImage);

}else if(hours>18 & hours<=24 || hours>0 & hours<=6){
    const choseimageNight = Math.floor(Math.random()*backgroundListNight.length);
    const bg = (backgroundListNight[choseimageNight]);
    
    bgImage.innerText = `body {background-image: url("img/${bg}"); background-position: center; background-repeat: no-repeat; background-size: cover; }`;
    document.head.appendChild(bgImage);}




