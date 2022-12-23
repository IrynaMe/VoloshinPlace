
var frameIndex = 1;
showFrames(frameIndex);

// Next/previous controls
function plusFrames(n) {
  showFrames(frameIndex += n);
}

// Thumbnail image controls
function currentFrame(n) {
  showFrames(frameIndex = n);
}

function showFrames(n) {
  var i;
  var frames = document.getElementsByClassName("myFrames");
  var puntos = document.getElementsByClassName("punto");
  if (n > frames.length) {frameIndex = 1}
  if (n < 1) {frameIndex = frames.length}
  for (i = 0; i < frames.length; i++) {
      frames[i].style.display = "none";
  }
  for (i = 0; i < puntos.length; i++) {
      puntos[i].className = puntos[i].className.replace(" active", "");
  }
  frames[frameIndex-1].style.display = "block";
  puntos[frameIndex-1].className += " active";
}
