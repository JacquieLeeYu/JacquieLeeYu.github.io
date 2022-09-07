const slideshowImages = [
    "./pictures/Big Flower.jpg",
    "./pictures/Bright Sunrise 2.jpg",
    "./pictures/Chicago Cityline.jpg",
    "./pictures/Courthouse.jpg",
    "./pictures/Ferris Wheel.jpg",
    "./pictures/Foggy Sunrise.jpg",
    "./pictures/Roses.jpg",
    "./pictures/Tree Light.jpg"
];

let currentSlideshowImageIndex = 0;

const slideshowElement = document.getElementById('slideshow');

function renderSlideshowImage(currentSlideshowImageIndex) {
    let currentImagePath = slideshowImages[currentSlideshowImageIndex];
    // if (currentSlideshowImageIndex == 0) {
    //     slideshowElement.style.backgroundImage = "url('./pictures/Big Flower.jpg')";
    // } else if (currentSlideshowImageIndex == 1) {
    //     slideshowElement.style.backgroundImage = "url('./pictures/Bright Sunrise 2.jpg')";
    // } else if (currentSlideshowImageIndex == 2) {
    //     slideshowElement.style.backgroundImage = "url('./pictures/Chicago Cityline.jpg')";
    // } else if (currentSlideshowImageIndex == 3) {}
    // slideshowElement.style.backgroundImage = "url('./pictures/Ferris Wheel.jpg')";
    slideshowElement.style.backgroundImage = "url('" + currentImagePath +"')";
    // slideshowElement.style.backgroundImage = url('+slideshowImages[currentSlideshowImageIndex++]+');

    const isLastPhoto = currentSlideshowImageIndex === slideshowImages.length - 1;
    currentSlideshowImageIndex = isLastPhoto ? 0 : currentSlideshowImageIndex + 1;
}

setInterval(renderSlideshowImage(currentSlideshowImageIndex), 1000);