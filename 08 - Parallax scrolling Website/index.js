let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let btn = document.getElementById('button');
let rocks = document.getElementById('rocks');
let forest = document.getElementById('forest');
let water = document.getElementById('water');
let header = document.getElementById('header');

window.addEventListener('scroll', function(){
  let value = window.scrollY;
  
  text.style.top = 45 + value * -0.1 + '%';
  bird1.style.top = 10 + value * -0.2 + 'px';
  bird1.style.left = value * 1.3 + 'px';
  bird2.style.top = 30 + value * -0.5 + 'px';
  bird2.style.left = value * -5 + 'px';
  rocks.style.top = value * -0.12 + 'px';
  forest.style.top = value * 0.25 + 'px';
  btn.style.marginTop =  value * 1.5 + 'px';
  header.style.top = value * 0.5 + 'px';
})