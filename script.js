//your JS code here. If required.
let buttons = document.querySelectorAll(".btn");
let stop = document.querySelector(".stop");
let obj = {
  tag: "",
  check: false,
};
stop.addEventListener("click", () => {
  stopSong();
});

buttons.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    if (obj.check === true) {
      stopSong();
    }

    addAudio(e, elem);
  });
});

function addAudio(e, elem) {
	let existingAudio = elem.querySelector('audio');
  if (existingAudio) {
    elem.removeChild(existingAudio);
  }
  obj.check = true;
  obj.tag = elem;
  let target = e.target.dataset.sound;
  let audio = document.createElement("audio");
  let source = document.createElement("source");
  source.src = `./${target}`;
  audio.setAttribute("autoplay", true);

  audio.appendChild(source);
  elem.appendChild(audio);
}

function stopSong() {
  let Text = obj.tag.innerText;

  obj.tag.innerHTML = "";
  obj.tag.innerText = Text;
  //   toggle = false;
  obj.check = false;
  obj.tag = "";
}
// console.log(buttons);
