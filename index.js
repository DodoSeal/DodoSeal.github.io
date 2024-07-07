// Background Image Picker
let bgList = [
    /* "BirdFoggyForest.jpeg", */
    "FogForest.jpeg",
    /* "FogLandscape.jpeg",
    "FogMountain.jpeg",
    "PersonOnDockInRain.jpeg", */
    "RainyRoad.jpeg",
    "RiverForest.jpeg",
    /* "TropicalForest.jpeg" */
];

let randomBgName = bgList[Math.floor(Math.random() * bgList.length)];

document.body.style.backgroundImage = `url("./assets/background/${randomBgName}")`;
/* document.body.style.backgroundImage = 'url("./assets/background/RainyRoad.jpeg")'; */
document.body.style.backgroundRepeat = `no-repeat`;
document.body.style.backgroundSize = `cover`;

// Glass Rotation
let rotationDeg = 0;
let glass = document.getElementById('glass');

glass.addEventListener('click', (e) => rotateGlass(45));

function rotateGlass(degrees) {
    rotationDeg += degrees;
    glass.style.transform = `rotate(${rotationDeg}deg)`;
    glass.style.webkitTransform = `rotate(${rotationDeg}deg)`;
};

// Socials
let discord = document.getElementById('discord');
let twitter = document.getElementById('twitter');
let github = document.getElementById('github');
let email = document.getElementById('email');

discord.addEventListener('click', () => socialsRedirect("https://discordapp.com/users/777043422031773698"));
twitter.addEventListener('click', () => socialsRedirect("https://x.com/@WestJordan08"));
github.addEventListener('click', () => socialsRedirect("https://github.com/DodoSeal"));
email.addEventListener('click', () => socialsRedirect("mailto:admin@dodoseal.com"));

function socialsRedirect(url) {
    window.open(url, "about:");
    rotateGlass(-45);
};