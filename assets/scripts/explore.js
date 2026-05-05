// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const faceImg = document.querySelector('#explore img');
  const textBox = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');
  const synth = window.speechSynthesis;

  function loadVoices() {
    const voices = synth.getVoices();
    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  loadVoices();
  synth.addEventListener('voiceschanged', loadVoices);

  talkButton.addEventListener('click', () => {
    const text = textBox.value.trim();
    if (!text || voiceSelect.value === 'select') return;

    synth.cancel();

    // Built-in browser object that represents a speech request
    const utter = new SpeechSynthesisUtterance(text);

    // Set selected voice 
    const voices = synth.getVoices();
    utter.voice = voices[voiceSelect.value];

    utter.onstart = () => {
      faceImg.src = 'assets/images/smiling-open.png';
      faceImg.alt = 'Open smiling mouth face';
    }

    utter.onend = () => {
      faceImg.src = 'assets/images/smiling.png';
      faceImg.alt = 'Smiling face';
    };

    synth.speak(utter);
    
  });
}