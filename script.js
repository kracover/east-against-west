let currentAudio = document.getElementById("player");

function changeArtist(name, desc, img, audio) {
  const middle = document.getElementById('middle-name');

  // TEXTE
  middle.innerText = name;
  middle.setAttribute('data-desc', desc);

  // IMAGE
  middle.style.backgroundImage = `url('${img}')`;

  // COULEUR
  if (desc.toLowerCase().includes('west')) {
    middle.style.color = "#00ff00";
  } else {
    middle.style.color = "#ff0000";
  }

  // SON
  currentAudio.src = audio;
  currentAudio.play();

  // ANIMATION
  middle.style.transform = "scale(1.1)";
  setTimeout(() => {
    middle.style.transform = "scale(1)";
  }, 200);
}

// PLAY / PAUSE
function togglePlay() {
  if (currentAudio.paused) {
    currentAudio.play();
  } else {
    currentAudio.pause();
  }
}
