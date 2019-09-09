var correctAnswers, incorrectAnswers, unanswered, timer;
var questionCount = 0;
var qaList = [
    [
        "What is my favorite color?",
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
        1
    ],
    [
        "How many strings are on a standard guitar?", 
        "3", 
        "4", 
        "5", 
        "6", 
        4
    ]
];

$(".card-link").click(function () {
    nextQuestion();
});

function newGame() {
    questionCount = 0;
    $(".start-button").addClass("d-none");
    $(".container-fluid").removeClass("d-none");
}

function newQuestion() {
    var currentQuestion = qaList[questionCount];
    $(".question .card-title").text(currentQuestion[0]);
    $(".answers .list-group-item:nth-of-type(1)").text(currentQuestion[1]);
    $(".answers .list-group-item:nth-of-type(2)").text(currentQuestion[2]);
    $(".answers .list-group-item:nth-of-type(3)").text(currentQuestion[3]);
    $(".answers .list-group-item:nth-of-type(4)").text(currentQuestion[4]);
    timer = 30;
    TweenMax.staggerFrom(".answers .list-group-item", 0.6, {
        x: 300
    }, 0.1);
    setInterval(timer, 1000);
}

function timer() {
    timer--;
    $(".timer").text(timer + " seconds left")
}

function nextQuestion() {
    questionCount++;
    timer;
    newQuestion();
}