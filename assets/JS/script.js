const totoro = document.querySelector('.totoro');
const pipe = document.querySelector('.pipe');

const jump = () => {
    totoro.classList.add('jump');

    setTimeout(() => {

        totoro.classList.remove('jump');
    } , 500);
}
const loop = setInterval(() => {

    console.log('loop');

    const pipePosition = pipe.offsetLeft;
    const totoroPosition = +window.getComputedStyle(totoro).bottom.replace('px','');
    
    if(pipePosition <= 110 && totoroPosition < 80) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        totoro.style.animation = 'none';
        totoro.style.bottom = `${totoroPosition}px`;

        totoro.src ='./assets/img/totoro-over.gif';
        totoro.style.width = '150px'

        clearInterval(loop);

    }
}, 10)

document.addEventListener('keydown', jump);