const scrollTopBtn = document.querySelector("#scrollTopBtn");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)
	    scrollTopBtn.style.display = "block";
    else
    	scrollTopBtn.style.display = "none";
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0, behavior: 'smooth'
    });
})