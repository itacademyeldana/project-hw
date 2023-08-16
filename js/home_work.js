const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /[a-z]@gmail\.com$/
gmailButton.addEventListener('click', () => {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'Ok'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'error'
        gmailResult.style.color = 'red'
    }
})



// move_block

const childBlock = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const moveBlock = () => {
    if (positionX < 448 && positionY === 0) {
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 1)
    } else if (positionX >= 448 && positionY < 448){
        positionY++
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 1)
    } else if (positionX === 0 && positionY > 448) {
        positionX++
        childBlock.style.right = `${positionX}px`
        setTimeout(moveBlock, 1)
    }
}
moveBlock()


//stopwatch

const minutesBlock = document.querySelector('#minutes')
const secondsBlock = document.querySelector('#seconds')
const mlSecondsBlock = document.querySelector('#ml-seconds')

const btnStart = document.querySelector('#start')
const btnStop = document.querySelector('#stop')
const btnReset = document.querySelector('#reset')

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

const startTimer = () => {
     milliseconds++
    mlSecondsBlock.innerHTML = milliseconds

    if (milliseconds <= 99) {
         mlSecondsBlock.innerHTML = milliseconds
    }

    if (milliseconds == 100) {
        mlSecondsBlock.innerHTML = '00'
    }

    if (milliseconds <=9) {
        mlSecondsBlock.innerHTML = '0' + seconds
    }

    if (milliseconds > 99) {
        seconds++
        secondsBlock.innerHTML = '0' + seconds
        milliseconds = 0
    }
    if (seconds > 9) {
        secondsBlock.innerHTML = seconds
    }
    if (seconds > 59) {
        minutes++
        minutesBlock.innerHTML = '0' + minutes
        seconds = 0
        secondsBlock.innerHTML = '0' + seconds
    }
    if (minutes > 9) {
        minutesBlock.innerHTML = minutes
    }
}
btnStart.addEventListener('click',() => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})
btnStop.addEventListener('click',() => {
    clearInterval(interval)
})
btnReset.addEventListener('click',() => {
    clearInterval(interval)
    minutes = 0
    seconds = 0
    milliseconds = 0
    minutesBlock.innerHTML = '00'
    secondsBlock.innerHTML = '00'
    mlSecondsBlock.innerHTML = '00'
})
