var correctAnswers,
    incorrectAnswers,
    unanswered,
    timerCounter,
    selectedAnswer,
    notClicked,
    timerInterval;

var questionCount = 0;

var qaList = [
    [
        "Which is the most common flag color?",
        "Red",
        "Blue",
        "Green",
        "Purple",
        1
    ],
    [
        "Which leader died in St Helena?",
        "The Congress- the Senate and the House of Representatives",
        "Napoleon Bonaparte",
        "Lee Harvey Oswald",
        "John Lennon, Ringo Starr, Paul McCartney, George Harrison",
        3
    ],
    [
        "What is a baby kangaroo called?",
        "a kid",
        "a joey",
        "a calf",
        "a steve",
        2
    ],
    [
        "How many strings are on a standard guitar?",
        "3",
        "4",
        "5",
        "6",
        4
    ],
    [
        "What body of water separates France and England?",
        "Red Sea",
        "Black Sea",
        "Meditteranean Sea",
        "English Channel",
        4
    ],
    [
        "What pigment gives leaves their green color and absorbs light that is used in photosynthesis",
        "Chloroplast",
        "Clorox",
        "Chlorophyll",
        "Sodium",
        3
    ],
    [
        "When did the Titanic sink?",
        "1911",
        "1915",
        "1912",
        "1916",
        4
    ]
];

$(".start-button").click(function () {
    newGame();
});

$(".card-link").click(function () {
    if (questionCount > qaList.length - 2) {
        gameOver();
    } else {
        nextQuestion();
    }
});

$(".question .list-group-item").click(function () {
    selectedAnswer = $(this).index() + 1;
    $(".list-group-item").removeClass("active-answer");
    $(this).addClass("active-answer");
});

function newGame() {
    questionCount = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    unanswered = 0;
    $(".start-button").addClass("d-none");
    newQuestion();
    $(".row:nth-of-type(2)").removeClass("d-none");
}

function timer() {
    timerCounter--;
    $(".timer").text(timerCounter + " seconds left");
    if (timerCounter <= 0) {
        nextQuestion();
    }
}

function newQuestion() {
    clearInterval(timerInterval);
    var currentQuestion = qaList[questionCount];
    $(".question .card-title").text(currentQuestion[0]);
    $(".answers .list-group-item:nth-of-type(1)").text(currentQuestion[1]);
    $(".answers .list-group-item:nth-of-type(2)").text(currentQuestion[2]);
    $(".answers .list-group-item:nth-of-type(3)").text(currentQuestion[3]);
    $(".answers .list-group-item:nth-of-type(4)").text(currentQuestion[4]);
    $(".list-group-item").removeClass("active-answer");
    timerCounter = 30;
    TweenMax.staggerFrom(".answers .list-group-item", 0.6, {
        x: 300
    }, 0.1);
    timerInterval = setInterval(timer, 1000);
}

function nextQuestion() {
    var currentQuestion = qaList[questionCount];
    // This boolean ensures the player can't keep clicking to get more points, 
    // it also checks to see if the current answer is correct.
    if (selectedAnswer === currentQuestion[5]) {
        correctAnswers++;
        notClicked = false;
    }
    if (selectedAnswer !== currentQuestion[5]) {
        incorrectAnswers++;
        notClicked = false;
    }
    questionCount++;
    newQuestion();
}

function gameOver() {
    $("#correct-answers").text("You got " + correctAnswers + " correct, and " + incorrectAnswers + " wrong.");
    $(".row:nth-of-type(2)").addClass("d-none");
    $(".game-over").removeClass("d-none");
}