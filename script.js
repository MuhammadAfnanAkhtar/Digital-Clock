const time = document.getElementById("time");
let format = document.getElementById("timeformat");

document.addEventListener('DOMContentLoaded',()=>{
    setInterval(showTime, 1000)
});

const showTime = ()=>{
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    h = h<10 ? `0${h}` : h;
    m = m<10 ? `0${m}` : m;
    s = s<10 ? `0${s}` : s;
    
    time.innerHTML = `${h} : ${m} : ${s}`;
    format.innerHTML = h>12 ? "PM" : "AM";
}