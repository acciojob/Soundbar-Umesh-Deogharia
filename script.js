// Get all buttons and the stop button
let buttons = document.querySelectorAll(".btn");
let stop = document.querySelector(".stop");

// Object to store the currently playing sound button
let audioState = {
  activeButton: null,
  isPlaying: false,
};

// Stop button functionality
stop.addEventListener("click", () => {
  stopSound();
});

// Loop through each button and add click event listeners
buttons.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    if (audioState.isPlaying) {
      stopSound();
    }
    playSound(elem);
  });
});

// Function to play sound
function playSound(elem) {
  // Check if there's already an audio element and remove it before adding a new one
  let existingAudio = elem.querySelector("audio");
  if (existingAudio) {
    elem.removeChild(existingAudio);
  }

  // Set the audio state to track the current button
  audioState.isPlaying = true;
  audioState.activeButton = elem;

  // Create a new audio element
  let target = elem.dataset.sound;
  let audio = document.createElement("audio");
  let source = document.createElement("source");
  source.src = `./sounds/${target}`;  // Adjusted path to reference 'sounds' folder
  audio.setAttribute("autoplay", true);

  // Append the audio element to the button
  audio.appendChild(source);
  elem.appendChild(audio);
}

// Function to stop the current sound
function stopSound() {
  if (audioState.activeButton) {
    let button = audioState.activeButton;

    // Remove the audio element from the button
    let audioElement = button.querySelector("audio");
    if (audioElement) {
      button.removeChild(audioElement);
    }

    // Reset the audio state
    audioState.isPlaying = false;
    audioState.activeButton = null;
  }
}
