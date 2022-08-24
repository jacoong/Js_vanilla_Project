const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        height: "300",
        width: "300",
        videoId: "Rz6hFvT4uWo",
        playerVars: {autoplay: 0},
        events: {},
        
      }
      );
      console.log("video is ready");
}

const currentSongName = document.querySelector("#playList");



const PLAYLIST_ID = [
  {
    playListName: "Taeyeon (태연) - 제주도의 푸른 밤 (The Blue Night Of Jeju Island) ",
    videoId: "Rz6hFvT4uWo"
  },

  {
    playListName: "Jazz Piano Radio - Slow Jazz Music",
    videoId: "Dx5qFachd3A",
  },
  {
    playListName: "𝐃𝐫𝐚𝐠𝐨𝐧 𝐍𝐢𝐠𝐡𝐭 - 𝐄𝐧𝐝 𝐨𝐟 𝐭𝐡𝐞 𝐖𝐨𝐫𝐥𝐝",
    videoId: "RFJCLaq5wL0",
  },
  {
    playListName: "Kyuhyun (규현) - 삼다도 소식 (Samdado News)",
    videoId: "LIpyNn7GKx4",
  },
];

const playList = document.querySelector("#playList");

let currentPlay = 0
console.log(currentPlay);

function handlePlayBtnClick(){
  playButton.classList.toggle(HIDDEN);
  pauseButton.classList.toggle(HIDDEN);
  player.playVideo(PLAYLIST_ID[currentPlay]);
  currentSongName.innerText =`${PLAYLIST_ID[currentPlay].playListName}`
} 

function handlePauseBtnClick(){
  playButton.classList.toggle(HIDDEN);
  pauseButton.classList.toggle(HIDDEN);
  player.pauseVideo();
} 

function handleNextBtnClick(){
  currentPlay += 1
if (currentPlay <= PLAYLIST_ID.length-1){
  player.loadVideoById(PLAYLIST_ID[currentPlay].videoId);
  currentSongName.innerText =`${PLAYLIST_ID[currentPlay].playListName}`
console.log(currentPlay);
}
  
if (currentPlay >(PLAYLIST_ID.length-1)){
  currentPlay = 0;
  player.loadVideoById(PLAYLIST_ID[currentPlay].videoId);
  currentSongName.innerText =`${PLAYLIST_ID[currentPlay].playListName}`
  console.log(currentPlay);
}
}

function handleBeforeBtnClick(){
    currentPlay-=1
   
  if (currentPlay < PLAYLIST_ID.length && currentPlay > 0){
    player.loadVideoById(PLAYLIST_ID[currentPlay].videoId);
    currentSongName.innerText =`${PLAYLIST_ID[currentPlay].playListName}`
    console.log(currentPlay);
  }

  if (currentPlay ===-1){
    currentPlay = PLAYLIST_ID.length -1
    player.loadVideoById(PLAYLIST_ID[currentPlay].videoId);
    currentSongName.innerText =`${PLAYLIST_ID[currentPlay].playListName}`
    console.log("aa");
  }
}



const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const nextButton = document.querySelector("#next");
const beforeButton = document.querySelector("#before");

beforeButton.addEventListener("click", handleBeforeBtnClick);
playButton.addEventListener("click", handlePlayBtnClick);
pauseButton.addEventListener("click", handlePauseBtnClick);
nextButton.addEventListener("click", handleNextBtnClick);