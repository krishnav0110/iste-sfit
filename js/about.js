const img = document.querySelector('#about .desc-img img');

const loopImg = () => {
    let index = 0;
    let imgSrc = ["img/ISTE/22_23/team.jpg", "img/ISTE/19-20/Com2019.jpg", "img/sfitback.jpg"];
    setInterval(() => {
        index = ++index % imgSrc.length;
        img.src = imgSrc[index];
    }, 5000);
};

loopImg();