'use strict';

const hamberEl = document.querySelector('.menu-btn');
const navEl = document.querySelector('.nav');

let menuOpen = false;
console.log(hamberEl);
hamberEl.addEventListener('click', () => {
  if (!menuOpen) {
    hamberEl.classList.add('open');
    navEl.classList.remove('d-none');
    setTimeout(() => {
      navEl.classList.remove('hidden');
    }, 200);
    menuOpen = true;
  } else {
    hamberEl.classList.remove('open');
    navEl.classList.add('hidden');
    setTimeout(() => {
      navEl.classList.add('d-none');
    }, 300);
    menuOpen = false;
  }
});

if (screen.width > 769) {
  navEl.classList.remove('hidden');
  navEl.classList.remove('d-none');
}

function onChangeWidth() {
  const x = screen.width;
  if (x > 769) {
    navEl.classList.remove('hidden');
    navEl.classList.remove('d-none');
  } else if (x < 768) {
    navEl.classList.add('hidden');
    navEl.classList.add('d-none');
  }
}
