
let audioPlayer = document.querySelectorAll('.audioplayer');
  function hideAll() {
  audioPlayer.forEach(function(el) {
    el.style.display = 'none';
  });
}

let albumCovers = document.querySelectorAll('.albumcover');

let songTitles = document.querySelectorAll('.song-title');
  function hideAllSongs () {
    songTitles.forEach(function(el) {
      el.style.display = 'none';
    });
  }

hideAllSongs();

hideAll();
albumCovers.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open
    hideAll();
    hideAllSongs();

    let players = document.querySelectorAll('audio');
      players.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
      });

    // here is a switch statement to handle opening the right div

 switch (e.target.getAttribute('id')) {
   case 'heatmiser':
     document.querySelector('#plainclothes')
       .style.display = 'block';
       document.querySelector('#plainclothes-song')
       .style.display = 'block';
     break;
   case 'romancandle':
     document.querySelector('#noname')
       .style.display = 'block';
       document.querySelector('#noname-song')
       .style.display = 'block';
     break;
   case 'missmisery':
     document.querySelector('#newmoon')
     .style.display = 'block';
     document.querySelector('#missmisery-song')
     .style.display = 'block';
     break;
   case 'basement':
     document.querySelector('#twilight')
     .style.display = 'block';
     document.querySelector('#twilight-song')
     .style.display = 'block';
     break;
 } // end of switch
 // switch does not need default for this

} // end of function for clicking

}); // end of forEach()
