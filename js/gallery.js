const gallery = document.querySelector('.gallery .gallery-container');
const loadMoreBtn = document.querySelector('.gallery .load');

const imgTemplate = (img) => {
    media = ``;
    if(img.src.endsWith(".mp4")) {
        media = `<video autoplay loop muted plays-inline controls>
                    <source src="${img.src}" type="video/mp4">
                </video>`;
    }
    else {
        media = `<img src="${img.src}" alt="${img.event}">`;
    }
    return `<div class="gallery-img">
		        ${media}
		        <div>
			        <h3>${img.event}</h3>
			        <p>${img.date}</p>
		        </div>
	        </div>
    `;
};

const fetchImages = async (blockNum) => {
    const res = await fetch(`images.php?bnum=${blockNum}`);
    const data = await res.json();
    if(res.status == 200 && data == null) {
        loadMoreBtn.style.display = "none";
        return;
    }
    gallery.innerHTML += `${data.block.map(imgTemplate).join('')}`;
};

let blockNum = 1;
loadMoreBtn.addEventListener("click", () => {
    ++blockNum;
    fetchImages(blockNum);
});

fetchImages(blockNum);