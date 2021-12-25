
    const startBtn = document.querySelector('button, data-start')
    const stopBtn = document.querySelector('button, data-stop')
    const bodyEl = document.querySelector('body')

    startBtn.addEventListener('click', onStartBtnClick)


    // const timerId = setTimeout(onStartBtnClick, 1000)

const onStartBtnClick = () => {
    setTimeout(() =>{
        bodyEl.style.backgroundColor = getRandomHexColor()},
1000)
    }

    function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
