class Helper {
  playPauseAndUpdate (song) {
    player.playPause(song);

    const totalTime = player.getTime();
    $('#time-control .total-time').text(totalTime);
    //player.prettyTime(totalTime);
  }
}
const helper = new Helper();
