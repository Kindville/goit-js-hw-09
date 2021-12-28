  import flatpickr from 'flatpickr';
  import 'flatpickr/dist/flatpickr.min.css';

const daysRefs = document.querySelector('[data-days]')
const hoursRefs = document.querySelector('[data-hours]')
const minutesRefs = document.querySelector('[data-minutes]')
const secondsRefs = document.querySelector('[data-seconds]')
 const valueEl = document.querySelector('.value')

const startBtn = document.querySelector('button[data-start]')
 const inputEl = document.querySelector('#datetime-picker')
   
let selectedTime = 0;
const options =  {
  enableTime: true,
  time_24hr: true,
  dateFormat: 'H:i d.m.Y',
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
     const selectedDate = selectedDates[0].getTime();
    const currentDate = options.defaultDate.getTime()
    if (selectedDate <=  currentDate) {
      alert('Please choose a date in the future');
      return;
    }
    selectedTime = selectedDates[0]
    startBtn.disabled = false
  },
}
flatpickr(inputEl, options);


startBtn.addEventListener('click', onBtnClick)

function onBtnClick() {
  startBtn.disabled = true;
  // const selectedTime = Date.now()

  setInterval(() => {
    const currentTime = Date.now();
    const countTime = selectedTime.getTime() - currentTime;
    // console.log(convertMs(counteTime));
    const { days, hours, minutes, seconds } = convertMs(countTime);
    // updateTimerValue({days, hours, minutes, seconds})
    // console.log(`${days}:${hours}:${minutes}:${seconds}`);

  daysRefs.textContent = `${days}`;
hoursRefs.textContent = `${hours}`;
minutesRefs.textContent = `${minutes}`;
secondsRefs.textContent = `${seconds}`;
  }, 1000) 
       
}


// function updateTimerValue({days, hours, minutes, seconds}) {
//   valueEl.textContent = `${days}:${hours}:${minutes}:${seconds}`
// };
function pad(value) {
  return String(value).padStart(2, '0')
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
    // Remaining hours
    const hours = pad(Math.floor((ms % day) / hour)) ;
    // Remaining minutes
    const minutes = pad(Math.floor(((ms % day) % hour) / minute)) ;
    // Remaining seconds
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
  }

  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}