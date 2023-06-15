const imgs = document.querySelectorAll('.img-select a');

const imgBtns= [...imgs];
let imgId = 1;

imgBtns.forEach((input) => {
  input.addEventListener('click', (event) => {
    event.preventDefault();
    imgId = input.dataset.id;
    slideImage();
  });
});


function slideImage(){
  const displayWidth = document.querySelector('.img-show img:first-child').clientWidth;
  
  document.querySelector('.img-show').style.transfrom = `translateX(${- (imgId - 1) * displayWidth}px)`;
  
}


window.addEventListener('resize', slideImage);