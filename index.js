const day = document.querySelector('.day')
const timeHolder = document.querySelector('.time')

let todayDate = new Date()

const DaysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

let today = todayDate.toUTCString();
day.textContent = DaysOfTheWeek[todayDate.getUTCDay()]

let utcTime = new Date(today).getTime()

const getCurrentTime =() => {
  utcTime -= 1000;
  timeHolder.textContent = new Date(utcTime).toUTCString()
}
setInterval(getCurrentTime, 1000)
