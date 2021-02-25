// music should be an object with title, artist, and album properties
const music = {
songTitle: "Slow Burn",
artist: "Kasey Musgraves",
album: "Golden Hour",
};

// Write code between the <div> tags to output the data from the music object above.
// Use an h2 element for the title and a p element for artist and title
const songSnippet = `
  <div class="song">
    <h2>${music.songTitle}</h2> 
    <p>${music.artist}</p> 
    <p>${music.album}</p>
  </div>
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;

