let startDate = new Date('2019-04-09T00:00:00');

function updateTimer() {
    const now = new Date();
    let elapsedTime = Math.floor((now - startDate) / 1000); // Time difference in seconds

    let years = Math.floor(elapsedTime / 31536000);
    elapsedTime %= 31536000;
    let months = Math.floor(elapsedTime / 2592000);
    elapsedTime %= 2592000;
    let days = Math.floor(elapsedTime / 86400);
    elapsedTime %= 86400;
    let hours = Math.floor(elapsedTime / 3600);
    elapsedTime %= 3600;
    let minutes = Math.floor(elapsedTime / 60);
    let seconds = elapsedTime % 60;

    document.getElementById('years').innerText = (years < 10 ? '0' : '') + years;
    document.getElementById('months').innerText = (months < 10 ? '0' : '') + months;
    document.getElementById('days').innerText = (days < 10 ? '0' : '') + days;
    document.getElementById('hours').innerText = (hours < 10 ? '0' : '') + hours;
    document.getElementById('minutes').innerText = (minutes < 10 ? '0' : '') + minutes;
    document.getElementById('seconds').innerText = (seconds < 10 ? '0' : '') + seconds;
}

// Start the timer automatically
setInterval(updateTimer, 1000);
updateTimer(); // Update the time immediately on page load
