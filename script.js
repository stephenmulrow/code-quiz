var createBtn = document.getElementById("createBtn")
var quizDiv = document.getElementById("quizDiv")
var answer1 = document.getElementById("answer1")

var questions = [
{
  question: "What are the two possible values for a boolean?",
  choices: ["Off/On", "True/False", "0/1", "String/Array"],
  correct: "True/False",
}, {
  question: "What is the name for a sequence of one or more characters that can include letter, numbers, or symbols?",
  choices: ["String", "Boolean", "Array", "Object"],
  correct: "String", 
}, {
  question: "What is used when needed to keep certain data stored?",
  choices: ["Console.log", "QuerySelector", "VSCode", "LocalStorage"],
  correct: "LocalStorage", 
}, {
  question: "What is an array enclosed with?",
  choices: ["Parenthesis", "Single Quotes", "Straigt Brackets", "Curly Brackets"],
  correct: "Straight Brackets", 
}, {
  question: "What is it called when a variable is defined outside of any functions?",
  choices: ["String", "Global Scope", "Local Scope", "Universal Scope"],
  correct: "Global Scope", 
}, {
  question: "In order for a function to run, you need to ________ it.",
  choices: ["define", "mark", "run", "call"],
  correct: "call", 
}
];

function quizStart() {
  quizH1.textContent = questions[0].question
  answer1.textContent = questions[0].choices[0]
  answer2.textContent = questions[0].choices[1]
  answer3.textContent = questions[0].choices[2]
  answer4.textContent = questions[0].choices[3]
  
  answer1.addEventListener("click", question2)
  answer2.addEventListener("click", question2)
  answer3.addEventListener("click", question2)
  answer4.addEventListener("click", question2)

  if (answer2 === "click") {
    alert("woohoo!")
  }
  
  }

function question2() {
  quizH1.textContent = questions[1].question
  answer1.textContent = questions[1].choices[0]
  answer2.textContent = questions[1].choices[1]
  answer3.textContent = questions[1].choices[2]
  answer4.textContent = questions[1].choices[3]

  answer1.addEventListener("click", question3)
  answer2.addEventListener("click", question3)
  answer3.addEventListener("click", question3)
  answer4.addEventListener("click", question3)
}

function question3() {
  quizH1.textContent = questions[2].question
  answer1.textContent = questions[2].choices[0]
  answer2.textContent = questions[2].choices[1]
  answer3.textContent = questions[2].choices[2]
  answer4.textContent = questions[2].choices[3]

  answer1.addEventListener("click", question4)
  answer2.addEventListener("click", question4)
  answer3.addEventListener("click", question4)
  answer4.addEventListener("click", question4)
}

function question4() {
  quizH1.textContent = questions[2].question
  answer1.textContent = questions[2].choices[0]
  answer2.textContent = questions[2].choices[1]
  answer3.textContent = questions[2].choices[2]
  answer4.textContent = questions[2].choices[3]

  answer1.addEventListener("click", question4)
  answer2.addEventListener("click", question4)
  answer3.addEventListener("click", question4)
  answer4.addEventListener("click", question4)
}


createBtn.addEventListener("click", quizStart);
