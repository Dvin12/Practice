const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },

  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },

  {
    question: "What does HTML stand for?",
    a: "Hypertest Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminators Motorbikes Lambos",
    correct: "a",
  },

  {
    question: "What year was Javascript created?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "non of the above",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const aText = document.getElementById("a__text");
const bText = document.getElementById("b__text");
const cText = document.getElementById("c__text");
const dText = document.getElementById("d__text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerHTML = currentQuizData.question;
  aText.innerHTML = currentQuizData.a;
  bText.innerHTML = currentQuizData.b;
  cText.innerHTML = currentQuizData.c;
  dText.innerHTML = currentQuizData.d;
}

loadQuiz();
function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2> You have anwsered ${score} / ${quizData.length} questions correctly </h2>
            
            <button onclick = "location.reload()">Reload</button>
            
            `;
    }
  }
});
