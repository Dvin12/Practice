const button = document.getElementById("button");
const notifications = document.getElementById("notifications");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
  "Today is your lucky day",
];

button.addEventListener("click", () => createNotification());

function createNotification() {
  const notify = document.createElement("div");
  notify.classList.add("notification");

  notify.innerHTML = getRandomMessage();
  notifications.appendChild(notify);
  setTimeout(() => {
    notify.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
