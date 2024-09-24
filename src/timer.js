const timer = document.querySelector(".timer-countdown-container").querySelector(".timer-countdown")
let hasNotificationPermissions = false
Notification.requestPermission().then(res => {
    console.log("hi")
    if (res == "granted") {
        hasNotificationPermissions = true
    } else {
        hasNotificationPermissions = false
    }
})

const r = Math.floor

// timer length is in MILLISECONDS !!!
function startTimer(timerLen) {
    let currentTime = timerLen
    let timerItv = setInterval(() => {
        currentTime -= 1
        // UPDATE LABEL !!!!!
        const hoursLabel = timer.querySelector(".h")
        const minsLabel = timer.querySelector(".m")
        const secsLabel = timer.querySelector(".s")
        const msLabel = timer.querySelector(".ms")

        let hours = currentTime / 3600000
        let floorHrs = r(hours)
        let remainingHrs = hours - floorHrs
        let mins = remainingHrs * 60
        let secs = (hours * 60) * 60
        let ms = secs * 1000
        console.log(`${r(hours)}:${r(mins)}:${r(secs)}`)

        // END UP UPDATE LABEL !!!
        if (currentTime <= 0) {
            clearInterval(timerItv)
            // TIMER ENDED !!
            console.log("Timer ended")
            if (hasNotificationPermissions) {
                console.log("sending notif!")
                const notif = new Notification("Your timer is done!")
            }
        }
    }, 1);
}

startTimer(3601234)