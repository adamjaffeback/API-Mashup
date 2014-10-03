R.ready(function() {
  // play existing space playlist
  // hardcoded max playlist size
  var i = Math.floor(Math.random()*3);
  R.player.play({source: "p11449081", index: i});
  R.player.shuffle();

  // R.request({
  //   method: 'search',
  //   content: {
  //     types: 'Track',
  //     query: 'space'
  //   },
  //   success: function(result) {
  //     var tracks = result.result.results;

      // play one song:
      // var numTracks = tracks.length;
      // var rand = Math.floor(Math.random()*numTracks);
      // var track = tracks[rand];
      // var key = track.key;
      // R.player.play({source: key});


      // save playlist. Can't do from localhost?
      // savePlaylist(tracks);
    // }
  // });
});


var savePlaylist = function(tracks) {
  var self = this;
  R.request({
    method: 'createPlaylist',
    content: {
      name: "SpaceMash",
      description: 'Created with API call',
      tracks: tracks
    },
    success: function(result) {
      var playPlaylistKey = result.result.key;
      playPlaylist(playlistKey);
    }
  });
};

var playPlaylist = function(playListKey) {
  R.player.play({ source: playlistKey });
};
