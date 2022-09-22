import './style.css'

setInterval(() => {

  function countDown(){
    const endDate = new Date("November 04, 2022 00:00:00").getTime();
    const now = new Date().getTime();
  
    const diff = endDate - now;
  
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;
  
    let timeDays = Math.floor(diff / days);

    let timeHours = Math.floor((diff % days) / hours);
    timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
  
    let timeMinutes = Math.floor((diff % hours) / minutes);
    timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
  
    let timeSeconds = Math.floor((diff % minutes) / seconds);
    timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;
  
    document.getElementById("days").innerHTML = timeDays;
    document.getElementById("hrs").innerHTML = timeHours;
    document.getElementById("mins").innerHTML = timeMinutes;
    document.getElementById("secs").innerHTML = timeSeconds;
  }

  countDown();

}, 100);