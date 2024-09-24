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
        currentTime -= 5
        // UPDATE LABEL !!!!!
        const hoursLabel = timer.querySelector(".h")
        const hoursLabelLetters = hoursLabel.querySelectorAll(".letter")
        const minsLabel = timer.querySelector(".m")
        const minsLabelLetters = minsLabel.querySelectorAll(".letter")
        const secsLabel = timer.querySelector(".s")
        const secsLabelLetters = secsLabel.querySelectorAll(".letter")
        const msLabel = timer.querySelector(".ms")
        let hours = currentTime / 3600000
        let floorHrs = r(hours)
        let remainingHrs = hours - floorHrs
        let mins = remainingHrs * 60
        let floorMins = r(mins)
        let remainingMins = mins - floorMins
        let secs = remainingMins * 60
        let floorSecs = r(secs)
        let remainingSecs = secs - floorSecs
        let ms = remainingSecs * 1000

        let paddedHrs = r(hours).toString().padStart(2, "0")
        let paddedMins = r(mins).toString().padStart(2, "0")
        let paddedSecs = r(secs).toString().padStart(2, "0")
        let paddedMs = r(secs).toString().padStart(3, "0")

        for (i=0; 2; i++) {
            console.log(hoursLabelLetters, hoursLabelLetters[i])
            hoursLabelLetters[i].dataset.num = paddedHrs.charAt(i)
            minsLabelLetters[i].dataset.num = paddedMins.charAt(i)
            secsLabelLetters[i].dataset.num = paddedSecs.charAt(i)
        }
        msLabel.innerHTML = `".${paddedMs}"`

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
    }, 5);
}

startTimer(3601234)