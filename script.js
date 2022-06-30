const init = document.querySelector("[data-init]");
const stop = document.querySelector("[data-stop]");
const time = document.querySelector("[data-time]");

let number = 0;
let interval;

function initButton() {
  interval = setInterval(() => {
    time.innerText = number++;
  }, 1000);
  init.setAttribute("disabled", "");
  return interval;
}

init.addEventListener("click", initButton);

function pauseButton() {
  clearInterval(interval);
  init.removeAttribute("disabled");
}

stop.addEventListener("click", pauseButton);

function resetButton() {
  number = 0;
  time.innerText = 0;
}

stop.addEventListener("dblclick", resetButton);
