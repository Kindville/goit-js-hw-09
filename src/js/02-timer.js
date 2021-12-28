  import flatpickr from 'flatpickr';
  import 'flatpickr/dist/flatpickr.min.css';

const days = document.querySelector('[data-days]')
const hours = document.querySelector('[data-hours]')
const mins = document.querySelector('[data-minutes]')
const secs = document.querySelector('[data-seconds]')
 const valueEl = document.querySelector('.value')

const startBtn = document.querySelector('button[data-start]')
 const inputEl = document.querySelector('#datetime-picker')
  // inputEl.addEventListener('input', updateTimerValue);
   
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
          // const endTime = Date.now()

        setInterval(() => {
          const currentTime = Date.now()
          console.log(currentTime);
          const counteTime = selectedTime.getTime() - currentTime
          console.log(convertMs(counteTime));
        const  { days, hours, mins, secs } = convertMs(counteTime)
         updateTimerValue({days, hours, mins, secs})
          console.log(`${days}:${hours}:${mins}:${secs}`);
      }, 1000)

}
// const timer = {
//     isActive: false,
//     end() {
//         if (this.isActive) {
//         return
//       }
    
//    },
// }

function updateTimerValue({days, hours, mins, secs}) {
valueEl.textContent = `${days}:${hours}:${mins}:${secs}`
};
// pad(value) {
//   return String(value).padStart(2, '0')
// }

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

  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}