let score2 = document.getElementById("score2");
let score1 = document.getElementById("score1");

function Score(click, id) {
  let totalScore = parseInt(id.innerText) + click;
  id.innerText = totalScore;

  if (totalScore < 0) {
    id.innerText = 0;
  }
}

function correction(id) {
  const number = prompt("Lütfen doğru rakamı giriniz.");
  if (isNaN(number)) {
    alert("rakam değil");
  } else {
    id.innerHTML = number;
  }
}
