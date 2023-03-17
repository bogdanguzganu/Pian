const clape = document.querySelectorAll(".key");

function playSounds(url) {
    
    new Audio(url).play();
}

clape.forEach((clapa, i) => {
    const soundNumber = i < 9 ?  '0' + (i+1) : (i+1); 
    const soundUrl = 'sounds/key'+soundNumber+'.mp3';
    console.log(soundUrl);
    clapa.addEventListener('click', () => playSounds(soundUrl));
})