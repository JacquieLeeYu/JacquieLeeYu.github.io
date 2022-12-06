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
var morseShortTime = 200;
var currentMorse = "";
var morseTimeout;
var lettersCorrect = 0;
var lettersLeft = 0;
var gameStart;
// Modes: NONE, LTSL, STLL, LTST, STLT, LTSGAME, STLGAME
var mode = "NONE";
var letterArr = [];
var letter = "";
var livesLeft = 3;
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

var score = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  E: 0,
  F: 0,
  G: 0,
  H: 0,
  I: 0,
  J: 0,
  K: 0,
  L: 0,
  M: 0,
  N: 0,
  O: 0,
  P: 0,
  Q: 0,
  R: 0,
  S: 0,
  T: 0,
  U: 0,
  V: 0,
  W: 0,
  X: 0,
  Y: 0,
  Z: 0,
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
}

  const batch1 = ["E","T","I","M","N","A"];
  const batch2 = ["S","O","R","K","W","D"];
  const batch3 = ["G","P","Z","U","V"];
  const batch4 = ["F","L","B","H","X"];
  const batch5 = ["Q","Y","J","C"];
  const batch6 = ["0","1","2","3","4","5","6","7","8","9"];


// Gives a random interger of provided max and min values, inclusive
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


// Checks if letters game continues
async function continueLGame() {
  if (document.getElementById("morsePrompt").textContent == letter) {
    lettersCorrect += 1;
    document.getElementById("morseMessage").textContent = letter;
    document.getElementById("morseMessage").style.color = 'green';
    document.getElementById("morsePrompt").textContent="Correct!";
  } else {
    document.getElementById("morseMessage").textContent = letter;
    document.getElementById("morseMessage").style.color = 'red';
    document.getElementById("morsePrompt").textContent="Incorrect...";
  }
  letter = "";
  await new Promise(resolve => setTimeout(resolve, 700));
  lettersLeft -= 1;
  if (lettersLeft == 0) {
    document.getElementById("morseSheet").style.filter = 'blur(0px)';
    mode = "NONE";
    calculateScore();
  } else {
    promptLetter(morseToLetter);
  }
}

// Adds letter to morse message and resets the currentMorse
async function resetMorse() {
  document.getElementById("debugLength").textContent="";
  letter = searchLetter();
  if (mode == "LTSGAME") {
    continueLGame();
  } else if (mode == "LTST") {
    lTST();
  } else if (mode == "LTSL") {
    lTSL();

  } else {
    document.getElementById("morsePrompt").textContent="";
    document.getElementById("morseMessage").textContent += letter;
  }
  currentMorse = "";
}


