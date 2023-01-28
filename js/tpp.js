const tpp = document.querySelector("#tpp-container");
tpp.innerHTML = `
        <div id="tpp">
            <i class="fa fa-close"></i>
            <div id="tpp-img"><img src="img/tpp.jpg" alt="technical paper presentation banner"></div>
            <div id="tpp-info">
                <ul>
                    <li>Research on the topic we dreamt about.</li>
                    <li>Present the concept and process in details.</li>
                    <li>To know more click check details.</li>
                </ul>
                <div id="link-container">
                    <a class="pri-btn">Register Here</a>
                    <a href="https://www.instagram.com/p/Cn4o-giL-NA/?igshid=YmMyMTA2M2Y=" class="sec-btn">Check Details</a>
                </div>
                <div id="err-msg">Registration will start from February 5, 2023.</div>
            </div>
        </div>
`;

const errMsg = document.querySelector("#tpp-container #err-msg");

const registerBtn = document.querySelector("#tpp-container .pri-btn");
registerBtn.addEventListener('click', () => errMsg.style.display = "block");

const closeBtn = document.querySelector("#tpp-container i");
closeBtn.addEventListener('click', () => tpp.style.display = "none");
tpp.addEventListener('click', (e) => {
    if(e.target !== e.currentTarget)
        return;
    tpp.style.display = "none";
});

setTimeout(() => tpp.style.display = "flex", 7000);