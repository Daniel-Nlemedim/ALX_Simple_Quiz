const submitButton = document.getElementById('submit-answer');

function checkAnswer() {
 const correctAnswer = "4";
 const userAnswer = document.querySelector('input[name = "quiz"]:checked').value;
 if(userAnswer === correctAnswer) {
    document.getElementById('feedback').textContent = "Correct! well done.";
 }else{
    document.getElementById('feedback').textContent = "That's incorrect. Try again!";
 }

}

submitButton.addEventListener('click', checkAnswer);