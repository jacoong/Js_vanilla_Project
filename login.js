      // 2. 이 코드는 IFrame Player API 코드를 비동기 적으로로드합니다.
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

      // 3.이 함수는 <iframe> (및 YouTube 플레이어)을 만듭니다.API 코드 다운로드 후.
      
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

      // 4. API는 동영상 플레이어가 준비되면이 함수를 호출합니다.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. API는 플레이어의 상태가 변경 될 때이 함수를 호출합니다.이 함수는 비디오 
      //(상태 = 1)를 재생할 때 플레이어는 6 초 동안 재생 한 다음 중지해야합니다.
      const done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }