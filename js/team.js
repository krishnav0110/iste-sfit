const facultyContainer = document.querySelector('.profile-container.faculty');
const coreContainer = document.querySelector('.profile-container.core');

const profileTemplate = (profile) => {
    return `<div class="profile">
                <img src="${profile.photo}" alt="${profile.title}" loading="lazy">
                <h3> ${profile.name} </h3>
                <p> ${profile.title} </p>
            </div>
    `;
};

const fetchTeam = async () => {
    const res = await fetch("./data/team.json");
    const data = await res.json();

    facultyContainer.innerHTML = `${data.faculty.map(profileTemplate).join('')}`;
    coreContainer.innerHTML = `${data.core.map(profileTemplate).join('')}`;
}

fetchTeam();