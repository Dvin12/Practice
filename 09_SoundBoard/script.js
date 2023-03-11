const sounds = ["applaud", "boo", "gasp"];

sounds.forEach((sound) => {
  const button = document.createElement("button");
  button.classList.add("btn");

  button.innerText = sound;
  button.addEventListener("click", () => {
    stopSound();
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(button);
});

function stopSound() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}
