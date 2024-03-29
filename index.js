var listOfAnswers = ["It is certain.",
                     "It is decidedly so.",
                     "Without a doubt.",
                     "Yes - definitely.",
                     "You may rely on it.",
                     "As I see it, yes.",
                     "Most likely.",
                     "Outlook good.",
                     "Yes.",
                     "Signs point to yes.",
                     "Reply hazy, try again.",
                     "Ask again later.",
                     "Better not tell you now.",
                     "Cannot predict now.",
                     "Concentrate and ask again.",
                     "Don't count on it.",
                     "My reply is no.",
                     "My sources say no.",
                     "Outlook not so good.",
                     "Very doubtful."];
var questionInput = document.querySelector('#question-input');
var answerButton = document.querySelector('#answer-button');
var eightBall = document.querySelector('#eight-ball');
var answerBox = document.querySelector('#answer-box');
var question = document.querySelector('#question');
var answer = document.querySelector('#answer');
var clearButton = document.querySelector('#clear-button');

answerBox.remove();

questionInput.addEventListener('input', enableAnswerButton);
answerButton.addEventListener('click', answerQuestion);
clearButton.addEventListener('click', clearAnswer);

function enableAnswerButton() {
  if (questionInput.value != '') {
    answerButton.disabled = false;
  } else {
    answerButton.disabled = true;
  }
}

function answerQuestion() {
  var randomNum = Math.floor(Math.random() * listOfAnswers.length);
  var newQuestion = questionInput.value;
  var newAnswer = listOfAnswers[randomNum];
  questionInput.value = '';
  answerButton.disabled = true;
  question.innerText = `"${newQuestion}"`;
  answer.innerText = newAnswer;
  eightBall.remove();
  questionInput.parentNode.insertBefore(answerBox, clearButton);
  clearButton.disabled = false;
}

function clearAnswer() {
  answerBox.remove();
  questionInput.parentNode.insertBefore(eightBall, clearButton);
  clearButton.disabled = true;
}
