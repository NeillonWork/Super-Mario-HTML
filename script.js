const mario = document.querySelector('.mario-correndo')
const cano = document.querySelector('.cano')
const chao = document.querySelector('.chao')
const planice = document.querySelector('.planice')
const conteudo = document.querySelector('.conteudo')

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
        mario.src = './images/gameOver.gif';
        mario.style.width = '75px';
        mario.style.left = '46px';


        conteudo.style.display = 'flex';
        console.log(conteudo);

        clearInterval(repeticao);

    }

}, 10);


document.addEventListener('keydown', pulo); 

document.addEventListener('click', pulo);