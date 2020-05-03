const icon = document.querySelector('.wrap');
const triTopLeft = document.querySelector('.topleft');
const triTopRight = document.querySelector('.topright');
const triBottomLeft = document.querySelector('.bottomleft');
const triBottomRight = document.querySelector('.bottomright');




icon.addEventListener('click', ()=>{
  triTopLeft.classList.add('tlAnimation');
  triTopRight.classList.add('trAnimation');
  triBottomLeft.classList.add('blAnimation');
  triBottomRight.classList.add('brAnimation');
});