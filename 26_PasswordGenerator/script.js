const resultEl = document.getElementById("result");
const clipboardEl = document.getElementById("clipboard");
const lengthEl = document.getElementById("lenght");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");

const randomFunction = {
  lower: getRandomLowerCase,
  upper: getRandomUpperCase,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

generateEl.addEventListener("click", () => {
  const lenght = +lengthEl.value;
  const hasLowerCase = lowercaseEl.checked;
  const hasUpperCase = uppercaseEl.checked;
  const hasNumbers = numbersEl.checked;
  const hasSymbols = symbolsEl.checked;

  resultEl.innerHTML = generatePassword(
    hasLowerCase,
    hasUpperCase,
    hasNumbers,
    hasSymbols,
    lenght
  );
});

clipboardEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard!");
});

function generatePassword(lower, upper, number, symbol, lenght) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typeArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < lenght; i += typesCount) {
    typeArr.forEach((type) => {
      const functionName = Object.keys(type)[0];
      generatedPassword += randomFunction[functionName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, lenght);
  return finalPassword;
}

function getRandomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@~#=-)(*&^%$£"¬`|,./<>?*+';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
