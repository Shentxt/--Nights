window.addEventListener('load', function() {
    var savedTime = localStorage.getItem('time');
    if (savedTime) {
        document.getElementById('time-display').innerText = savedTime;
    } else {
        updateTime();
    }
});

function updateTime() {
    var currentTime = new Date();
    var timeString = currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();
    document.getElementById('time-display').innerText = timeString;
    localStorage.setItem('time', timeString);
}

setInterval(updateTime, 1000);
