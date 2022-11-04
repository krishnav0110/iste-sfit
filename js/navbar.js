const navbar = document.querySelector('.navbar');

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > navbar.style.height || document.documentElement.scrollTop > navbar.style.height) {
        navbar.style.backgroundColor = '#000000a0';
    }
    else {
        navbar.style.backgroundColor = '#000000ff';
    }
});