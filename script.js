const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");

const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");
const questionText = document.getElementById("questionText");

// toggle question text
let isHateQuestion = false;

/* =========================
   YES BUTTON ESCAPES
   ========================= */
yesBtn.addEventListener("mouseover", () => {
  const containerRect = questionContainer.getBoundingClientRect();

  const maxX = containerRect.width - yesBtn.offsetWidth;
  const maxY = containerRect.height - yesBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  yesBtn.style.position = "absolute";
  yesBtn.style.left = `${randomX}px`;
  yesBtn.style.top = `${randomY}px`;
});

/* =========================
   NO BUTTON – NORMAL CLICK
   ========================= */
noBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});

/* =========================
   RESET / REPLAY LOGIC
   ========================= */
resultContainer.addEventListener("click", () => {
  resultContainer.style.display = "none";
  questionContainer.style.display = "inherit";

  // reset YES button position
  yesBtn.style.left = "";
  yesBtn.style.top = "";

  // toggle question text
  isHateQuestion = !isHateQuestion;
  questionText.innerText = isHateQuestion
    ? "Do you hate me?"
    : "Do you love me?";
});
