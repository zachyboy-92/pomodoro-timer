"strict mode";

//Event listeners
const workBtn = document.querySelector("#work");
const shortBreakBtn = document.querySelector("#short-break");
const longBreakBtn = document.querySelector("#long-break");
const stopBtn = document.querySelector("#stop");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const timer = function (min, sec = 0) {
  let startTime = setInterval(function () {
    if (sec === 0) {
      min--;
      sec = 59;
      minutes.textContent = min;
    } else if (sec > 0) {
      sec--;
      minutes.textContent = min;
      seconds.textContent = sec;
    }

    if (sec < 10) {
      seconds.textContent = `0${sec}`;
    }
    if (min === 0 && sec === 0) {
      clearInterval(startTime);
    }
  }, 1000);
};

timer(2);
