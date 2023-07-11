
      const tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      const PLAYLIST_ID = [
        {
          playListName: "공부할때 듣기 좋은 음악",
          videoId: "FUeXStr48qY",
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


      
      let player;
      function onYouTubePlayerAPIReady() 
      {
              player = new YT.Player('player', 
              {
                height: '390',
                width: '640',
                playerVars: 
                {
                  listType:'playlist',
                  list: PLAYLIST_ID
                }
              });
      }


      function onPlayerReady(event) {
        event.target.playVideo();
      }


      const done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }