const mario = document.querySelector('.mario-correndo')
const cano = document.querySelector('.cano')
const chao = document.querySelector('.chao')
const planice = document.querySelector('.planice')
const conteudo = document.querySelector('.conteudo')
const reset = document.querySelector('.reset')
const body = document.querySelector('body')
const gameBoard = document.querySelector('.game-board')
let scoreCountt = 0;

const dead = document.querySelector('#audioIdGame')

const nuvens01 = document.querySelector('.nuvens-01')
const nuvens02 = document.querySelector('.nuvens-02')
const nuvens03 = document.querySelector('.nuvens-03')
const nuvens04 = document.querySelector('.nuvens-04')
const nuvens05 = document.querySelector('.nuvens-05')

const pulo = () => {
    mario.classList.add('pulo');

    setTimeout(() => {
        mario.classList.remove('pulo');
    }, 500);
}

const repeticao = setInterval(() => {
    const posicaoDoCano = cano.offsetLeft;    

    const posicaoDaNuvem01 = nuvens01.offsetLeft;
    const posicaoDaNuvem02 = nuvens02.offsetLeft;
    const posicaoDaNuvem03 = nuvens03.offsetLeft;
    const posicaoDaNuvem04 = nuvens04.offsetLeft;
    const posicaoDaNuvem05 = nuvens05.offsetLeft; 

    //computa a posicao bottom do mario ao longo do pulo, o sinal de + esta convertendo a string para number
    const posicaoDoMario = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (posicaoDoCano <= 120 && posicaoDoCano > 0 && posicaoDoMario < 80) {

        dead.src="./audio/Mario Dead.mp3"
        mario.src = '';

        //para animacao do cano
        cano.style.animation = 'none';
        cano.style.left = `${posicaoDoCano}px`;

        //para animacao do mario
        mario.style.animation = 'none';
        mario.style.bottom = `${posicaoDoMario}px`;

        //para animacao do chão
        chao.style.animation = 'none';

        //para animacao do chão
        planice.style.animation = 'none';

        //para animacao da nuvem - 01
        nuvens01.style.left = `${posicaoDaNuvem01}px`;
        nuvens01.style.animation = 'none';

        //para animacao da nuvem - 02
        nuvens02.style.left = `${posicaoDaNuvem02}px`;
        nuvens02.style.animation = 'none';

        //para animacao da nuvem - 03
        nuvens03.style.left = `${posicaoDaNuvem03}px`;
        nuvens03.style.animation = 'none';

        //para animacao da nuvem - 04
        nuvens04.style.left = `${posicaoDaNuvem04}px`;
        nuvens04.style.animation = 'none';

        //para animacao da nuvem - 05
        nuvens05.style.left = `${posicaoDaNuvem05}px`;
        nuvens05.style.animation = 'none';

        //Troca imagem para o mario morrendo
      //  mario.src = './images/gameOver.gif';

        mario.src = './images/gameOver.png';
        mario.style.width = '75px';
        mario.style.left = '46px';

        reset.style.display= ('flex');

        clearInterval(repeticao);
    }

    scoreCountt = scoreCountt + 1;
    document.getElementById("counterspan").innerHTML = scoreCountt;
    console.log(scoreCountt);

    const bonus = document.querySelector('.bonus');
    const bonusIMG = document.querySelector('.bonus');

if( scoreCountt == 500){    
        dead.src="./audio/wow.mp3";
        bonus.style.display = ('flex');

    }else if ( scoreCountt == 600){   
        dead.src="./audio/game.mp3";
        bonus.style.display = ('none');

    }else if ( scoreCountt == 2000){  
        dead.src="./audio/bambam.mp3";

    }else if ( scoreCountt == 2500){   
        bonus.style.display = ('none');

        dead.src="./audio/dark.mp3";
        
      //fundo do jogo
      gameBoard.style.backgroundImage = "url('images/telaFuria2.gif')";
      gameBoard.style.backgroundRepeat = ('no-repeat');
      gameBoard.style.backgroundSize = ('cover');
      gameBoard.style.width = ('100%');
      gameBoard.style.bottom =('');
      gameBoard.style.opacity =('1');

      //fundo da pagina (BODY do navegador)
      body.style.backgroundImage = "url('images/telaFuria2.gif')";
      body.style.backgroundRepeat = ('no-repeat');
      body.style.backgroundSize = ('cover');
      body.style.width = ('100%');

      //Imagem do Bowser
      planice.style.animation = ('none');
      planice.style.animation =         ('fadeIn 3s');
      planice.style.backgroundImage = "url('images/bowser-dark.png')";
      planice.style.backgroundRepeat = ('no-repeat');
      planice.style.backgroundSize = ('cover');
      planice.style.width = ('100%');
      planice.style.bottom =('');
      planice.style.opacity =('0.9');

      nuvens01.src = './images/bowser.gif';
      nuvens01.style.width = ('200px');
      nuvens01.style.animationDuration = ('25s');

      nuvens02.src = './images/fantasma.gif';
      nuvens03.src = './images/fantasma.gif';
      nuvens04.src = './images/fantasma.gif';
      nuvens05.src = './images/fantasma.gif';

      cano.src = './images/planta.gif';

    }else{}


}, 10);

document.addEventListener('click', audioGame);
document.addEventListener('keydown', audioGame); 

function audioGame (){

    audioIdGame.play();
    audioIdPulo.play();
}

document.addEventListener('keydown', pulo); 
document.addEventListener('click', pulo);

