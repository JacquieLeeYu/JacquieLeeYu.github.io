function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleTimeString();
    timeDisplay.textContent = dateString;
  }

const slideshowImagesNum = 21;
var currentSlideshowIndex = getRndInteger(0, slideshowImagesNum - 1);

const slideshowElement = document.getElementById('slideshow');

function renderSlideshowImage() {
    let currentImagePath = "./pictures/slideshow/" + currentSlideshowIndex + ".jpg";
    slideshowElement.style.backgroundImage = "url('" + currentImagePath +"')";
    const isLastPhoto = currentSlideshowIndex === slideshowImagesNum - 1;
    currentSlideshowIndex = isLastPhoto ? 0 : currentSlideshowIndex + 1;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const zooImagesNum = 13;
var currentZooIndex = getRndInteger(0, zooImagesNum - 1);
const zooctx = document.getElementById('smallSlideshow');
function renderZooImage(place) {
  let currentZooPath = "./pictures/zoo/" + currentZooIndex + ".jpg";
  zooctx.style.backgroundImage = "url('" + currentZooPath +"')";
  const isLastZooPhoto = currentZooIndex === zooImagesNum - 1;
  currentZooIndex = isLastZooPhoto ? 0 : currentZooIndex + 1;
}

const japanImagesNum = 15;
var currentJapanIndex = getRndInteger(0, japanImagesNum - 1);
const japanctx = document.getElementById('smallSlideshowJapan');
function renderJapanImage() {
  let currentJapanPath = "./pictures/japan/" + currentJapanIndex + ".jpg";
  japanctx.style.backgroundImage = "url('" + currentJapanPath +"')";
  const isLastJapanPhoto = currentJapanIndex === japanImagesNum - 1;
  currentJapanIndex = isLastJapanPhoto ? 0 : currentJapanIndex + 1;
}

const purdueImagesNum = 15;
var currentPurdueIndex = getRndInteger(0, purdueImagesNum - 1);
const purduectx = document.getElementById('smallSlideshowPurdue');
function renderPurdueImage() {
  let currentPurduePath = "./pictures/purdue/" + currentPurdueIndex + ".jpg";
  purduectx.style.backgroundImage = "url('" + currentPurduePath +"')";
  const isLastPurduePhoto = currentPurdueIndex === purdueImagesNum - 1;
  currentPurdueIndex = isLastPurduePhoto ? 0 : currentPurdueIndex + 1;
}

const chicagoImagesNum = 10;
var currentChicagoIndex = getRndInteger(0, chicagoImagesNum - 1);
const chicagoctx = document.getElementById('smallSlideshowChicago');
function renderChicagoImage() {
  let currentChicagoPath = "./pictures/chicago/" + currentChicagoIndex + ".jpg";
  chicagoctx.style.backgroundImage = "url('" + currentChicagoPath +"')";
  const isLastChicagoPhoto = currentChicagoIndex === chicagoImagesNum - 1;
  currentChicagoIndex = isLastChicagoPhoto ? 0 : currentChicagoIndex + 1;
}



let slideshowShowing;
let zooShowing;
let japanShowing;
let purdueShowing;
let chicagoShowing;
if ( document.URL.includes("photography") ) {
  renderSlideshowImage();
  slideshowShowing = setInterval(renderSlideshowImage, 8000);
  renderZooImage();
  zooShowing = setInterval(renderZooImage, 8000);
  renderJapanImage();
  japanShowing = setInterval(renderJapanImage, 8000);
  renderPurdueImage();
  purdueShowing = setInterval(renderPurdueImage, 8000);
  renderChicagoImage();
  chicagoShowing = setInterval(renderChicagoImage, 8000);
} else if (slideshowShowing) {
  clearInterval(slideshowShowing);
  clearInterval(zooShowing);
}

let timeShowing;
if (document.URL.includes("index.html") || !document.URL.endsWith(".html")){
  timeShowing = setInterval(refreshTime, 1000);
} else if (timeShowing) {
  clearInterval(timeShowing);
  timeShowing = false;

}
// setInterval(refreshTime, 1000);
