function startTimer() {

    var time = 60;
    var timerInterval = setInterval(function() {
      time--;
      var timeElement = document.getElementById("time");
      timeElement.textContent = time;
  
      if (time <= 0) {
        clearInterval(timerInterval);
        endQuiz();
      }
    }, 1000);
  }
  
  var button_start_quiz = document.getElementById("button_start_quiz");
  button_start_quiz.addEventListener("click", startTimer);
  
  var currentQuestionIndex = 0;
  var time = 60;
  var timerInterval;
  var score = 0;
  var startButton = document.getElementById("button_start_quiz");
  var timeEl = document.getElementById("time");
  var questionEl = document.getElementById("question");
  var answersEl = document.getElementById("answers");
  var correctIncorrectEl = document.getElementById("correct-incorrect");
  var doneSection = document.getElementById("done");
  var scoreEl = document.getElementById("score");
  var initialsInput = document.getElementById("initials");
  var submitButton = document.getElementById("submit");
  var highScoresContainer = document.getElementById("high-scores-container");
  var viewHighScoresLink = document.getElementById("view-high-scores");
  var goBackButton = document.getElementById("button__go-back");
  var clearHighScoresButton = document.getElementById("button__clear-high-scores");
  
var questions = [
  {
    question: "What is normally the first line in an HTML document?",
    answers: ["!Javadoc html", "VSDOC html", "!DOCTYPE html", "!SCRIPTDOC html"],
  },
];

function startQuiz() {
  document.getElementById("introduction").classList.add("hidden");
  
  document.getElementById("quiz").classList.remove("hidden");
  
  timerInterval = setInterval(function() {
    time--;
    timeEl.textContent = time;
    if (time <= 0) {
      endQuiz();
    }
  }, 1000);
  
  showQuestion();
}

function showQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  answersEl.innerHTML = "";
  for (var i = 0; i < currentQuestion.answers.length; i++) {
    var answerButton = document.createElement("button");
    answerButton.textContent = currentQuestion.answers[i];
    answerButton.addEventListener("click", checkAnswer);
    answersEl.appendChild(answerButton);
  }
}

