function startQuiz() {
  let quizDiv = document.getElementById("quiz");

  quizDiv.innerHTML = `
    <p>What is 2 + 2?</p>
    <button onclick="checkAnswer(4)">4</button>
    <button onclick="checkAnswer(5)">5</button>
  `;
}

function checkAnswer(answer) {
  if (answer === 4) {
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
}
function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      document.getElementById("joke").innerText =
        data.setup + " - " + data.punchline;
    });
}
