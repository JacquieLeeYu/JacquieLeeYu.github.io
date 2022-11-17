function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleTimeString();
  timeDisplay.textContent = dateString;
}
const slideshowImagesNum = 21;
const slideshowElement = document.getElementById('slideshow');
const slideshowPrevctx = document.getElementById('slideshowPrev');
const slideshowNextctx = document.getElementById('slideshowNext');

const londonImagesNum = 28;
const londonctx = document.getElementById('smallSlideshowLondon');
const londonPrevctx = document.getElementById('slideshowPrev');
const londonNextctx = document.getElementById('slideshowNext');

const parisImagesNum = 12;
const parisctx = document.getElementById('smallSlideshowParis');
const parisPrevctx = document.getElementById('slideshowPrev');
const parisNextctx = document.getElementById('slideshowNext');

const zooImagesNum = 14;
const zooctx = document.getElementById('smallSlideshowZoo');
const zooPrevctx = document.getElementById('slideshowPrev');
const zooNextctx = document.getElementById('slideshowNext');

const japanImagesNum = 16;
const japanctx = document.getElementById('smallSlideshowJapan');
const japanPrevctx = document.getElementById('slideshowPrev');
const japanNextctx = document.getElementById('slideshowNext');

const purdueImagesNum = 16;
const purduectx = document.getElementById('smallSlideshowPurdue');
const purduePrevctx = document.getElementById('slideshowPrev');
const purdueNextctx = document.getElementById('slideshowNext');

const chicagoImagesNum = 11;
const chicagoctx = document.getElementById('smallSlideshowChicago');
const chicagoPrevctx = document.getElementById('slideshowPrev');
const chicagoNextctx = document.getElementById('slideshowNext');

var slideshowShowing;
let londonShowing;
let parisShowing;
let zooShowing;
let japanShowing;
let purdueShowing;
let chicagoShowing;

var morseTime;
var endTime;
var morseShortTime;
var morseLongTime;
var morseSpaceTime;
var currentMorse = "";
var morseTimeout;
const beep = document.getElementById("morseBeep");

