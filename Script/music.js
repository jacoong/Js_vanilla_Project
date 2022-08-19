const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        height: "300",
        width: "300",
        videoId: "FUeXStr48qY",
        playerVars: {autoplay: 0},
        events: {},
        
      }
      );
      console.log("video is ready");
}

const currentSongName = document.querySelector("#playList");

const PLAYLIST_ID = [
  {
    playListName: "Fall Out Boy - The Last Of The Real Ones",
    videoId: "HWCJI7mCHZE",
  },
  {
    playListName: "같이해요 로파이 노동요",
    videoId: "O4WRwIt5hA4",
  },
  {
    playListName: "맑은 아침을 맞이하는 기분 좋은 연주곡",
    videoId: "Tt4X3Dy6RB8",
  },
  {
    playListName: "창문을 열고, 여름 햇살을 맞으며 듣기 좋은 피아노 연주곡",
    videoId: "xUIUzSCQJks",
  },
];

const playList = document.querySelector("#playList");

let currentPlay = 0
console.log(currentPlay);

function handlePlayBtnClick(){
  player.playVideo(PLAYLIST_ID[currentPlay]);
  currentSongName.innerText =`${PLAYLIST_ID[currentPlay].playListName}`
} 

function handlePauseBtnClick(){
  player.pauseVideo();
} 

function handleNextBtnClick(){
if (currentPlay < PLAYLIST_ID.length-1){
  player.loadVideoById(PLAYLIST_ID[currentPlay].videoId);
  currentSongName.innerText =`${PLAYLIST_ID[currentPlay].playListName}`
  currentPlay = currentPlay+1
console.log(currentPlay);
}
  
if (currentPlay >=(PLAYLIST_ID.length-1)){
  currentPlay = 0;
  player.loadVideoById(PLAYLIST_ID[currentPlay].videoId);
  currentSongName.innerText =`${PLAYLIST_ID[currentPlay].playListName}`
}
} 





const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const nextButton = document.querySelector("#next");

playButton.addEventListener("click", handlePlayBtnClick);
pauseButton.addEventListener("click", handlePauseBtnClick);
nextButton.addEventListener("click", handleNextBtnClick);