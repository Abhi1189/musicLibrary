var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },


             uid: function() {
              return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            },

            
  printPlaylists: function() {
       for(var i in library.playlists){
              console.log(i + ': ' + library.playlists[i].name 
              + ' - ' + library.playlists[i].tracks.length +
              ' tracks');
       }
  },

  printTracks: function () {
       for(var i in library.tracks){
              console.log(i + ": " + library.tracks[i].name 
              + ' by ' + library.tracks[i].artist + " (" + 
              library.tracks[i].album + ") ");
       }
  },

  printPlaylist: function (playlistId) {
       console.log(playlistId + ': ' + library.playlists[playlistId].name
       + ' - ' + library.playlists[playlistId].tracks.length + ' tracks');

       for(var i = 0; i < library.playlists[playlistId].tracks.length; i++){
              var trackId = library.playlists[playlistId].tracks[i]; 
              // console.log(trackId);
              console.log(trackId + ': ' + library.tracks[trackId].name + 
              ' by ' + library.tracks[trackId].artist + ' (' + 
              library.tracks[trackId].album + ')');
       }
     

  },

  addTrackToPlaylist: function (trackId, playlistId) {
       library.playlists[playlistId].tracks.push(trackId);
       console.log(library.playlists[playlistId].tracks);
  },

  addTrack: function (name, artist, album) {
       let newtrack = this.uid();
       library.tracks[newtrack] = {"id": newtrack,
                                   name: name,
                                   artist: artist,
                                   album: album
                                  };
       console.log(library.tracks);
  },

  addPlaylist: function (name) {
       let newPlaylist = this.uid();
       library.playlists[newPlaylist] = {id: newPlaylist,
                                         name: name,
                                         tracks: [this.uid()]
                                        };
       console.log(library.playlists);
  }

}
library.addPlaylist("abhi");
// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

// var printPlaylists = function () {
//        for(var i in library.playlists){
//               console.log(i + ': ' + library.playlists[i].name 
//               + ' - ' + library.playlists[i].tracks.length +
//               ' tracks');
//        }
// }
// printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)


// printTracks();


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)


// printPlaylist("p01");

// adds an existing track to an existing playlist


// addTrackToPlaylist("t03", "p01")

// generates a unique id
// (use this for addTrack and addPlaylist)



// adds a track to the library

// addTrack("abhi", "hello", "hello there");

// adds a playlist to the library

// addPlaylist("abhi");


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}