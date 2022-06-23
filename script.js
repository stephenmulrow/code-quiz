var createBtn = document.getElementById("createBtn")
var quizDiv = document.getElementById("quizDiv")
var answer1 = document.getElementById("answer1")
var timeEl = document.querySelector(".countdown")
var mainEl =document.getElementById("main")
var counter = 60;

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

function setTime() {
  
  var timerInterval = setInterval(function(){
    counter--;
    timeEl.textContent = counter + "seconds remainig";

    if (counter <= 0){
      clearInterval(timerInterval);
      $("#countdown").html("<h3>Quiz Over</h3>");
      return;
    }else{
      $("#countdown").text(counter);
      console.log("Countdown -->" + counter)
    }
  }, 1000);
  }





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
  
  var selectedButton = e.target
  
  if (selectedButton === answer2){
    alert("woohoo")
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
  quizH1.textContent = questions[3].question
  answer1.textContent = questions[3].choices[0]
  answer2.textContent = questions[3].choices[1]
  answer3.textContent = questions[3].choices[2]
  answer4.textContent = questions[3].choices[3]

  answer1.addEventListener("click", question5)
  answer2.addEventListener("click", question5)
  answer3.addEventListener("click", question5)
  answer4.addEventListener("click", question5)
}

function question5 () {
  quizH1.textContent = questions[4].question
  answer1.textContent = questions[4].choices[0]
  answer2.textContent = questions[4].choices[1]
  answer3.textContent = questions[4].choices[2]
  answer4.textContent = questions[4].choices[3]

  answer1.addEventListener("click", question6)
  answer2.addEventListener("click", question6)
  answer3.addEventListener("click", question6)
  answer4.addEventListener("click", question6)
}

function question6 () {
  quizH1.textContent = questions[5].question
  answer1.textContent = questions[5].choices[0]
  answer2.textContent = questions[5].choices[1]
  answer3.textContent = questions[5].choices[2]
  answer4.textContent = questions[5].choices[3]

  answer1.addEventListener("click", question7)
  answer2.addEventListener("click", question7)
  answer3.addEventListener("click", question7)
  answer4.addEventListener("click", question7)
}

function question7 () {
  quizH1.textContent = questions[6].question
  answer1.textContent = questions[6].choices[0]
  answer2.textContent = questions[6].choices[1]
  answer3.textContent = questions[6].choices[2]
  answer4.textContent = questions[6].choices[3]

  answer1.addEventListener("click", quizDone)
  answer2.addEventListener("click", quizDone)
  answer3.addEventListener("click", quizDone)
  answer4.addEventListener("click", quizDone)
}



createBtn.addEventListener("click", quizStart);
createBtn.addEventListener("click", setTime)

//need to determine if question was answered right or wrong
//if right, display "correct"
//if wrong, display "incorrect, 5 seconds subtracted!"
//set up timer function
//style entire quiz
//end quiz when timer runs out 
// have a space to save score and write initials
//store it to the local storage
