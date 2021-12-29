import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form')
// const inputEl =document.querySelector('input[type="number"]')
// const submitBtn = document.querySelector('button')

function createPromise(position, delay) {

  const promise = new Promise((resolve, reject) => {
        const shouldResolve = Math.random() > 0.3;

    setInterval(() => {

      if (shouldResolve) {
        resolve({ position, delay }) // Fulfill 
      } else {
        reject({ position, delay }) // Reject
      }
    }, delay);
     
  });
  return promise;
}

formEl.addEventListener('submit', onSubmitClick);
let position = 0;
function onSubmitClick(e) {
  e.preventDefault();
  let delay = Number(e.currentTarget.elements.delay.value);
  const step = Number(e.currentTarget.elements.step.value);
  const amount = Number(e.currentTarget.elements.amount.value);
  
  setInterval(() => {
    if (position == amount) {
      return;
    }
    position += 1;
    setTimeout(() => { delay += step; })
    
    createPromise(2, 1500)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
       Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }, step)
}




// function onSuccess(result) {
//   console.log(onSuccess);
//   console.log(result);
// }
// function OnError(error) {
//   console.log(OnError);
//   console.log(error);

// }
