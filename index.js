const nostalgia  = document.querySelector('#audioId');
const backImage  = document.querySelector('#bgNostalgia');
const backImage2 = document.querySelector('#bgNostalgia2');
const body       = document.querySelector('body');

function playNostalgia(){
    nostalgia.style.display= ('flex')
    audioId.play();

backImage.classList.add("nostalgia-body");
body.style.backgroundColor =('black');

backImage2.classList.add("nostalgia-body2");
backImage2.style.backgroundImage = "url('images/pixel-jeff-mario.gif')";
   

backImage2.style.backgroundColor=    ('black');
backImage2.style.backgroundPosition= ('center');
backImage2.style.backgroundRepeat=   ('no-repeat');
backImage2.style.backgroundSize=     ('cover');
backImage2.style.animation =         ('fadeIn 25s');
backImage.style.animation =         ('fadeInNostalgia 3s');

}

