const buttons= document.querySelectorAll(".btn");
const stop= document.querySelector(".stop");
 
let currentAudio= null;
 
buttons.forEach(button => {
	button.addEventListener("click", () => {
		const sound = button.getAttribute("data-sound");
 
		if(currentAudio) {
			currentAudio.pause();
			currentAudio.currentTime = 0;
		}
 
		currentAudio = new Audio(sound);
		document.body.appendChild(currentAudio);  
		currentAudio.play();
	})
})
 
stop.addEventListener("click", () => {
	if(currentAudio) {
		currentAudio.pause();
		currentAudio.currentTime = 0;
	}
})