function checkAnswer(event) {
  var selectedAnswer = event.target.textContent;
  var currentQuestion = questions[currentQuestionIndex];
  if (selectedAnswer === currentQuestion.correctAnswer) {
    correctIncorrectEl.textContent = "Correct!";
    score++;
  } else {
    correctIncorrectEl.textContent = "Incorrect!";
    time -= 10;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(timerInterval);
  document.getElementById("quiz").classList.add("hidden");
  doneSection.classList.remove("hidden");
  scoreEl.textContent = score;
}

function saveHighScore(event) {
  event.preventDefault();
  var initials = initialsInput.value.trim();
  if (initials !== "") {
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    var newScore = {
      initials: initials,
      score: score
    };
    highScores.push(newScore);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    viewHighScores();
  }
}

function viewHighScores() {
  document.getElementById("introduction").classList.add("hidden");
  document.getElementById("quiz").classList.add("hidden");
  doneSection.classList.add("hidden");
  document.getElementById("high-scores").classList.remove("hidden");
  highScoresContainer.innerHTML = "";
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  highScores.sort(function(a, b) {
    return b.score - a.score;
  });
  for (var i = 0; i < highScores.length; i++) {
    var highScoreItem = document.createElement("li");
    highScoreItem.textContent = highScores[i].initials + " - " + highScores[i].score;
    highScoresContainer.appendChild(highScoreItem);
  }
}

function goBack() {
  clearInterval(timerInterval);
  currentQuestionIndex = 0;
  time = 60;
  score = 0;
  document.getElementById("high-scores").classList.add("hidden");
  document.getElementById("introduction").classList.remove("hidden");
  timeEl.textContent = time;
}

function clearHighScores() {
  localStorage.removeItem("highScores");
  highScoresContainer.innerHTML = "";
}

const answersContainerElement = document.querySelector("#answers");
const correctIncorrectText = document.querySelector("#correct-incorrect");
const countdownElement = document.querySelector("#time");
const doneContainerElement = document.querySelector("#done");
const introductionContainerElement = document.querySelector("#introduction");
const questionContainerElement = document.querySelector("#question");
const quizContainerElement = document.querySelector("#quiz");
const scoreContainerElement = document.querySelector("#score");
const startQuizButtonElement = document.querySelector("#button_start_quiz");


const clearScoresButtonElement = document.querySelector(
  "#button__clear-high-scores"
);
const initialsInputElement = document.querySelector("#initials");
const formElement = document.querySelector("#form");
const goBackButtonElement = document.querySelector("#button__go-back");
const highScoresContainerElement = document.querySelector(
  "#high-scores-container"
);
const scoresContainerElement = document.querySelector("#high-scores");

let timeRemaining = 60;

let scoresArray;
if (localStorage.getItem("scores")) {
  scoresArray = JSON.parse(localStorage.getItem("scores"));
} else {
  scoresArray = [];
}
localStorage.setItem("scores", JSON.stringify(scoresArray));
const data = JSON.parse(localStorage.getItem("scores"));

const viewHighScoresLinkElement = document.querySelector("#view-high-scores");

const questionsArray = [
  {
    question: "What is normally the first line in an HTML document?",
    answers: ["!Javadoc html", "VSDOC html", "!DOCTYPE html", "!SCRIPTDOC html"],
    correct: "!DOCTYPE html",
  },
  {
    question: "On GitHub what is the action to save your work?",
    answers: ["Ctrl S", "shift insert", "Ctrl F8", "there is none"],
    correct: "there is none",
  },
  {
    question: "What file must be included in repositories that reflects project and URL information and sources?",
    answers: [
      "a main branch file",
      "a README file",
      "a VS Code file",
      "a semantics file",
    ],
    correct: "a README file",
  },
  {
    question:
      "What knowledge indicates you have acute understanding or programming languages?",
    answers: ["specific concepts, syntax, best practices", "media symbols, syntax, CSS", "code recovery and how to avoid debugging", "best practices and bbolean strategic syntax"],
    correct: "specific concepts, syntax, best practices",
  },
  {
    question:
      "A console.log should be considered when?",
    answers: ["development and debugging", "clearing cached code", "deleting duplicate files", "using media syntax"],
    correct: "development and debugging"
    },
];

viewHighScoresLinkElement.addEventListener("click", function () {
  scoresContainerElement.classList.remove("hidden");
  introductionContainerElement.classList.add("hidden");
  quizContainerElement.classList.add("hidden");
  doneContainerElement.classList.add("hidden");
});

startQuizButtonElement.addEventListener("click", startQuiz);

function startQuiz() {
  introductionContainerElement.classList.add("hidden");
  quizContainerElement.classList.remove("hidden");
  startTimer();
  renderQuestion();
}

function startTimer() {
  countdownElement.textContent = timeRemaining;
  const timeInterval = setInterval(function () {
    timeRemaining--;
    countdownElement.textContent = timeRemaining;
    if (timeRemaining == 0 || currentQuestionIndex == questionsArray.length) {
      clearInterval(timeInterval);
      endQuiz();
    }
  }, 1000);
}

function renderQuestion() {
  const currentQuestion = questionsArray[currentQuestionIndex];
  questionContainerElement.textContent = currentQuestion.question;
  answersContainerElement.innerHTML = "";
  currentQuestion.answers.forEach(function (answer) {
    const answerButton = document.createElement("button");
    answerButton.textContent = answer;
    answersContainerElement.appendChild(answerButton);
    answerButton.addEventListener("click", nextQuestion);
  });
}

function nextQuestion() {
  
  if (this.innerHTML === questionsArray[currentQuestionIndex].correct) {
    correctIncorrectText.innerHTML = "YES! Correct!";
    timeRemaining += 10;
  } else {
    correctIncorrectText.innerHTML = "Aww, incorrect!";
    
    timeRemaining -= 10;
  }
  
  currentQuestionIndex++;
  
  if (timeRemaining == 0 || currentQuestionIndex == questionsArray.length) {
    endQuiz();
  } else {
    renderQuestion();
  }
}

function endQuiz() {
  quizContainerElement.classList.add("hidden");
  doneContainerElement.classList.remove("hidden");
  scoreContainerElement.innerHTML = timeRemaining;
}

function makeLi(text) {
  const li = document.createElement("li");
  li.textContent = text;
  highScoresContainerElement.appendChild(li);
}

formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  scoresArray.push(initialsInputElement.value + " - " + timeRemaining);
  localStorage.setItem("scores", JSON.stringify(scoresArray));
  makeLi(initialsInputElement.value + " - " + timeRemaining);
  initialsInputElement.value = "";
  doneContainerElement.classList.add("hidden");
  scoresContainerElement.classList.remove("hidden");
});

data.forEach((item) => {
  makeLi(item);
});

goBackButtonElement.addEventListener("click", function () {
  location.reload();
});

clearScoresButtonElement.addEventListener("click", function () {
  localStorage.clear();
  while (highScoresContainerElement.firstChild) {
    highScoresContainerElement.removeChild(
      highScoresContainerElement.firstChild
    );
  }
});