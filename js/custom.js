function changeBg(e){
    document.getElementById('slider').src = e;
}

let linkOne = document.querySelector('.home');
let linkTwo = document.querySelector('.about');
let linkThree = document.querySelector('.profile');
let linkFour = document.querySelector('.developer');
let linkFive = document.querySelector('.contact');


linkOne.addEventListener('mouseover', changeBg('../images/img-01.jfif'));

linkTwo.addEventListener('mouseover', changeBg('../images/img-02.jfif'));
