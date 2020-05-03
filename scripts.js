const icon = document.querySelector('.wrap');
const triTopLeft = document.querySelector('.topleft');
const triTopRight = document.querySelector('.topright');
const triBottomLeft = document.querySelector('.bottomleft');
const triBottomRight = document.querySelector('.bottomright');
const triangles = document.querySelectorAll('.tri');




icon.addEventListener('click', ()=>{
  triTopLeft.classList.add('tlAnimation');
  triTopRight.classList.add('trAnimation');
  triBottomLeft.classList.add('blAnimation');
  triBottomRight.classList.add('brAnimation');
  setTimeout(()=>{
    triangles.forEach(tri =>{
      if(tri.classList.contains('tlAnimation')){
        tri.classList.remove('tlAnimation');
      } else if (tri.classList.contains('trAnimation')) {
        tri.classList.remove('trAnimation');
      } else if (tri.classList.contains('blAnimation')){
        tri.classList.remove('blAnimation');
      } else if (tri.classList.contains('brAnimation')){
        tri.classList.remove('brAnimation');
      }
    }) 
  },3000);
});