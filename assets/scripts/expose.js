// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const audio = document.querySelector('audio');
  const volSlider = document.getElementById('volume');
  const volIcon = document.querySelector('#volume-controls img');
  const playSoundButton = document.querySelector('button');
  const confetti = new JSConfetti();
  
  // Set initial volume to match slider deault of 50
  audio.volume = volSlider.value / 100;

  // Horn select handler 
  hornSelect.addEventListener('change', (event) => {
    const horn = event.target.value;

    // Update image
    hornImage.src = `assets/images/${horn}.svg`;
    hornImage.alt = horn;

    // Update audio soure
    audio.src = `assets/audio/${horn}.mp3`;
  });

  // Volume silder handler
  volSlider.addEventListener('input', (event) => {
    const volume = parseInt(event.target.value);

    audio.volume = volume / 100;

    updateVolIcon(volIcon, volume);
  });

  function updateVolIcon(volIcon, volume) {
    if (volume === 0) {
      volIcon.src = 'assets/icons/volume-level-0.svg';
      volIcon.alt = 'Muted';
    }
    else if (volume < 33) {
      volIcon.src = 'assets/icons/volume-level-1.svg';
      volIcon.alt = 'Volume Level 1';
    }
    else if (volume < 67) {
      volIcon.src = 'assets/icons/volume-level-2.svg';
      volIcon.alt = 'Volume Level 2';
    }
    else {
      volIcon.src = 'assets/icons/volume-level-3.svg';
      volIcon.alt = 'Volume Level 3';
    }
  }

  // Play sound button handler
  playSoundButton.addEventListener('click', () => {
    if (hornSelect.value === 'select' || !hornSelect.value) return; 

    // Restart audio if audio is already playing
    audio.currentTime = 0;
    audio.play();

    if (hornSelect.value === 'party-horn') {
      confetti.addConfetti(); 
    }
  });



}