
const startBtn = document.querySelector('button[data-start]')
    const stopBtn = document.querySelector('button[data-stop]')
    const bodyEl = document.querySelector('body')

startBtn.addEventListener('click', () => {timer.start()} )
 stopBtn.addEventListener('click', () => { timer.stop()  } )
    
const timer = {
    isActive: false,
    start() {
        if (this.isActive) {
        return
        }
           this.isActive = true;

        timerId = setInterval(() => {
            bodyEl.style.backgroundColor = getRandomHexColor()
        }, 1000);
    },
    stop() {
            clearInterval(timerId)
            console.log(`Interval with id ${timerId} has stopped!`);
            this.isActive = false;
    }
    }
  
        function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        }
        

