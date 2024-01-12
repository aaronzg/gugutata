const slider = document.querySelector('.slider__list');


window.addEventListener('load', () => {
    new Glider(slider, {
        slidesToShow:1,
        slidesToScroll: 1,
        draggable: false,
        dots:'.slider__indicators',
        arrows:{
            prev:'.slider__anterior',
            next: '.slider__siguiente'
        }
    });
})


const menu = document.querySelector('.navMenu');
const botonAbrir = document.querySelector('.navMenu__open');
const botonCerrar = document.querySelector('.navMenu__close');
const contenedorInicio = document.querySelector('.container-start');


contenedorInicio.addEventListener('click', (e) => {
  
  if(e.target.matches('.navMenu__open') | e.target.matches('.fa-solid') | e.target.matches('.navMenu__close') ){
    menu.classList.toggle('menuVisible');
    botonCerrar.classList.toggle('visible');
    botonAbrir.classList.toggle('visible');
  }
});

menu.addEventListener('click', (e) => {
    if(e.target.matches('.link')){
        menu.classList.remove('menuVisible');
        botonCerrar.classList.remove('visible');
        botonAbrir.classList.add('visible');
    }
})
function ejecutarDespuesDeUnSegundo(funcionAEjecutar) {
    setTimeout(funcionAEjecutar, 1000); // 1000 milisegundos = 1 segundo
}
function ejecutarTime3(funcionAEjecutar) {
    setTimeout(funcionAEjecutar, 3000); // 1000 milisegundos = 1 segundo
}
function ejecutarTime6(funcionAEjecutar) {
    setTimeout(funcionAEjecutar, 7500); // 1000 milisegundos = 1 segundo
}
// Easter Egss
const easterEggJImg = document.querySelector('.easter-egg-1-img');
const easterEggJesus = document.querySelector('.easter-egg-1');
const easterEggJS=document.querySelector('.easter-egg-2');
const easterEggJSImg=document.querySelector('.easter-egg-2-img');
const easterEggGl = document.querySelector('.easter-egg-3');
const easterEggGlImg = document.querySelector('.easter-egg-3-img');
const easterEggJesusB = document.querySelector('.easter-egg-1-b');

const screamer1 = document.getElementById('audio1');
screamer1.currentTime = 21;
const saxo = document.getElementById('audio2');
saxo.currentTime = 4;
const cry = document.getElementById('audio3');


easterEggJesus.addEventListener('click',() => {
    easterEggJImg.classList.remove('animation');
    ejecutarTime3(()=>{
        easterEggJImg.classList.add('animation');
        screamer1.play();
        ejecutarDespuesDeUnSegundo(() => {
            screamer1.currentTime = 21;
            screamer1.pause()})
            easterEggJesusB.classList.remove('nr');
    })

})
easterEggJS.addEventListener('click',() => {
    console.log('f');
    easterEggJSImg.classList.remove('animation2');
    ejecutarDespuesDeUnSegundo(()=>{
        easterEggJSImg.classList.add('animation2');
        saxo.currentTime = 4;
        saxo.play();
        ejecutarTime6(() => {
            saxo.pause();
        })
    })

})
easterEggGl.addEventListener('click',() => {
    console.log('f');
    easterEggGlImg.classList.remove('animation2');
    ejecutarDespuesDeUnSegundo(()=>{
        easterEggGlImg.classList.add('animation2');
        cry.play();
        ejecutarTime6(() => {
            cry.pause();
        })
    })

})
