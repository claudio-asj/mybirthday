const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');



const niverDay = "21 Oct 2023";

function countdown(){
    const niverDayDate = new Date(niverDay);
    const currentDay = new Date();

    const totalSeconds = (niverDayDate - currentDay) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    //console.log(days, formatTime(hours) , formatTime(minutes), formatTime(seconds));

    daysEl.innerText = days;
    hoursEl.innerText = hours;
    minutesEl.innerText = minutes;
    secondsEl.innerText =seconds;


};

function formatTime(time){
    return time < 10 ? `0${time}`: time;
}

countdown();

setInterval(countdown, 1000);
