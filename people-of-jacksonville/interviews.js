const image = document.querySelector('#old-jax');
const image2 = document.querySelector('#jacksonville-skyline');


image.style.display = 'block';
image2.style.display = 'none';

image.onmouseenter = () => {
   image.style.display = 'none';
   image2.style.display = 'block';
};

image.onmouseleave = (e) => {
  image.style.display = 'block';
  image2.style.display = 'none';
};


let audioPlayer = document.querySelectorAll('.audioplayer');
  function hideAll() {
  audioPlayer.forEach(function(el) {
    el.style.display = 'none';
  });
}

let audioCover = document.querySelectorAll('.audiocover');

let interviewTitle = document.querySelectorAll('.interview-title');
  function hideAllInterviews () {
    interviewTitle.forEach(function(el) {
      el.style.display = 'none';
    });
  }

let interviewInfo = document.querySelectorAll('.interview-info');
function hideAllText () {
  interviewInfo.forEach(function(el) {
    el.style.display = 'none';
  });
}

hideAllText();
hideAllInterviews();

hideAll();
audioCover.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open
    hideAll();
    hideAllInterviews();
    hideAllText();

    let players = document.querySelectorAll('audio');
      players.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
      });

    // here is a switch statement to handle opening the right div

 switch (e.target.getAttribute('id')) {
   case 'bethany-photo':
     document.querySelector('#bethany')
       .style.display = 'block';
       document.querySelector('#bethany-interview')
       .style.display = 'block';
       document.querySelector('#bethany-text')
       .style.display = 'block';
     break;
   case 'valentino-photo':
     document.querySelector('#valentino')
       .style.display = 'block';
       document.querySelector('#valentino-interview')
       .style.display = 'block';
       document.querySelector('#valentino-text')
       .style.display = 'block';
     break;
   case 'alexus-photo':
     document.querySelector('#alexus')
     .style.display = 'block';
     document.querySelector('#alexus-interview')
     .style.display = 'block';
     document.querySelector('#alexus-text')
     .style.display = 'block';
     break;
   case 'marlena-photo':
     document.querySelector('#marlena')
     .style.display = 'block';
     document.querySelector('#marlena-interview')
     .style.display = 'block';
     document.querySelector('#marlena-text')
     .style.display = 'block';
     break;
     case 'latasha-photo':
     document.querySelector('#latasha')
     .style.display = 'block';
     document.querySelector('#latasha-interview')
     .style.display = 'block';
     document.querySelector('#latasha-text')
     .style.display = 'block';
     break;
 } // end of switch
 // switch does not need default for this

} // end of function for clicking

}); // end of forEach()
