var question= [
    {
        question: "Variables are made of what two items:",
        answers:["workouts and happy faces", "name and a value", "colors and shapes", "not name and values"],
        correct: 1
    },
    {
        question: "Arrays are a type of what?",
        answers:["variable", "what makes a rainbow", "part of a symphony", "another name for the sun"],
        correct: 0
    },
    {
        question: "Indexes always start with what number?",
        answers:[2, 3, 0, 4],
        correct: 2
    },
    {
        question: " Most seasoned coders follow the mantra of D.R.Y, what does dry stand for?",
        answers:["Do Reveal Yourself", "Don't Rely Youngone", "Don't repeat Yourself", 'Dig Right Yin'],
        correct: 2
    }
   
]
function showquestions() {
    var questionEl - document.getElementById ("question")
    answersEl.innerHTML= ""
    questionEl.textContent = questions[currentQuestion].question
    for (let i = 0; i < questions [currentQuestion].answers.length; i++) {
        var button = document.createElement("button")
        button.textContent= questions[currentQuestion].answers[i]
        button.setAttribute('value', i)
        button.classList.add("answer", "btn", "btn-primary")
        answerEl.appendChild(button)
    }
}
function init(){
    Time()
    var startScreen - document.getElementById("startScreen")
    startScreen.setAttribute("class", "d-none")
    questionSceen.classList.remove("d-done")
    showquestions()
}
var timeLeft =0;
var ended = false;
funtion setCounter () {
    timeLeft = (answerArrofObj.length *10);
    if (event.target.matches("button")) {
        startScreen.setAttribute("style","display; none !import");
        quizScreen.setAttribute("style","display: block !important");
    }
    var timeInterval = setInterval(function () {
        timeInterval.textContent = "time left;" +timeLeft;
        timeLeft--;
        if (ended ==true){
            clearInterval(timeInterval);
         }
        if (timeleft === 0) {
            timeInterval.textContent ="time's UP!";
            clearInterval(timeInterval);
            endScreen();
        }
    } , 1000);
}
function checkAnswers(){
    if (!event.target.classList.contains("answer")) return;
    var userGuess = parseInt(event.target.value)
    if (userGuess !== questions[currentQuestion].correct){
        secondleft = secondsLeft -15
        console.log ("incorrect")
    }
    currentQuestion++
    showquestions()
}

answersEl.addEventListener('click', checkAnswer)
startButton.addEventListener("click", init)