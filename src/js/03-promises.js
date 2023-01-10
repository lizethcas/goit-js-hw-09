import Notiflix from "notiflix";
const form = document.querySelector(".form");
const submit = document.querySelector('button[type="submit"]');
let infoForm = {};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  infoForm = {
    delay: parseInt(document.querySelector('input[name="delay"]').value),
    step: parseInt(document.querySelector('input[name="step"]').value),
    amount: parseInt(document.querySelector('input[name="amount"]').value),
  };
  console.log(infoForm);
  Results();
});

console.log(infoForm);
const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

function Results() {
  for (let i = 0; i < infoForm.amount; i++) {
    console.log(infoForm.delay);
    createPromise(i, infoForm.delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay} ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay} ms`);
      });
    infoForm.delay += infoForm.step;
  }
}
