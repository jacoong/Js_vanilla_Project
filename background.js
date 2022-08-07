const backgroundList =["a.jpg","b.jpg","c.jpg","d.jpg","e.jpg"];

const choseimage =Math.floor(Math.random()*backgroundList.length);

const bg = (backgroundList[choseimage]);

const bgImage = document.createElement("style");
bgImage.innerText = `body {background-image: url(img/${bg}); background-position: center; background-repeat: no-repeat; background-size: cover; }`;
document.head.appendChild(bgImage);

//or you can choose another way like below

// const bgImage = document.createElement("img");
// bgImage.src = `img/${bg}`;
// document.body.appendChild(bgImage);