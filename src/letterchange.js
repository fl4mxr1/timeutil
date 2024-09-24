const letterChangeEffects = document.querySelectorAll(".letterChangeFx")

Array.from(letterChangeEffects).forEach((v, i) => {
    let inner = v.querySelector(".inner")
    let old = inner.querySelector(".old")
    let cur = inner.querySelector(".cur")
    function OnLetterChange(oldLetter, newLetter) {
        console.log(oldLetter, newLetter)
        old.innerText = oldLetter || 0
        cur.innerText = newLetter || 0
        inner.animate([{translate: "0 100%"}, {translate: "0 0"}], {duration: 300, iterations: 1, easing: "cubic-bezier(.17,.67,.38,1.01)", fill: "forwards"})
        old.animate([{opacity: 0, filter: "blur(10px)"}, {opacity: 1}], {fill: "forwards", duration: 300, iterations: 1})
    }
    let ol, nl = v.dataset.num
    function CheckIfLetterChange() {
        nl = v.dataset.num
        if (ol != nl) {
            OnLetterChange(ol, nl)
            ol = v.dataset.num
        }
        requestAnimationFrame(CheckIfLetterChange)
    }
    CheckIfLetterChange()
    // little test thingy
    // setInterval(() => {
    //     v.dataset.num = Math.round(Math.random() * 9)
    // }, 1500)
})

