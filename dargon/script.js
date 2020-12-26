score = 0;
cross = true;
document.onkeydown = function(e){
    console.log("key code is: ",e.keyCode)
    if(e.keyCode==38){
        daino = document.querySelector('.daino');
        daino.classList.add('animateDaino');
        setTimeout(() => {
            daino.classList.remove('animateDaino')
        }, 700);
    }
    if(e.keyCode==39){
        daino = document.querySelector('.daino');
        dainoX =  parseInt( window.getComputedStyle(daino, null).getPropertyValue('left'));
        daino.style.left = dainoX + 112 + "px";
    }
    if(e.keyCode==37){
        daino = document.querySelector('.daino');
        dainoX =  parseInt( window.getComputedStyle(daino, null).getPropertyValue('left'));
        daino.style.left = (dainoX - 112) + "px";
    }
}

setInterval(() => {
    daino = document.querySelector('.daino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(daino, null).getPropertyValue('left'));
    dy = parseInt( window.getComputedStyle(daino, null).getPropertyValue('top'));

    ox = parseInt( window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY =  Math.abs(dy-oy);
    console.log(offsetX, offsetY)
    if(offsetX< 73 && offsetY< 52){
        gameOver.style.visibility ='visible';
        obstacle.classList.remove('obstacleAni')
    }
    else if(offsetX< 145 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
         }, 1000);
         setInterval(() => {
            aniDur = parseFloat( window.getComputedStyle(obstacle, null).getPropertyValue('animation.duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log("New animation duration: ", newDur) 
         }, 500);
        
    }


}, 10);

function updateScore(score){
    scoreCont.innerHTML = "Your Score: " + score

}