// Starts a timer to measure long or short press
function buttondown() {
  const d = new Date();
  morseTime = d.getTime();
  beep.play();
  // If at end of the letter
  if (morseTime - endTime < morseShortTime*3) {
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
  if (timeDifference > morseShortTime) {
    document.getElementById("debugLength").textContent+=" _ ";
    currentMorse += "I";
  } else {
    document.getElementById("debugLength").textContent+=" - ";
    currentMorse += "O";
  }
  morseTimeout = setTimeout(resetMorse, morseShortTime*3);
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


// Updates morseSlider
function updateMorseSlider() {
  var slider = document.getElementById("morseSlider");
  let sliderMessage = "Dit to Dah Threshold: " + slider.value + "ms";
  document.getElementById("sliderValue").textContent=sliderMessage;
  morseShortTime = Number(slider.value);
  localStorage.sliderValue = morseShortTime;
}

// Loads morse page data
function loadMorseData() {
  let hiScore = localStorage.morseHighScore;
  if (!hiScore) {
    document.getElementById("morseHighScore").textContent="High Score: 0";
    localStorage.morseHighScore = 0;
  } else {
    hiScore = "High Score: " + hiScore;
    document.getElementById("morseHighScore").textContent=hiScore;
  }
  let sliderValue = localStorage.sliderValue;
  if (!sliderValue) {
    localStorage.sliderValue = morseShortTime;
  } else {
    morseShortTime = sliderValue;
    document.getElementById("morseSlider").value = morseShortTime;
    let sliderMessage = "Dit to Dah Threshold: " + morseShortTime + "ms";
    document.getElementById("sliderValue").textContent=sliderMessage;
  }
}


// Prompts the letter onto the morse game board
function promptLetter(arr) {
  document.getElementById("morseMessage").textContent="";
  let letterShow = "";
  if (mode == "LTSGAME" || mode == "STLGAME") {
    let index = getRndInteger(0, Object.keys(arr).length - 1);
    letterShow = arr[Object.keys(arr)[index]];
  } else {
    let index = getRndInteger(0, arr.length - 1);
    letterShow = arr[index];
  }
  document.getElementById("morsePrompt").textContent=letterShow;
}


// Launches morse letter game
async function letterGame() {
  document.getElementById("morseSheet").style.filter = 'blur(20px)';
  lettersLeft = 15;
  lettersCorrect = 0;
  document.getElementById("morseMessage").textContent="";
  document.getElementById("morsePrompt").textContent="Game Starting In...";
  await new Promise(resolve => setTimeout(resolve, 1000));
  document.getElementById("morsePrompt").textContent="3...";
  await new Promise(resolve => setTimeout(resolve, 1000));
  document.getElementById("morsePrompt").textContent="2...";
  await new Promise(resolve => setTimeout(resolve, 1000));
  document.getElementById("morsePrompt").textContent="1...";
  await new Promise(resolve => setTimeout(resolve, 1000));

  const d = new Date();
  gameStart = d.getTime();
  mode = "LTSGAME"
  promptLetter(morseToLetter);
}


// Calculates game score
function calculateScore() {
  const d = new Date();
  let endTime = d.getTime();
  let score = (lettersCorrect*125) + Math.round(5000000/(endTime-gameStart));
  document.getElementById("morsePrompt").textContent="Your Score Is: " + score;
  if (!localStorage.morseHighScore || score > Number(localStorage.morseHighScore)) {
    document.getElementById("morseHighScore").textContent="High Score: " + score;
    localStorage.morseHighScore = score;
  }
  document.getElementById("morseMessage").style.color = 'black';
  document.getElementById("morseMessage").textContent="";
  
}


// Saves morse page data
function saveMorseData() {
  // not sure what to put in yet, but it's here in case I need it
}


// Plays the morse of the addressed letter key
async function playBeep(morse) {
  for (i = 0; i<morse.length; i++) {
    if (morse[i] == "O") {
      beep.play();
      await new Promise(resolve => setTimeout(resolve, morseShortTime));
      beep.pause();
      await new Promise(resolve => setTimeout(resolve, morseShortTime));
    } else {
      beep.play();
      await new Promise(resolve => setTimeout(resolve, morseShortTime*3));
      beep.pause();
      await new Promise(resolve => setTimeout(resolve, morseShortTime));
    }
  }
}


// Starts letter to sound lesson
async function lTSL(num) {
  // check if this is the start of lTSL calls
  if (mode == "LTSL") {
    // since it's after a prompt, check if letter is the same as prompted letter
    if (document.getElementById("morsePrompt").textContent == letter) {
      // says is correct and pauses
      document.getElementById("morsePrompt").textContent = "Correct!";
      await new Promise(resolve => setTimeout(resolve, 1000));
      score[letter] += 1;
      // If score is over 5, remove the letter from being prompted
      if (score[letter] > 5) {
        letterArr.splice(letterArr.indexOf(letter),1);
      }
    } else {
      score[letter] -= 1;
      document.getElementById("morsePrompt").textContent = "Incorrect...";
      await new Promise(resolve => setTimeout(resolve, 1000));
      // min score bottoms at 0
      if (score[letter] < 0) {
        score[letter] = 0;
      }
    }
  } else {
    mode = "LTSL";
    if (num == 1) {
      document.getElementById("morsePrompt").textContent="Learning letters: E, T, I, M, N, A";
    } else if (num == 2) {
      document.getElementById("morsePrompt").textContent="Learning letters: S, O, R, K, W, D";
    } else if (num == 3) {
      document.getElementById("morsePrompt").textContent="Learning letters: G, P, Z, U, V";
    } else if (num == 4) {
      document.getElementById("morsePrompt").textContent="Learning letters: F, L, B, H, X";
    } else if (num == 5) {
      document.getElementById("morsePrompt").textContent="Learning letters: Q, Y, J, C";
    } else if (num == 6) {
      document.getElementById("morsePrompt").textContent="Learning numbers: 0-9";
    }
    await new Promise(resolve => setTimeout(resolve, 3000));
    document.getElementById("morsePrompt").textContent="";
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  // Check if there's any letters left to prompt
  if (letterArr.length > 0) {
    // prompt letter (plus sound if score < 2)
    promptLetter(letterArr);
    let letterPrompt = document.getElementById("morsePrompt").textContent;
    if (score[letterPrompt] < 2) {
      // getting the key by its value
      let letterMorse = Object.keys(morseToLetter).find(key => morseToLetter[key] === letterPrompt);
      playBeep(letterMorse);
    }
  } else {
    // end when all scores are 5+
    document.getElementById("morsePrompt").textContent="Congratulations! Lesson Complete!";
    await new Promise(resolve => setTimeout(resolve, 2000));
    document.getElementById("morsePrompt").textContent="";
    mode = "NONE";
  }
}


// Starts letter to sound lesson #1: E, T, I, M, N, A
function lToS(id) {
  let num;
  if (id == "lts1") {
    letterArr = batch1;
    num = 1;
  } else if (id == "lts2") {
    letterArr = batch2;
    num = 2;
  } else if (id == "lts3") {
    letterArr = batch3;
    num = 3;
  } else if (id == "lts4") {
    letterArr = batch4;
    num = 4;
  } else if (id == "lts5") {
    letterArr = batch5;
    num = 5;
  } else if (id == "lts5") {
    letterArr = batch6;
    num = 6;
  }
  // Reset corresponding letters' scores to 0
  for (i = 0; i < letterArr.length ; i++){
    score[letterArr[i]] = 0;
  }
  // Start prompting letters
  lTSL(num);
}


// Starts letters to sound test
async function lTST(num) {
  // check if this is the start of lTST calls
  if (mode == "LTST") {
    // since it's after a prompt, check if letter is the same as prompted letter
    if (document.getElementById("morsePrompt").textContent == letter) {
      // says is correct and pauses
      document.getElementById("morsePrompt").textContent = "Correct!";
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      score[letter] += 1;
      // If score is over 2, remove the letter from being prompted
      if (score[letter] >= 2) {
        letterArr.splice(letterArr.indexOf(letter),1);
      }
    } else {
      score[letter] = 0;
      livesLeft -= 1;
      if (livesLeft == 2) {
        document.getElementById("morsePrompt").textContent="Incorrect! 2 lives left!";
        await new Promise(resolve => setTimeout(resolve, 1000));
      } else if (livesLeft == 1) {
        document.getElementById("morsePrompt").textContent="Incorrect! Last life!";
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  } else {
    mode = "LTST";
    livesLeft = 3;
    if (num == 1) {
      document.getElementById("morsePrompt").textContent="Testing letters: E, T, I, M, N, A";
    } else if (num == 2) {
      document.getElementById("morsePrompt").textContent="Testing letters: S, O, R, K, W, D";
    } else if (num == 3) {
      document.getElementById("morsePrompt").textContent="Testing letters: G, P, Z, U, V";
    } else if (num == 4) {
      document.getElementById("morsePrompt").textContent="Testing letters: F, L, B, H, X";
    } else if (num == 5) {
      document.getElementById("morsePrompt").textContent="Testing letters: Q, Y, J, C";
    } else if (num == 6) {
      document.getElementById("morsePrompt").textContent="Testing numbers: 0-9";
    }
    await new Promise(resolve => setTimeout(resolve, 3000));
    document.getElementById("morsePrompt").textContent="";
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  // Check if there's any letters left to prompt
  if (letterArr.length > 0 && livesLeft > 0) {
    promptLetter(letterArr);
  } else if (livesLeft == 0) {
    document.getElementById("morsePrompt").textContent="No lives left... Better luck next time!";
    await new Promise(resolve => setTimeout(resolve, 2000));
    document.getElementById("morsePrompt").textContent="";
    mode = "NONE";
  } else {
    // end when all scores are 2+
    document.getElementById("morsePrompt").textContent="Congratulations! You've passed the test!";
    await new Promise(resolve => setTimeout(resolve, 2000));
    document.getElementById("morsePrompt").textContent="";
    mode = "NONE";
  }
}


// Tests the batches of letters learned
function lToSTest(id) {
  let num;
  if (id == "ltst1") {
    letterArr = batch1;
    num = 1;
  } else if (id == "ltst2") {
    letterArr = batch2;
    num = 2;
  } else if (id == "ltst3") {
    letterArr = batch3;
    num = 3;
  } else if (id == "ltst4") {
    letterArr = batch4;
    num = 4;
  } else if (id == "ltst5") {
    letterArr = batch5;
    num = 5;
  } else if (id == "ltst6") {
    letterArr = batch6;
    num = 6;
  }
  // Reset corresponding letters' scores to 0
  for (i = 0; i < letterArr.length ; i++){
    score[letterArr[i]] = 0;
  }
  // Start prompting letters
  lTST(num);
}


// --------------------------------------------------------------------------------------------------------


var slideshowIndex = getRndInteger(0, slideshowImagesNum - 1);
var londonIndex = getRndInteger(0, londonImagesNum - 1);
var parisIndex = getRndInteger(0, parisImagesNum - 1);
var zooIndex = getRndInteger(0, zooImagesNum - 1);
var japanIndex = getRndInteger(0, japanImagesNum - 1);
var purdueIndex = getRndInteger(0, purdueImagesNum - 1);
var chicagoIndex = getRndInteger(0, chicagoImagesNum - 1);


// Unloads the slideshows in photography page
function unloadSlideshows() {
  clearInterval(slideshowShowing);
  clearInterval(londonShowing);
  clearInterval(parisShowing);
  clearInterval(zooShowing);
  clearInterval(japanShowing);
  clearInterval(purdueShowing);
  clearInterval(chicagoShowing);
}


// Loads the slideshows in photography page
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


// Checks if the user has been to the main page before
function helloMessage() {
  let numVisits = localStorage.numVisits;
  let firstVisitDate = localStorage.firstVisitDate;
  if (!numVisits || numVisits == 0 || !firstVisitDate) {
    const d = new Date();
    localStorage.firstVisitDate = d.getTime();
    document.getElementById("homePageTitle").textContent="Hey there!";
    document.getElementById("homePageTitle2").textContent="My name is";
    document.getElementById("homePageTitle3").textContent="Jacquie!";
    localStorage.numVisits = 1;
    document.getElementById("bubbleTalk").textContent=
    ("It's nice to meet you! Let's get to know each other better!");
    document.getElementById("projectsLetter").textContent=
    "I've made some projects before, and I think they're pretty cool!";
    document.getElementById("photographyLetter").textContent=
    "I also like taking a lot of pictures! I enjoy taking pictures of animals and nature the most!";
    document.getElementById("bakingLetter").textContent=
    "Baking is really fun, too! My favorite dessert is tiramisu, though I can't ignore a good fluffy milk bread either!";
    
  } else {
    localStorage.numVisits = Number(localStorage.numVisits) + 1;
  }
}


let timeShowing;
if (document.URL.includes("index.html") || !document.URL.endsWith(".html")){
  timeShowing = setInterval(refreshTime, 1000);
} else if (timeShowing) {
  clearInterval(timeShowing);
  timeShowing = false;

}
// setInterval(refreshTime, 1000);
