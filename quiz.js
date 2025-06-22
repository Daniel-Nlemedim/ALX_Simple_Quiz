const submitButton = document.getElementById('submit-answer');

function checkAnswer() {
  const correctAnswer = "4";
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  if (!selectedOption) {
    document.getElementById('feedback').textContent = "Please select an answer before submitting.";
    return;
  }

  const userAnswer = selectedOption.value;

  if (userAnswer === correctAnswer) {
    document.getElementById('feedback').textContent = "Correct! Well done.";
  } else {
    document.getElementById('feedback').textContent = "That's incorrect. Try again!";
  }
}

submitButton.addEventListener('click', checkAnswer);
