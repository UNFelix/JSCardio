const startBtn = document.getElementById('startBtn')
const stopBtn = document.getElementById('stopBtn')
const pauseBtn = document.getElementById('pauseBtn')
const resumeBtn = document.getElementById('resumeBtn')
const timer = document.getElementById('timer')

let time = 60
let interval
let onFinish
let status

startBtn.onclick = startTimer
stopBtn.onclick = stopTimer
pauseBtn.onclick = pauseTimer
resumeBtn.onclick = resumeTimer

function drawTime() {
  timer.innerText = time
}

function startTimer(){
  status = 'paused'
  time = 10
  resumeTimer()
}

function stopTimer(){
  if (status == 'stopped'){
    return
  }
  status = 'stopped'
  clearInterval(interval)
  drawTime()
  if (onFinish){
    onFinish()
  }
}

function pauseTimer(){
  if (status != 'running'){
    return
  }
  status = 'paused'
  clearInterval(interval)
  drawTime()
}

function resumeTimer(){
  if (status != 'paused'){
    return
  }
  status = 'running'
  drawTime()
  interval = setInterval(() => {
    if(time <= 0) {
      stopTimer()
    }
    else{
      time--
    }
    drawTime()
  }, 1000) 
}

onFinish = () => alert('timer stopped')
