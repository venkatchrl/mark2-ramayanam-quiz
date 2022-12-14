var readlineSync = require('readline-sync');

//users responsee
var userName = readlineSync.question("Hello! your Name?\n");
console.log(userName + " Welcome to Ramayan quiz ✌");

var score = 0;

function play(question, answer) {
  var userAnswer = readlineSync.question(question)

  if (userAnswer.toUpperCase() == answer.toUpperCase()) {
    console.log("Correct!");
    score = score + 1;
  } else if (userAnswer.toUpperCase() == 'QUIT') {
    result = "quit";
  }
  else {
    console.log("wrong");
  }
  console.log("Your score is: " + score);
  console.log("----------------------------------------------\n----------------------------------------------");
}

//array of questions
var questions = [
  {
    question: "1. Who is the author of Ramayana?\nA: Sage Vasishta\nB:  Sage Valmiki\nC: Sage Vyasa\nD: Sage Vishwamitra\n",
    answer: "B"
  },
  {
    question: "2. Which yagna did King Dasharatha perform to beget children?\n A:Ashwamedha\n  B:Putrakaamesti\n",
    answer: "B"
  },
  {
    question: "3. Which Vamsha did Lord Ram belong to?\n A:Hari Vamsha\n  B:Surya Vamsha\n",
    answer: "B"
  },
  {
    question: "4. Whose incarnation or avatar is Lord Ram?\nA:Shiva\n  B:Vishnu\n C: Brahma\n",
    answer: "B"
  },
  {
    question: "5.Who is the guru of Lord Ram?\nA:Sage Vasishta\n  B:Sage Vishwamitra\n C: Sage Valmiki\n",
    answer: "A"
  },
  {
    question: "6. For how many years did Lord Ram go on exile? \nA:14 Years\n  B:15 Years\n C: 13 Years\n",
    answer: "A"
  },
  {
    question: "7. With which arrow did Lord Ram kill Ravana? \nA:Nagastra\n  B:Vajrastra\n C: Brahmastra\n",
    answer: "C"
  }
];


for (var i = 0; i < questions.length; i++) {
  var currentQues = questions[i];
  var result = play(currentQues.question, currentQues.answer);
  if (result = "quit") {
    console.log("ciao🖐");
  }
  console.log("Your final score is: " + score + "Hope you enjoyed 🖐");
}