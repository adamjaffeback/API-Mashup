R.ready(function() {
  R.request({
    method: 'search',
    content: {
      types: 'Track',
      query: 'space'
    },
    success: function(result) {
      var tracks = result.result.results;
      var numTracks = tracks.length;
      var rand = Math.floor(Math.random()*numTracks);
      var track = tracks[rand];
      var key = track.key;
      R.player.play({source: key});
    }
  });
});
