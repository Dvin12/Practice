const API = "https://api.github.com/users/";

const form = document.getElementById("form");
const main = document.getElementById("main");
const search = document.getElementById("search");

async function getUser(username) {
  try {
    const { data } = await axios(API + username);

    createUserCard(data);
    getRepos(username);
  } catch (error) {
    if (error.response.status == 404) {
      createErrorCard("The user have not been found :(");
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(API + username + "/repos?sort=created");

    addReposToCard(data);
  } catch (error) {
    createErrorCard("Problem fetching repos");
  }
}

function createUserCard(user) {
  const card = `
  <div class="card">
          <img
            src="
            ${user.avatar_url}"
            alt="${user.name}"
            class="avatar"
          />

          <div class="user__info">
            <h2>${user.name}</h2>
            <p>${user.bio}
            </p>
            <ul>
              <li>${user.followers} <strong>Followers</strong></li>
              <li>${user.following} <strong>Following</strong></li>
              <li>${user.public_repos} <strong>Repos</strong></li>
            </ul>

            <div id="repos">

            </div>
          </div>
        </div>
  `;

  main.innerHTML = card;
}

function createErrorCard(msg) {
  const card = `
  <div class="card">
  <h1>${msg}</h1>
  </div>
  `;

  main.innerHTML = card;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");

  repos.slice(0, 5).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerHTML = repo.name;

    reposEl.appendChild(repoEl);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});
