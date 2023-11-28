// Define an array of quiz questions
const questions = [
    {
      question: "What is GitHub?
      choices: ["A place to create and share CSS blogs being developed.", "A place to store pseudo-code that is being created by a team.", "A place to commit versions for control in software development.", "A place that is commonly used to edit code and store it for future development."],
      correctAnswer: "GitHub is a web-based platform that provides version control for software development projects.
    },
    {
      question: "What is the difference between == and .equals() when comparing objects?Which programming language is used for web development?",
      choices: ["== compares  references, .equals compares content or values of two objects", "== assures statements are equal, .equals points out code that is unbalanced", "== directs equivalent files can't be deleted, .equals finds similar code files" "== means total files added to a directory, .equals indicates duplicate files", "== finds repetitive code, .equals compares repetitive code"],
      correctAnswer: "compares  references, .equals compares content or values of two objects"
    },
    {
        question: "On GitHub, which icon or action is used to save your work?",
        choices: ["The CSS icon", "ctrl s", "shift insert", "There isn't one."],
        correctAnswer: "There isn't one."
      },
      {
        question: "What is normally the very first line in an HTML document?",
        choices: ["Javadoc", "VS Codedoc", "CSSstyle", "<!DOCTYPE html", "<head, script>"
        correctAnswer: "!DOCTYPE html"
      },
      {
        question: "What does CLI and MDN mean in coding?",
        choices: ["Command Line Interface, Mozilla Developer Network", "Command Line Input,Main Div Unix", "Commit Link Interface, Make Div Nodes", "Create Link Interface,Markup Developer Navigation"],
        correctAnswer: "Command Line Interface, Mozilla Developer Network"
      },
      {
        question: "Which file is important that must be included with every repository file and give information about the project, URL information and credit to sources?",
        choices: ["a main branch file", "a README file", "a VS Code file", "a semantics file"],
        correctAnswer: "README file"
      },
      {
        question: "What knowledge can indicate you are acutely aware of solid understanding of programming language that a client requires for a project?,
        choices: ["specific concepts, syntax and best practices", "always deleting old code, fresh code doesn't need testing and debugging is at the client's request", "a VS Code processes repository files, there is no need to commit new code immediately", "a good understanding of how to avoid correcting code, it's best to write code that is unique,programming must be done without an special characters"],
        correctAnswer: "In-depth knowledge of specific concepts, syntax, and best practices"
      },
      {
        question: "What would be a good definition of syntax??,
        choices: ["Rules indicating combinations of words and symbols are the basis of a programming language."], "Cases in Java override all means of syntax types", "Media queries and their use in design", "It means to explaing the difference between null and undefined"
        correctAnswer: "Rules indicating combinations of words and symbols are the basis of a programming language."
    // Add more questions here...
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Function to display the current question
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
  
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    choicesElement.innerHTML = "";
    currentQuestion.choices.forEach(choice => {
      const choiceElement = document.createElement("li");
      choiceElement.textContent = choice;
      choiceElement.addEventListener("click", checkAnswer);
      choicesElement.appendChild(choiceElement);
    });
  }
  
  // Function to check the selected answer
  function checkAnswer(event) {
    const selectedChoice = event.target.textContent;
    const currentQuestion = questions[currentQuestionIndex];
  
    if (selectedChoice === currentQuestion.correctAnswer) {
      score++;
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      showResult();
    }
  }
  
  // Function to display the final score
  function showResult() {
    const resultElement = document.getElementById("result");
    const scoreElement = document.getElementById("score");
  
    resultElement.textContent = `Quiz completed! Your score is ${score}/${questions.length}.`;
    scoreElement.textContent = "";
  
    // Add any additional logic or actions here, such as saving the score or restarting the quiz.
  }
  
  // Start the quiz by displaying the first question
  displayQuestion();