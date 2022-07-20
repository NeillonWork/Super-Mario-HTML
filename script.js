const mario = document.querySelector('.mario-correndo')
const cano = document.querySelector('.cano')
const chao = document.querySelector('.chao')

const pulo = () => {
    mario.classList.add('pulo');

    setTimeout(() => {
        mario.classList.remove('pulo');
    }, 500);
}

const repeticao = setInterval(() => {

    const posicaoDoCano = cano.offsetLeft;
    //computa a posicao bottom do mario ao longo do pulo, o sinal de + esta convertendo a string para number
    const posicaoDoMario = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (posicaoDoCano <= 120 && posicaoDoCano > 0 && posicaoDoMario < 80) {

        //para animacao do cano
        cano.style.animation = 'none';
        cano.style.left = `${posicaoDoCano}px`;

        //para animacao do mario
        mario.style.animation = 'none';
        mario.style.bottom = `${posicaoDoMario}px`;

        //para animacao do chão
        chao.style.animation = 'none';

        //Troca imagem para o mario morrendo
        mario.src = './images/gameOver.gif';
        mario.style.width = '75px';
        mario.style.left = '46px';

        clearInterval(repeticao);

    }

}, 10);


document.addEventListener('keydown', pulo); 