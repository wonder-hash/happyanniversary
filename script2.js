// Get DOM elements
const startButton = document.getElementById('startButton');
const endParagraphText = document.getElementById('endParagraphText');
const questionContainer = document.getElementById('question-container');
const answerOptions = document.getElementById('answer-options');
const correctCountText = document.getElementById('correctCount');
const wrongCountText = document.getElementById('wrongCount');
const endMessageText = document.getElementById('endMessageText');
const endMessageContainer = document.getElementById('end-message');
const quizContainer = document.getElementById('quiz');
const introContainer = document.getElementById('intro');
const restartButton = document.getElementById('restartButton');
const progressBar = document.getElementById('progress-bar'); // Progress bar

const questions = [
    { question: "When did we first meet?", answers: ["March 12", "February 9", "November 30", "April 19"], correct: 0 },
    { question: "When did we first start dating?", answers: ["March 28", "July 28", "June 28", "January 28"], correct: 2 },
    { question: "What's my favorite color?", answers: ["Red", "Blue", "Pink", "Green"], correct: 1 },
    { question: "What was my first Gift to you?", answers: ["A website", "Bubu", "A Card", "A love letter"], correct: 0 },
    { question: "How much do I love you?", answers: ["It's 4", "Def 4", "Pick 4 cuz I love you more", "More than you could ever love me back"], correct: 3 },
    { question: "What is my Favorite food?", answers: ["Spaghetti", "Pizza", "Lasagna", "Corn"], correct: 2 },
    { question: "What is the place I really wish we visit together?", answers: ["Australia", "Thailand", "Japan", "Korea"], correct: 3 },
    { question: "What is my favorite movie?", answers: ["On the count of 2", "Kung Fu Panda", "Mission Impossible", "Home Alone"], correct: 3 },
    { question: "Which city did I grow up?", answers: ["Sarajevo", "Bihac", "Banjaluka", "Crna Gora"], correct: 1 },
    { question: "What is my favorite animal?", answers: ["Snake", "Dog", "Spider", "Horse"], correct: 0 },
    { question: "In the future, how many kids are we gonna have?", answers: ["2", "7", "5", "20"], correct: 1 },
    { question: "What is my eye color?", answers: ["Brown", "Olive", "Blue", "Green"], correct: 0 },
    { question: "How tall am I?", answers: ["5'8", "6'0", "6'2", "4'9"], correct: 2 },
    { question: "What's my favorite thing to do when we're together?", answers: ["Play Games", "Watch Movies", "Sleep", "Yap"], correct: 3 },
    { question: "What is the first thing I notice when you lay down?", answers: ["Your Nose", "Your Smile", "Your Eyes", "Your Big Forehead"], correct: 2 },
    { question: "What is something I really hate?", answers: ["Bad Food", "Bad Smell", "Loud Noises", "Bright Lights"], correct: 2 },
    { question: "What is something I love doing while not with you?", answers: ["Playing games", "Watching nerdy/educational videos", "Studying", "Sleeping"], correct: 1 },
    { question: "What is my favorite number?", answers: ["9", "3", "1", "7"], correct: 3 },
    { question: "Which of our kids is my favorite?", answers: ["Bubu", "Toto", "Momo", "All of them"], correct: 3 },
    { question: "Can I be your valentine?", answers: ["No :(", "No :(", "Yes :D", "No :("], correct: 2 },
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

startButton.addEventListener('click', startQuiz);

function startQuiz() {
    introContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        document.getElementById('question-text').innerText = question.question;

        // Update progress bar
        const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
        progressBar.style.width = `${progressPercentage}%`;

        // Create answer buttons
        answerOptions.innerHTML = '';
        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.innerText = answer;
            button.onclick = () => checkAnswer(index, question.correct);
            answerOptions.appendChild(button);
        });
    } else {
        endQuiz();
    }
}

function checkAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) {
        correctAnswers++;
        correctCountText.innerText = correctAnswers;
    } else {
        wrongAnswers++;
        wrongCountText.innerText = wrongAnswers;
    }
    currentQuestionIndex++;
    showQuestion();
}

function endQuiz() {
    quizContainer.style.display = 'none';

    if (wrongAnswers >= 15) {
        endMessageText.innerText = "Oh no, it looks like you didn't know me well enough.";
        endParagraphText.innerText = "No suprise for you butttt! I still want u to know that i am incredibly happy to be by ur side and u got so many answers right! Redo the quiz and im sure ull get to the price :D";
    } else if (wrongAnswers > 5) {
        endMessageText.innerText = "ouch that hurt";
        endParagraphText.innerText = "Come on.. not even 5 questions right? :( that really really hurts. I love you regardless but next time pay attention to me please?";
    } else {
        endMessageText.innerText = "Amazing! AHHH i love you so much you got so many right!";
        endParagraphText.innerText = "yay:D! You won something. First of all i want u to know im so so proud of you and always will be! Screenshot this page and send it to me :3. Lets get you your reward. Have fun and happy anniversary!";
    }

    endMessageContainer.style.display = 'block';
}

restartButton.addEventListener('click', () => {
    correctAnswers = 0;
    wrongAnswers = 0;
    currentQuestionIndex = 0;
    correctCountText.innerText = 0;
    wrongCountText.innerText = 0;
    progressBar.style.width = '0%'; // Reset progress bar
    endMessageContainer.style.display = 'none';
    introContainer.style.display = 'block';
});
