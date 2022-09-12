function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleTimeString();
  timeDisplay.textContent = dateString;
}
const slideshowImagesNum = 21;
const slideshowElement = document.getElementById('slideshow');

const zooImagesNum = 14;
const zooctx = document.getElementById('smallSlideshow');

const japanImagesNum = 16;
const japanctx = document.getElementById('smallSlideshowJapan');

const purdueImagesNum = 16;
const purduectx = document.getElementById('smallSlideshowPurdue');

const chicagoImagesNum = 11;
const chicagoctx = document.getElementById('smallSlideshowChicago');

var slideshowShowing;
let zooShowing;
let japanShowing;
let purdueShowing;
let chicagoShowing;


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function renderImage(name) {
  let infoArray = getEssentialInfo(name);
  let elem = infoArray[0],
      imgPath = infoArray[1],
      imgNum = infoArray[2];
  if (name == "slideshow") {
    let currentPath = imgPath + slideshowIndex + ".jpg";
    elem.style.backgroundImage = "url('" + currentPath +"')";
    let isLastPhoto = slideshowIndex == imgNum - 1;
    slideshowIndex = isLastPhoto ? 0 : slideshowIndex + 1;
  } else if (name == "zoo") {
    let currentPath = imgPath + zooIndex + ".jpg";
    elem.style.backgroundImage = "url('" + currentPath +"')";
    let isLastPhoto = zooIndex == imgNum - 1;
    zooIndex = isLastPhoto ? 0 : zooIndex + 1;
  } else if (name == "japan") {
    let currentPath = imgPath + japanIndex + ".jpg";
    elem.style.backgroundImage = "url('" + currentPath +"')";
    let isLastPhoto = japanIndex == imgNum - 1;
    japanIndex = isLastPhoto ? 0 : japanIndex + 1;
  } else if (name == "purdue") {
    let currentPath = imgPath + purdueIndex + ".jpg";
    elem.style.backgroundImage = "url('" + currentPath +"')";
    let isLastPhoto = purdueIndex == imgNum - 1;
    purdueIndex = isLastPhoto ? 0 : purdueIndex + 1;
  } else if (name == "chicago") {
    let currentPath = imgPath + chicagoIndex + ".jpg";
    elem.style.backgroundImage = "url('" + currentPath +"')";
    let isLastPhoto = chicagoIndex == imgNum - 1;
    chicagoIndex = isLastPhoto ? 0 : chicagoIndex + 1;
  }
}

// Returns element, beginning images' path, and # of images
function getEssentialInfo (name) {
  if (name == "slideshow") {
    let returnArray = [slideshowElement, "./pictures/slideshow/", slideshowImagesNum];
    return returnArray;
  } else if (name == "zoo") {
    let returnArray = [zooctx, "./pictures/zoo/", zooImagesNum];
    return returnArray;
  } else if (name == "japan") {
    let returnArray = [japanctx, "./pictures/japan/", japanImagesNum];
    return returnArray;
  } else if (name == "purdue") {
    let returnArray = [purduectx, "./pictures/purdue/", purdueImagesNum];
    return returnArray;
  } else if (name == "chicago") {
    let returnArray = [chicagoctx, "./pictures/chicago/", chicagoImagesNum];
    return returnArray;
  } else {
    return "It dun work son"
  }
}


var slideshowIndex = getRndInteger(0, slideshowImagesNum - 1);
var zooIndex = getRndInteger(0, zooImagesNum - 1);
var japanIndex = getRndInteger(0, japanImagesNum - 1);
var purdueIndex = getRndInteger(0, purdueImagesNum - 1);
var chicagoIndex = getRndInteger(0, chicagoImagesNum - 1);

if ( document.URL.includes("photography") ) {
  renderImage("slideshow");
  renderImage("zoo");
  renderImage("japan");
  renderImage("purdue");
  renderImage("chicago");
  slideshowShowing = setInterval(renderImage, 6000, "slideshow");
  zooShowing = setInterval(renderImage, 6000, "zoo");
  japanShowing = setInterval(renderImage, 6000, "japan");
  purdueShowing = setInterval(renderImage, 6000, "purdue");
  chicagoShowing = setInterval(renderImage, 6000, "chicago");
} else if (slideshowShowing) {
  clearInterval(slideshowShowing);
  clearInterval(zooShowing);
  clearInterval(japanShowing);
  clearInterval(purdueShowing);
  clearInterval(chicagoShowing);
}

let timeShowing;
if (document.URL.includes("index.html") || !document.URL.endsWith(".html")){
  timeShowing = setInterval(refreshTime, 1000);
} else if (timeShowing) {
  clearInterval(timeShowing);
  timeShowing = false;

}
// setInterval(refreshTime, 1000);
