const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        height: "300",
        width: "300",
        videoId: "HWCJI7mCHZE",
        playerVars: {autoplay: 0},
        events: {},
        
      }
      );
      console.log("video is ready");
}

const currentSongName = document.querySelector("#playList");

const PLAYLIST_ID = [
  {
    playListName: "[1]Fall Out Boy - The Last Of The Real Ones",
    videoId: "HWCJI7mCHZE",
  },
  {
    playListName: "[2]같이해요 로파이 노동요",
    videoId: "O4WRwIt5hA4",
  },
  {
    playListName: "[3]맑은 아침을 맞이하는 기분 좋은 연주곡",
    videoId: "Tt4X3Dy6RB8",
  },
  {
    playListName: "[4]창문을 열고, 여름 햇살을 맞으며 듣기 좋은 피아노 연주곡",
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