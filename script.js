let trump = document.getElementById('trump');
let score = document.getElementById('score');
let scoreAdd = 0;



trump.onclick = function() {
    scoreAdd = scoreAdd +1;
    score.innerText = scoreAdd;

    if (scoreAdd < 50) {
        olvSFX.play()
    }

    if (scoreAdd > 50 && scoreAdd < 200) {
        tlvSFX.play()
    }

    if (scoreAdd > 200 && scoreAdd < 1000) {
        elvSFX.play()
    }

    if (scoreAdd > 1000) {
        flvSFX.play()
    }
}


var olvSFX = new Audio('1lvSFX.wav');
var tlvSFX = new Audio('2lvSFX.wav');
var elvSFX = new Audio('3lvSFX.wav');
var flvSFX = new Audio('4lvSFX.mp3');