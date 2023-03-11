const jokeEl = document.getElementById("joke");
const jokeButton = document.getElementById("jokeBtn");

jokeButton.addEventListener("click", makeAJoke);

makeAJoke();

async function makeAJoke() {
  const url = "https://icanhazdadjoke.com/";
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const respond = await fetch(url, config);
  const data = await respond.json();
  jokeEl.innerHTML = data.joke;
}
