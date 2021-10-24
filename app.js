const sel=(e,m)=>{if(m){return document.querySelectorAll(e)}else{return document.querySelector(e)}}
let overlay=sel(".overlay")
let btn=sel(".det button")
//Affecting Overlay
btn.addEventListener("mouseover",(e)=>{
    overlay.classList.add("active")
})
btn.addEventListener("mouseleave",(e)=>{
    overlay.classList.remove("active")
})
//Tracker
let tracker=sel(".indi")
let main=sel("html")
window.addEventListener("scroll",(e)=>{
    let percentage=(window.scrollY/((document.body.scrollHeight-window.innerHeight)/100))
    tracker.style.width=`${percentage}%`
})