// O = dit, I = dah
const morseToLetter = {
  OI:"A",
  IOOO:"B",
  IOIO:"C",
  IOO:"D",
  O:"E",
  OOIO:"F",
  IIO:"G",
  OOOO:"H",
  OO:"I",
  OIII:"J",
  IOI:"K",
  OIOO:"L",
  II:"M",
  IO:"N",
  III:"O",
  OIIO:"P",
  IIOI:"Q",
  OIO:"R",
  OOO:"S",
  I:"T",
  OOI:"U",
  OOOI:"V",
  OII:"W",
  IOOI:"X",
  IOII:"Y",
  IIOO:"Z",
  OIIII:"1",
  OOIII:"2",
  OOOII:"3",
  OOOOI:"4",
  OOOOO:"5",
  IOOOO:"6",
  IIOOO:"7",
  IIIOO:"8",
  IIIIO:"9",
  IIIII:"0",
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function goBack(name) {
  if (name == "slideshow") {
    clearInterval(slideshowShowing);
    slideshowIndex = slideshowIndex < 2 ? slideshowImagesNum - 2 + slideshowIndex : slideshowIndex - 2;
    renderImage("slideshow");
    slideshowShowing = setInterval(renderImage, 8000, 'slideshow');
  } else if (name == "london") {
    clearInterval(londonShowing);
    londonIndex = londonIndex < 2 ? londonImagesNum - 2 + londonIndex : londonIndex - 2;
    renderImage("london");
    londonShowing = setInterval(renderImage, 8000, 'london');
  } else if (name == "paris") {
    clearInterval(parisShowing);
    parisIndex = parisIndex < 2 ? parisImagesNum - 2 + parisIndex : parisIndex - 2;
    renderImage("paris");
    parisShowing = setInterval(renderImage, 8000, 'paris');
  } else if (name == "zoo") {
    clearInterval(zooShowing);
    zooIndex = zooIndex < 2 ? zooImagesNum - 2 + zooIndex : zooIndex - 2;
    renderImage("zoo");
    zooShowing = setInterval(renderImage, 8000, 'zoo');
  } else if (name == "japan") {
    clearInterval(japanShowing);
    japanIndex = japanIndex < 2 ? japanImagesNum - 2 + japanIndex : japanIndex - 2;
    renderImage("japan");
    japanShowing = setInterval(renderImage, 8000, 'japan');
  } else if (name == "purdue") {
    clearInterval(purdueShowing);
    purdueIndex = purdueIndex < 2 ? purdueImagesNum - 2 + purdueIndex : purdueIndex - 2;
    renderImage("purdue");
    purdueShowing = setInterval(renderImage, 8000, 'purdue');
  } else if (name == "chicago") {
    clearInterval(chicagoShowing);
    chicagoIndex = chicagoIndex < 2 ? chicagoImagesNum - 2 + chicagoIndex : chicagoIndex - 2;
    renderImage("chicago");
    chicagoShowing = setInterval(renderImage, 8000, 'chicago');
  }
}

function goForward(name) {
  if (name == "slideshow") {
    clearInterval(slideshowShowing);
    renderImage("slideshow");
    slideshowShowing = setInterval(renderImage, 8000, 'slideshow');
  } else if (name == "london") {
    clearInterval(londonShowing);
    renderImage("london");
    londonShowing = setInterval(renderImage, 8000, 'london');
  } else if (name == "paris") {
    clearInterval(parisShowing);
    renderImage("paris");
    parisShowing = setInterval(renderImage, 8000, 'paris');
  } else if (name == "zoo") {
    clearInterval(zooShowing);
    renderImage("zoo");
    zooShowing = setInterval(renderImage, 8000, 'zoo');
  } else if (name == "japan") {
    clearInterval(japanShowing);
    renderImage("japan");
    japanShowing = setInterval(renderImage, 8000, 'japan');
  } else if (name == "purdue") {
    clearInterval(purdueShowing);
    renderImage("purdue");
    purdueShowing = setInterval(renderImage, 8000, 'purdue');
  } else if (name == "chicago") {
    clearInterval(chicagoShowing);
    renderImage("chicago");
    chicagoShowing = setInterval(renderImage, 8000, 'chicago');
  }
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
  } else if (name == "london") {
    let currentPath = imgPath + londonIndex + ".jpg";
    elem.style.backgroundImage = "url('" + currentPath +"')";
    let isLastPhoto = londonIndex == imgNum - 1;
    londonIndex = isLastPhoto ? 0 : londonIndex + 1;
  } else if (name == "paris") {
    let currentPath = imgPath + parisIndex + ".jpg";
    elem.style.backgroundImage = "url('" + currentPath +"')";
    let isLastPhoto = parisIndex == imgNum - 1;
    parisIndex = isLastPhoto ? 0 : parisIndex + 1;
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
  } else if (name == "london") {
    let returnArray = [londonctx, "./pictures/london/", londonImagesNum];
    return returnArray;
  } else if (name == "paris") {
    let returnArray = [parisctx, "./pictures/paris/", parisImagesNum];
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


// Searches the letter from morse
function searchLetter() {
  let letter = morseToLetter[currentMorse]
  if (letter) {
    return letter;
  } else {
    return "";
  }
}


// Adds letter to morse message and resets the currentMorse
function resetMorse() {
  document.getElementById("debugLength").textContent="";
  document.getElementById("morseMessage").textContent += searchLetter();
  currentMorse = "";
}

// Starts a timer to measure long or short press
function buttondown() {
  const d = new Date();
  morseTime = d.getTime();
  beep.play();
  // If at end of the letter
  if (morseTime - endTime < 600) {
    clearTimeout(morseTimeout);
  }

}


// Ends the timer to measure long or short press
function buttonup() {
  const d = new Date();
  endTime = d.getTime();
  timeDifference = endTime - morseTime;
  beep.pause();
  beep.currentTime = 0;
  // currentMorse[currentMorsePos] = timeDifference;
  // currentMorsePos += 1;
  // document.getElementById("debugLength").textContent+="\n" + timeDifference;
  if (timeDifference > 200) {
    document.getElementById("debugLength").textContent+=" _ ";
    currentMorse += "I";
  } else {
    document.getElementById("debugLength").textContent+=" - ";
    currentMorse += "O";
  }
  morseTimeout = setTimeout(resetMorse, 700);
}


// Adds a space to morse message
function makeSpace() {
  document.getElementById("morseMessage").textContent+=" ";
}


// Adds a new line to morse message
function backspace() {
  let message = document.getElementById("morseMessage").textContent;
  document.getElementById("morseMessage").textContent=message.slice(0, -1);
}

var slideshowIndex = getRndInteger(0, slideshowImagesNum - 1);
var londonIndex = getRndInteger(0, londonImagesNum - 1);
var parisIndex = getRndInteger(0, parisImagesNum - 1);
var zooIndex = getRndInteger(0, zooImagesNum - 1);
var japanIndex = getRndInteger(0, japanImagesNum - 1);
var purdueIndex = getRndInteger(0, purdueImagesNum - 1);
var chicagoIndex = getRndInteger(0, chicagoImagesNum - 1);

function unloadSlideshows() {
  clearInterval(slideshowShowing);
  clearInterval(londonShowing);
  clearInterval(parisShowing);
  clearInterval(zooShowing);
  clearInterval(japanShowing);
  clearInterval(purdueShowing);
  clearInterval(chicagoShowing);
}

function loadSlideshows() {
  renderImage("slideshow");
  renderImage("london");
  renderImage("paris");
  renderImage("zoo");
  renderImage("japan");
  renderImage("purdue");
  renderImage("chicago");
  slideshowShowing = setInterval(renderImage, 8000, "slideshow");
  londonShowing = setInterval(renderImage, 8000, "london");
  parisShowing = setInterval(renderImage, 8000, "paris");
  zooShowing = setInterval(renderImage, 8000, "zoo");
  japanShowing = setInterval(renderImage, 8000, "japan");
  purdueShowing = setInterval(renderImage, 8000, "purdue");
  chicagoShowing = setInterval(renderImage, 8000, "chicago");
}

// window.addEventListener("pageshow", G);

let timeShowing;
if (document.URL.includes("index.html") || !document.URL.endsWith(".html")){
  timeShowing = setInterval(refreshTime, 1000);
} else if (timeShowing) {
  clearInterval(timeShowing);
  timeShowing = false;

}
// setInterval(refreshTime, 1000);
