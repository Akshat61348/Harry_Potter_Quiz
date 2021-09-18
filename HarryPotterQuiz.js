var readlineSync = require("readline-sync");
var chalk = require('chalk');
var score = 0;
var userName = readlineSync.question('What is your name? ');
console.log(chalk.blueBright("\nwelcome! " + userName + " to the HARRY POTTER QUIZ.\n"));
console.log(chalk.greenBright("Each Level has 5 questions. Win it! Glory awaits you.\n"));


//variable for scoreboard

var highScores = [{
    name: "Dev",
    score: 10
    },{
    name: "Diya",
    score: 8
    }
    ];


//Quiz one question and answers

var QuizOneQuestions = [{
    question:"What is the name of Harry Potter's owl? ",
    answer:"hedwig"
},{
    question:"What was the name of Lord Voldemort's loyal snake? ",
    answer:"nagini"
},{
    question:"How would you spell the spell you would use to disarm someone? ",
    answer:"expelliarmus"
},{
    question:"What spell would you use to light the tip of your wand? ",
    answer:"lumos"
},{
    question:"What position did Harry Potter play at Quidditch? ",
    answer:"seeker"
},
]

//Quiz two question and answers

var QuizTwoQuestions = [{
    question:"What relation was Sirius Black to Harry? ",
    answer:"godfather"
},{
    question:"Who is Draco Malfoy's dad? ",
    answer:"lucius malfoy"
},{
    question:"What is TOm Riddle's middle name? ",
    answer:"marvolo"
},{
    question:"What is the name of the train that takes students to Hogwarts? ",
    answer:"hogwarts express"
},{
    question:"How many Hogwarts houses are there, three or four? ",
    answer:"four"
},
];
 // functions

 function play(question, answer) {
     var userAnswer = readlineSync.question(question);
     if(userAnswer.toUpperCase() === answer.toUpperCase()) {
         console.log("\nyou are right");
         score = score + 1;
     }
     else {
         console.log("\nOops! you are wrong");
     }
     console.log(chalk.yellowBright("\nYour current score is: ", score)),
     console.log("\n********************\n");
    }

//quiz one function

function QuizOne() {
    for(i = 0;i< QuizOneQuestions.length;i++) {
        var currentQuestion = QuizOneQuestions[i];
        play(currentQuestion.question, currentQuestion.answer);
    }
}

//quiz two function

function QuizTwo() {
    for(i = 0;i< QuizTwoQuestions.length; i++) {
        var currentQuestion = QuizTwoQuestions[i];
        play(currentQuestion.question,currentQuestion.answer);
    }
}

// Display Score Board

function displayScores() {
    console.log("****HIGH SCORES****");
    for(i=0;i<highScores.length;i++) {
        console.log(chalk.red(highScores[i].name+" "+highScores[i].score));
    }
}

function beginQuiz() {
    var permission = readlineSync.question("Are you ready ? press any key to start!..press \'n' for exit ");
    if (permission.toLowerCase()=="n") {
        console.log(chalk.yellow("\nBetter Luck Next Time!\n"));

    }
    else {
        console.log(chalk.blue("\nLet's Begin Quiz One. Win it! Quiz two awaits you !!! \n"));
        QuizOne();
    
        console.log(chalk.yellow("Your final score for Quiz one is", score));
        if (score == "5"){
          console.log(chalk.blue("\nHURRAY!!! Welcome to Quiz two\n"));
          QuizTwo();
    
          console.log(chalk.yellow("Your final score for Quiz two is", score));
          }
          displayScores();
    }
}
beginQuiz();



