const library = {
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
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
 const printPlaylists = function() {
 for ( let playlist in library.playlists) {
//console.log(playlist)

 let id = library.playlists[playlist].id
 let name = library.playlists[playlist].name
 let num = library.playlists[playlist].tracks.length

console.log(`${id}${name}${num}tracks `) 

/* console.log(library.playlists[playlist].id)
console.log(library.playlists[playlist].name)
console.log(library.playlists[playlist].tracks.length) */
//console.log("p01: Coding Music -" + playlist.)
 /* }     

}
printPlaylists() */

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

 const printTracks = function() {
 for (let albumname in library.tracks){

let id = library.tracks[albumname].id;
let name = library.tracks[albumname].name;
let artistname=library.tracks[albumname].artist;
let album = library.tracks[albumname].album;


console.log(`${id}${name}${artistname}${album}`)


}
}
printTracks() 
 
// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {

console.log(library.playlists[playlistId].id+": "+library.playlists[playlistId].name+" - "+library.playlists[playlistId].tracks.length+ " tracks");
       for(let t of library.playlists[playlistId].tracks){
              console.log(t+": "+library.tracks[t].name+ " by "+library.tracks[t].artist + " ("+library.tracks[t].album+")")
       }

}
printPlaylist('p01')


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {

const playlists = library.playlists
const tracks = library.tracks

if(tracks[trackId].id===trackId && playlists[playlistId].id === playlistId){

playlists[playlistId].tracks.push(trackId)
return `added ${trackId} to ${playlistId}`

}



}


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
       const tracks = this.tracks;
       let newId = this.generateUid();
       tracks[newId] = {
              id: newId,
              name: name,
              artist: artist,
              album: album
       }
       return `${name} added!`;
}


// adds a playlist to the library
const addPlaylist = function(name) {
       const playlist = this.playlists;
       let newId = this.generateUid();
       playlists[newId] = {
              id: newId,
              name: name,
              artist: artist,
              album: album
       }
       return `${name} added!`;
}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}
