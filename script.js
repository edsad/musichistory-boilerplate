var songs = [];

songs[songs.length] = "Abc > by CDE on the album GFD";
songs[songs.length] = "JKL > by One on the album Swon";
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

var finalArray = [];
var finalSongs=document.getElementById("right-side");
for (i = 0; i < songs.length; i++) {
    var removeThings = songs[i].replace(/[^a-z0-9\s\>]/gi, "");
    var replaceGreaterThan = removeThings.replace(">", "-");

  finalArray.push(replaceGreaterThan)

  finalSongs.innerHTML += `<p> ${finalArray[i]}</p>`
}
console.log(finalArray);


