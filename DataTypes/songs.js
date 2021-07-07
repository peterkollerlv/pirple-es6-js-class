"use strict";

/* 
Pirple.com - ES6 js class 
Homework #1 - DataTypes 
*/

// collection of the song attributes in a object, that is able to describe itself
const song = {
  // basic song info
  songName: "The Seed",
  artist: "Aurora",
  album: "FOR THE METAL PEOPLE",
  releaseYear: 2019,
  genre: "Pop",
  durationInSeconds: 267,
  //video clip is a separate object
  videoClip: {
    isAvailable: true,
    isOfficial: true,
    numberOfLikes: 80000,
    numberOfDisslikes: 412,
    videoClipUrl: "https://youtu.be/MUIIkBZVzTU",
    // a function for a self describing video clip object
    getVideoClipInfo: function () {
      return this.isAvailable && this.videoClipUrl.length > 0
        ? `it has a${
            this.isOfficial ? " official" : "n unoffical"
          } video clip at ${this.videoClipUrl}
    that has ${this.numberOfLikes} wonderful likes
    and ${
      this.numberOfDisslikes
    } people just simple dont know what they do on the internet...`
        : `${"does not have a video clip"}`;
    },
  },
  // a function to self describe the song
  printInfo: function () {
    console.log(`
    Name of the song is ${this.songName}
    from ${this.artist}
    released in ${this.releaseYear}
    under genere ${this.genre}
    ${this.videoClip.getVideoClipInfo()}
    it is ${this.durationInSeconds} seconds long.`);
  },
};

song.printInfo();
