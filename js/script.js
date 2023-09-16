let btnMenu = document.querySelector('header button');
let headerEl = document.querySelector('header');
btnMenu.onclick = () => {
    headerEl.classList.toggle('showMenu');
};

let targetEl = document.getElementById('to-form');
let scrollBtns = document.getElementsByClassName('btn-scroll');
function scrollToForm () {
    targetEl.scrollIntoView({behavior: 'smooth'});
};

Array.from(scrollBtns).forEach(btn => {
    btn.addEventListener('click', scrollToForm)
})