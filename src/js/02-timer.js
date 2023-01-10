import Notiflix from "notiflix";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const start = document.querySelector("button[data-start]");
const text = document.querySelector("#datetime-picker");
const today = new Date();
const time = {
  day: document.querySelector("[data-days]"),
  hour: document.querySelector("[data-hours]"),
  min: document.querySelector("[data-minutes]"),
  sec: document.querySelector("[data-seconds]"),
};
start.disabled = true;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const dateUser = selectedDates[0];
    const ms = dateUser.getTime() - today.getTime();
    const timer = convertMs(ms);

    if (dateUser > today) {
      start.disabled = false;

      time.hour.innerText = addLeadingZero(timer.days);
      time.hour.innerText = addLeadingZero(timer.hours);
      time.min.innerText = addLeadingZero(timer.minutes);
      time.sec.innerText = addLeadingZero(timer.seconds);
      counter(ms);
      Notiflix.Notify.success('succes');
    } else {
      start.disabled = true;
      time.hour.innerText = "00";
      time.hour.innerText = "00";
      time.min.innerText = "00";
      time.sec.innerText = "00";
      Notiflix.Notify.failure("Please choose a date in the future");
    }
  },
};

function addLeadingZero(value) {
  return value.toString().length < 2
    ? value.toString().padStart(2, "0")
    : value;
}

function counter(e) {
  start.addEventListener("click", () => {
    start.disabled = true;
    let timer;
    timer = setInterval(() => {
      const increase = convertMs((e -= 1000));
      if (e > 0) {
        time.hour.innerText = increase.days;
        time.hour.innerText = increase.hours;
        time.min.innerText = increase.minutes;
        time.sec.innerText = increase.seconds;
      } else {
        clearInterval(timer);
      }

      
    }, 1000);
  });
}
flatpickr(text, options);
