function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleTimeString();
    timeDisplay.textContent = dateString;
  }

const slideshowImagesNum = 21;
var currentSlideshowIndex = getRndInteger(0, slideshowImagesNum - 1);

const slideshowElement = document.getElementById('slideshow');

function renderSlideshowImage() {
    let currentImagePath = "./pictures/" + currentSlideshowIndex + ".jpg";
    slideshowElement.style.backgroundImage = "url('" + currentImagePath +"')";
    const isLastPhoto = currentSlideshowIndex === slideshowImagesNum - 1;
    currentSlideshowIndex = isLastPhoto ? 0 : currentSlideshowIndex + 1;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}






let slideshowShowing;
if ( document.URL.includes("photography") ) {
  renderSlideshowImage();
  slideshowShowing = setInterval(renderSlideshowImage, 8000);
} else if (slideshowShowing) {
  clearInterval(slideshowShowing);
}

let timeShowing;
if (document.URL.includes("index.html") || !document.URL.endsWith(".html")){
  timeShowing = setInterval(refreshTime, 1000);
} else if (timeShowing) {
  clearInterval(timeShowing);
  timeShowing = false;

}
// setInterval(refreshTime, 1000);
