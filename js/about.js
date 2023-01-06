const img = document.querySelector('#about .desc-img img');

let index = 0;
let imgSrc = ["img/ISTE/19-20/Com2019.jpg", "img/sfitback.jpg"];

const loopImg = () => {
    setTimeout(() => {
        index = index == 0 ? 1 : 0;
        img.src = imgSrc[index];
        loopImg();
    }, 5000);
};

loopImg();