function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleTimeString();
    timeDisplay.textContent = dateString;
    setTimeout(refreshTime, 1000);
  }



refreshTime();