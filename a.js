'use strict'

let mySong = document.getElementById('mySong');
let icon = document.getElementById('icon');


icon.onclick = () => {
    if(mySong.paused){
        mySong.play();
        icon.src = 'images/pause.png';
    }else{
        mySong.pause();
        icon.src = 'images/play.png';
    }
    
};

