// Background Image Picker
/* let bgList = [
    "BirdFoggyForest.jpeg",
    "FogForest.jpeg",
    "FogLandscape.jpeg",
    "FogMountain.jpeg",
    "PersonOnDockInRain.jpeg",
    "RainyRoad.jpeg",
    "RiverForest.jpeg",
    "TropicalForest.jpeg"
];

let randomBgName = bgList[Math.floor(Math.random() * bgList.length)];

document.body.style.backgroundImage = `url("./assets/background/${randomBgName}")`; */

// document.body.style.backgroundImage = 'url("./assets/background/RainyRoad.jpeg")';
document.body.style.backgroundRepeat = `no-repeat`;
document.body.style.backgroundSize = `cover`;

// Project Links
let cards = document.getElementsByClassName('glass');

for (let project of cards) {
    project.addEventListener('click', (req, res) => {
        window.open(`/projects/${project.getAttribute('project-name')}`, "about:blank");
    });
};